<template>
  <div class="bg-gray-50">
    <div class="relative bg-indigo-600">
      <!-- Overlapping background -->
      <div
        aria-hidden="true"
        class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
      />

      <div
        class="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          <span class="block lg:inline">Industry first database CI/CD solution for team collaboration </span>
          <!-- <br />
          <span class="block lg:inline">for companies and developers</span> -->
        </h1>
      </div>

      <h2 class="sr-only">Plans</h2>

      <!-- Cards -->
      <div
        class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
      >
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
        />

        <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              plan.featured
                ? 'bg-white ring-2 ring-indigo-700 shadow-md'
                : 'bg-indigo-700 lg:bg-transparent',
              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12',
            ]"
          >
            <div>
              <h3
                :class="[
                  plan.featured ? 'text-indigo-600' : 'text-white',
                  'text-sm font-semibold uppercase tracking-wide',
                ]"
              >
                {{ plan.title }}
              </h3>
              <img
                :src="require(`~/assets/plans/plan-${plan.title.toLowerCase()}.webp`)"
                class="hidden lg:block w-2/3 m-auto"
              />

              <div class="flex flex-col items-center">
                <div class="mt-3 flex items-baseline">
                  <p
                    :class="[
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-4xl font-extrabold tracking-tight',
                    ]"
                  >
                    {{ plan.unitPrice }}
                  </p>
                </div>
                <button
                  :class="[
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50',
                    'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium',
                  ]"
                  @click="onButtonClick(plan)"
                >
                  {{ plan.buttonText }}
                </button>
              </div>
            </div>
            <h4 class="sr-only">Features</h4>
            <ul
              role="list"
              :class="[
                plan.featured
                  ? 'border-gray-200 divide-gray-200'
                  : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                'mt-7 border-t divide-y lg:border-t-0',
              ]"
            >
              <li
                v-for="(feature, index) in plan.mainFeatures"
                :key="index"
                class="py-3 flex items-center"
              >
                <CheckIcon
                  :class="[
                    plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                    'w-5 h-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
                <span
                  :class="[
                    plan.featured ? 'text-gray-600' : 'text-white',
                    'ml-3 text-sm font-medium',
                  ]"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature comparison (up to lg) -->
    <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
      <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="border-t border-gray-200"
        >
          <div
            :class="[
              plan.featured ? 'border-indigo-600' : 'border-transparent',
              '-mt-px pt-6 border-t-2 sm:w-1/2 m-auto',
            ]"
          >
            <h3
              :class="[
                plan.featured ? 'text-indigo-600' : 'text-gray-900',
                'text-sm font-bold',
              ]"
            >
              {{ plan.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
          </div>

          <div v-for="section in sections" :key="section.title">
            <h4 class="mt-10 text-sm font-bold text-gray-900">
              {{ section.title }}
            </h4>

            <div class="mt-6 relative">
              <!-- Fake card background -->
              <div
                aria-hidden="true"
                class="hidden absolute inset-0 pointer-events-none sm:block"
              >
                <div
                  :class="[
                    plan.featured ? 'shadow-md' : 'shadow',
                    'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                  ]"
                />
              </div>

              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-indigo-600 shadow-md'
                    : 'ring-1 ring-black ring-opacity-5 shadow',
                  'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none',
                ]"
              >
                <dl class="divide-y divide-gray-200">
                  <div
                    v-for="feature in section.features"
                    :key="feature.title"
                    class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                  >
                    <dt class="pr-4 text-sm font-medium text-gray-600">
                      {{ feature.title }}
                    </dt>
                    <dd
                      class="flex items-center justify-end sm:px-4 sm:justify-center"
                    >
                      <span
                        v-if="typeof feature.tiers[index].value === 'string'"
                        :class="[
                          feature.tiers[index].featured
                            ? 'text-indigo-600'
                            : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                        >{{ feature.tiers[index].value }}</span
                      >
                      <template v-else>
                        <CheckIcon
                          v-if="feature.tiers[index].value === true"
                          class="mx-auto h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        <XIcon
                          v-else
                          class="mx-auto h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="sr-only">{{
                          feature.tiers[index].value === true ? "Yes" : "No"
                        }}</span>
                      </template>
                    </dd>
                  </div>
                </dl>
              </div>

              <!-- Fake card border -->
              <div
                aria-hidden="true"
                class="hidden absolute inset-0 pointer-events-none sm:block"
              >
                <div
                  :class="[
                    plan.featured
                      ? 'ring-2 ring-indigo-600'
                      : 'ring-1 ring-black ring-opacity-5',
                    'absolute right-0 w-1/2 h-full rounded-lg',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-7xl mx-auto py-24 px-8">
        <div class="w-full border-t border-gray-200 flex items-stretch">
          <div class="-mt-px w-1/4 py-6 pr-4 flex items-end"></div>
          <div
            v-for="(plan, planIdx) in plans"
            :key="plan.title"
            aria-hidden="true"
            :class="[
              planIdx === plans.length - 1 ? '' : 'pr-4',
              '-mt-px pl-4 w-1/4',
            ]"
          >
            <div
              :class="[
                plan.featured ? 'border-indigo-600' : 'border-transparent',
                'py-6 border-t-2',
              ]"
            >
              <p
                :class="[
                  plan.featured ? 'text-indigo-600' : 'text-gray-900',
                  'text-sm font-bold',
                ]"
              >
                {{ plan.title }}
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
            </div>
          </div>
        </div>

        <div v-for="section in sections" :key="section.title">
          <h3 class="text-xl font-bold text-gray-900 text-left my-5">
            {{ section.title }}
          </h3>
          <div class="relative">
            <!-- Fake card backgrounds -->
            <div
              class="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div class="w-1/4 pr-4" />
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg shadow" />
              </div>
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg shadow-md" />
              </div>
              <div class="w-1/4 pl-4">
                <div class="w-full h-full bg-white rounded-lg shadow" />
              </div>
            </div>

            <table class="relative w-full">
              <caption class="sr-only">
                Business feature comparison
              </caption>
              <thead>
                <tr class="text-left">
                  <th scope="col">
                    <span class="sr-only">{{ section.title }}</span>
                  </th>
                  <th v-for="plan in plans" :key="plan.title" scope="col">
                    <span class="sr-only">{{ plan.title }} plan</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="feature in section.features" :key="feature.title">
                  <th
                    scope="row"
                    class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                  >
                    {{ feature.title }}
                  </th>
                  <td
                    v-for="(tier, tierIdx) in feature.tiers"
                    :key="tierIdx"
                    :class="[
                      tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                      'relative w-1/4 py-0 text-center',
                    ]"
                  >
                    <span class="relative w-full h-full py-3">
                      <span
                        v-if="typeof tier.value === 'string'"
                        :class="[
                          tier.featured ? 'text-indigo-600' : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                      >
                        {{ tier.value }}
                      </span>
                      <template v-else>
                        <CheckIcon
                          v-if="tier.value === true"
                          class="mx-auto h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        <XIcon
                          v-else
                          class="mx-auto h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="sr-only">{{
                          tier.value === true ? "Yes" : "No"
                        }}</span>
                      </template>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Fake card borders -->
            <div
              class="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div class="w-1/4 pr-4" />
              <div class="w-1/4 px-4">
                <div
                  class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"
                />
              </div>
              <div class="w-1/4 px-4">
                <div
                  class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100"
                />
              </div>
              <div class="w-1/4 pl-4">
                <div
                  class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { Plan, PlanType, FEATURE_SECTIONS, PLANS } from "../../common/plan";
