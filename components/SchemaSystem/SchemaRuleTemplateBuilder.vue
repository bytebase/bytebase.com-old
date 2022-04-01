<template>
  <div class="border-1 border-gray-300 rounded">
    <div class="flex flex-wrap gap-4 p-3 bg-gray-50 rounded">
      <div
        v-for="template in templates"
        :key="template.id"
        class="px-4 py-1 rounded text-sm font-sm font-normal border-1 border-gray-300 bg-gray-100 cursor-pointer tooltip-wrapper"
        @click="() => onTemplateAdd(template)"
      >
        {{ template.id }}
        <span class="tooltip whitespace-nowrap">{{ template.tip }}</span>
      </div>
    </div>
    <div class="p-2 border-t-1 border-gray-300">
      <div ref="containerRef" class="flex flex-wrap items-center gap-1">
        <div v-for="(data, i) in state.templateInputs" :key="i">
          <Badge
            v-if="data.type === 'template'"
            :text="data.value"
            @on-remove="() => onTemplateRemove(i)"
          />
          <AutoWidthInput
            v-else
            :value="data.value"
            :max-width="state.inputMaxWidth"
            class-name="px-0 m-0 py-1 cleared-input"
            @on-keyup="(e) => onKeyup(i, e)"
            @on-change="(val) => onTemplateChange(i, val)"
          />
        </div>
        <input
          ref="inputRef"
          v-model="state.inputData"
          class="flex-1 px-0 m-0 py-1 cleared-input"
          type="text"
          @keydown.delete="onInputDataDeleteEnter"
          @keyup.delete="onInputDataDeleteLeave"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  watch,
  watchEffect,
  ref,
  PropType,
} from "@nuxtjs/composition-api";
import Badge from "../Badge.vue";
import AutoWidthInput from "../AutoWidthInput.vue";
import { RuleTemplate } from "../../common/schemaSystem";

interface TemplateInput {
  value: string;
  type: "string" | "template";
}

interface LocalState {
  inputData: string;
  inputMaxWidth: number;
  templateInputs: TemplateInput[];
}

const getTemplateInputs = (
  value: string,
  templates: RuleTemplate[]
): TemplateInput[] => {
  let start = 0;
  let end = 0;
  const res: TemplateInput[] = [];
  const templateSet = new Set<string>(templates.map((t) => t.id));

  while (end <= value.length - 1) {
    if (
      value.slice(end, end + 2) === "}}" &&
      value.slice(start, start + 2) === "{{"
    ) {
      const str = value.slice(start + 2, end);
      if (templateSet.has(str)) {
        res.push({
          value: str,
          type: "template",
        });
      } else {
        res.push({
          value: `{{${str}}}`,
          type: "string",
        });
        if (res.length > 1 && res[res.length - 2].type === "string") {
          const last = res.pop();
          if (last) {
            res[res.length - 1].value = `${res[res.length - 1].value}${
              last.value
            }`;
          }
        }
      }
      end += 2;
      start = end;
    } else if (value.slice(end, end + 2) === "{{") {
      res.push({
        value: value.slice(start, end),
        type: "string",
      });
      if (res.length > 1 && res[res.length - 2].type === "string") {
        const last = res.pop();
        res[res.length - 1].value = `${res[res.length - 1].value}${
          last ? last.value : ""
        }`;
      }
      start = end;
      end += 2;
    } else {
      end += 1;
    }
  }

  if (start < end) {
    res.push({
      value: value.slice(start, end),
      type: "string",
    });
  }

  return res;
};

const templateInputsToString = (inputs: TemplateInput[]): string => {
  return inputs
    .map((input) =>
      input.type === "string" ? input.value : `{{${input.value}}}`
    )
    .join("");
};

