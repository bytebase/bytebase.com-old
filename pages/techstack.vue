<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="relative">
      <i18n
        path="index-page.a-complete-rethink-to-deliver-experience.title"
        tag="h2"
        class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-center text-gray-900 tracking-tight mb-8"
      >
        <template #deliver-experience>
          <span
            class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
            >{{
              $t(
                "index-page.a-complete-rethink-to-deliver-experience.deliver-experience"
              )
            }}</span
          >
        </template>
      </i18n>
      <h3 class="mt-4 max-w-3xl mx-auto text-left text-xl text-gray-500">
        {{
          $t("index-page.a-complete-rethink-to-deliver-experience.description")
        }}
      </h3>
    </div>

    <div
      class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
    >
      <div class="relative">
        <h3
          class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
        >
          {{ $t("index-page.modern-collaborative-dev-tool.title") }}
        </h3>
        <i18n
          path="index-page.modern-collaborative-dev-tool.description"
          tag="p"
          class="mt-3 text-lg text-gray-500"
        >
          <template #links>
            <a
              href="https://figma.com"
              target="_blank"
              class="text-blue-600"
              style="
                box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                  rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
              "
              >Figma</a
            >,
            <a
              href="https://about.gitlab.com"
              target="_blank"
              class="text-blue-600"
              style="
                box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                  rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
              "
              >GitLab</a
            >,
            <a
              href="https://www.terraform.io/"
              target="_blank"
              class="text-blue-600"
              style="
                box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                  rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
              "
              >Terraform</a
            >
          </template>
        </i18n>
        <dl class="mt-10 space-y-10">
          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{
                  $t(
                    "index-page.modern-collaborative-dev-tool.features.plug-and-play.title"
                  )
                }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{
                $t(
                  "index-page.modern-collaborative-dev-tool.features.plug-and-play.description"
                )
              }}
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{
                  $t(
                    "index-page.modern-collaborative-dev-tool.features.usability.title"
                  )
                }}
              </p>
            </dt>
            <i18n
              path="index-page.modern-collaborative-dev-tool.features.usability.description"
              tag="dd"
              class="mt-2 ml-16 text-base text-gray-500"
            >
              <template #confusing-interface>
                <a
                  href="https://www.businessinsider.fr/us/citigroup-accidental-wire-transfer-payment-design-interface-oracle-flexcube-2021-2"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >{{
                    $t(
                      "index-page.modern-collaborative-dev-tool.features.usability.confusing-interface"
                    )
                  }}</a
                >
              </template>
            </i18n>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{
                  $t(
                    "index-page.modern-collaborative-dev-tool.features.extensibility.title"
                  )
                }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{
                $t(
                  "index-page.modern-collaborative-dev-tool.features.extensibility.description"
                )
              }}
            </dd>
          </div>
        </dl>
      </div>

      <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
        <svg
          class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          width="784"
          height="404"
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="784"
            height="404"
            fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
          />
        </svg>
        <img
          class="relative mx-auto"
          width="480"
          src="~/assets/othertools.svg"
          alt
        />
      </div>
    </div>

    <div id="techstack" class="relative mt-12 sm:mt-16 lg:mt-24">
      <div
        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="lg:col-start-2">
          <h3
            class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
          >
            {{ $t("index-page.single-binary-with-curated-tech-stack.title") }}
          </h3>
          <i18n
            path="index-page.single-binary-with-curated-tech-stack.description"
            tag="p"
            class="mt-3 text-lg text-gray-500"
          >
            <template #a-single-binary>
              <span
                class="text-blue-600"
                style="
                  box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                    rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                "
                >{{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.a-single-binary"
                  )
                }}</span
              >
            </template>
            <template #bytebase-link>
              <span
                class="text-blue-600"
                style="
                  box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                    rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                "
                >{{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.a-single-binary"
                  )
                }}</span
              >
            </template>
          </i18n>

          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Vue + Tailwind CSS
                </p>
              </dt>
              <i18n
                path="index-page.single-binary-with-curated-tech-stack.tech-stacks.vue-feature"
                tag="dd"
                class="mt-2 ml-16 text-base text-gray-500"
              >
                <template #vue-link>
                  <a
                    href="https://v3.vuejs.org/"
                    target="_blank"
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >Vue</a
                  >
                </template>
                <template #tailwindcss-link>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >Tailwind CSS</a
                  >
                </template>
                <template #vite-link>
                  <a
                    href="https://typescriptlang.org/"
                    target="_blank"
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >Vite</a
                  >
                </template>
                <template #typescript-link>
                  <a
                    href="https://typescriptlang.org/"
                    target="_blank"
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >TypeScript</a
                  >
                </template>
              </i18n>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Golang
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                <a
                  href="https://golang.org/"
                  target="_blank"
                  class="text-blue-600"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >Golang</a
                >
                {{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.tech-stacks.golang-feature"
                  )
                }}
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  PostgreSQL
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                <a
                  href="https://postgresql.org/"
                  target="_blank"
                  class="text-blue-600"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >PostgreSQL</a
                >
                {{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.tech-stacks.postgresql-feature"
                  )
                }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
            />
          </svg>
          <img
            class="relative mx-auto"
            width="490"
            src="~/assets/techstack.webp"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {},
  head: {
    title: "Tech Stack",
    meta: [
      {
        hid: "Bytebase Teck Stack",
        name: "Bytebase Teck Stack",
        content: "Bytebase Teck Stack",
      },
    ],
  },
});
</script>