import XIcon from "../../components/XIcon.vue"
import CheckIcon from "../../components/CheckIcon.vue"

interface LocalPlan extends Plan {
  featured: boolean;
  buttonText: string;
}

interface LocalFeature {
  title: string;
  tiers: {
    value: boolean | string;
    featured?: boolean;
  }[];
}

interface LocalFeatureSection {
  title: string;
  features: LocalFeature[];
}

export default defineComponent({
  components: {
    CheckIcon,
    XIcon,
  },
  setup() {
    const getButtonText = (plan: Plan): string => {
      if (plan.type === PlanType.FREE) return "Deploy";
      if (plan.type === PlanType.ENTERPRISE) return "Contact us";
      if (plan.trialDays && plan.trialPrice) {
        return `Start trial with $${plan.trialPrice} for ${plan.trialDays} days`;
      }
      return "Subscribe now";
    };

    const plans: LocalPlan[] = PLANS
      .map((plan) => ({
        ...plan,
        featured: plan.type === PlanType.TEAM,
        buttonText: getButtonText(plan),
        unitPrice:
          plan.type === PlanType.ENTERPRISE
            ? "Contact us"
            : `$${plan.unitPrice}/year`,
      }));
    const sections: LocalFeatureSection[] = FEATURE_SECTIONS.map((section) => {
      return {
        title: section.id,
        features: section.features.map((feature) => ({
          title: feature,
          tiers: plans.map((p) => {
            const supportFeature = p.features.find(
              (planFeature) => planFeature.id === feature
            );
            const value = supportFeature
              ? supportFeature.content || true
              : false;
            return {
              value,
              featured: p.featured,
            };
          }),
        })),
      };
    });

    return {
      plans,
      sections,
    };
  },
  methods: {
    onButtonClick(plan: Plan) {
      if (plan.type === PlanType.TEAM) {
        window.open(
          "https://hub.bytebase.com",
          "__blank"
        );
      } else if (plan.type === PlanType.ENTERPRISE) {
        window.open(
          "mailto:support@bytebase.com?subject=Request for enterprise plan"
        );
      } else {
        window.open("https://docs.bytebase.com/", "__blank");
      }
    },
  },
});
</script>