export default defineComponent({
  components: {
    Badge,
    AutoWidthInput,
  },
  props: {
    value: {
      default: "",
      type: String,
    },
    templates: {
      require: true,
      default: () => [],
      type: Array as PropType<RuleTemplate[]>,
    },
  },
  emits: ["on-change"],
  setup(props, { emit }) {
    const templateInputs = getTemplateInputs(props.value, props.templates);
    let inputData = "";

    if (
      templateInputs.length > 0 &&
      templateInputs[templateInputs.length - 1].type === "string"
    ) {
      const last = templateInputs.pop();
      if (last) {
        inputData = last.value;
      }
    }

    const state = reactive<LocalState>({
      inputData,
      inputMaxWidth: 0,
      templateInputs,
    });

    watch(
      () => state.templateInputs,
      (val) => {
        emit("on-change", `${templateInputsToString(val)}${state.inputData}`);
      },
      { deep: true }
    );

    watch(
      () => state.inputData,
      (val) => {
        emit(
          "on-change",
          `${templateInputsToString(state.templateInputs)}${val}`
        );
      }
    );

    const containerRef = ref<HTMLDivElement>();
    const inputRef = ref<HTMLInputElement>();

    watchEffect(() => {
      if (containerRef.value) {
        state.inputMaxWidth = containerRef.value.offsetWidth;
      }
    });

    return {
      state,
      containerRef,
      inputRef,
    };
  },
  created() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  },
  unmounted() {
    window.removeEventListener("resize", this.onWindowResize.bind(this));
  },
  methods: {
    onWindowResize() {
      if (this.containerRef && this.containerRef) {
        this.state.inputMaxWidth = this.containerRef.offsetWidth;
      }
    },
    onInputDataDeleteEnter(e: KeyboardEvent) {
      if (!this.state.inputData && this.state.templateInputs.length > 0) {
        const last = this.state.templateInputs.slice(-1)[0];
        if (last.type === "template") {
          this.state.templateInputs.pop();
        }
      }
    },
    onInputDataDeleteLeave(e: KeyboardEvent) {
      if (!this.state.inputData && this.state.templateInputs.length > 0) {
        const last = this.state.templateInputs.slice(-1)[0];
        if (last && last.type === "string") {
          const target = this.state.templateInputs.pop();
          if (target) {
            this.state.inputData = target.value;
          }
        }
      }
    },
    onKeyup(i: number, e: KeyboardEvent) {
      const data = this.state.templateInputs[i];
      if (!data) {
        return;
      }

      if (e.key !== "Delete" || data.value !== "") {
        return;
      }

      this.onTemplateRemove(i);
    },
    onTemplateChange(i: number, data: string) {
      const target = this.state.templateInputs[i];
      if (!target) {
        return;
      }

      this.state.templateInputs = [
        ...this.state.templateInputs.slice(0, i),
        {
          value: data,
          type: target.type,
        },
        ...this.state.templateInputs.slice(i + 1),
      ];
    },
    onTemplateAdd(template: RuleTemplate) {
      if (this.state.inputData) {
        this.state.templateInputs.push({
          value: this.state.inputData,
          type: "string",
        });
      }

      this.state.templateInputs.push({
        value: template.id,
        type: "template",
      });

      this.state.inputData = "";
      if (this.inputRef) {
        this.inputRef.focus();
      }
    },
    onTemplateRemove(i: number) {
      this.state.templateInputs = [
        ...this.state.templateInputs.slice(0, i),
        ...this.state.templateInputs.slice(i + 1),
      ];

      if (this.state.templateInputs.length === 0) {
        return;
      }
      if (i - 1 < 0 || i - 1 >= this.state.templateInputs.length) {
        return;
      }

      const template = this.state.templateInputs[i - 1];
      if (template.type !== "string") {
        return;
      }

      if (i === this.state.templateInputs.length) {
        const last = this.state.templateInputs.pop();

        this.state.inputData = `${
          last ? last.value : ""
        }${this.state.inputData}`;
      } else if (this.state.templateInputs[i].type === "string") {
        this.state.templateInputs = [
          ...this.state.templateInputs.slice(0, i - 1),
          {
            value: `${template.value}${this.state.templateInputs[i].value}`,
            type: "string",
          },
          ...this.state.templateInputs.slice(i + 1),
        ];
      }
    },
  },
});
</script>

<style scoped>
.cleared-input,
.cleared-input:focus {
  @apply shadow-none ring-0 border-0 border-none;
}
</style>
