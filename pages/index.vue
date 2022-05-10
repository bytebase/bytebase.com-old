<template>
  <!-- xl:-mt-8 is negating the empty space used in the hero section  -->
  <div class="xl:-mt-8 overflow-hidden">
    <!-- Hero section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto xl:pt-16 2xl:pt-24">
        <!-- Set z-10 so the action buttons won't be covered by the illustration -->
        <div class="z-10 relative pb-8 xl:max-w-2xl xl:w-full">
          <div class="mx-auto max-w-6xl px-4">
            <div class="sm:text-center xl:text-left">
              <h1
                class="mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
                  >{{ $t("slogan.safer-and-faster") }}</span
                >
                <span class="block">
                  {{ $t("index-page.main-slogan.database-change") }}
                  <span class="xl:block">
                    {{ $t("index-page.main-slogan.and-version-control") }}
                  </span>
                  <span class="xl:block">
                    {{ $t("index-page.main-slogan.for") }}
                    <span
                      class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
                      >{{ $t("index-page.main-slogan.teams") }}</span
                    >
                  </span>
                </span>
              </h1>
              <h2
                class="tracking-tight mt-2 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-2xl xl:mx-0"
              >
                {{
                  $t(
                    "index-page.main-slogan.bytebase-offers-a-web-based-collaboration-workspace-to-help"
                  )
                }}
                <span
                  class="text-blue-600"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >{{ $t("index-page.main-slogan.DBAs") }}</span
                >
                {{ $t("index-page.main-slogan.and") }}
                <span
                  class="text-blue-600"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >{{ $t("index-page.main-slogan.developers") }}</span
                >
                {{
                  $t(
                    "index-page.main-slogan.manage-the-lifecycle-of-application-database-schemas-DDL-and-data-DML"
                  )
                }}
              </h2>
              <div class="flex mt-8 justify-center xl:justify-start">
                <DatabaseBar />
              </div>
              <div class="mt-12">
                <ActionSection
                  class="justify-center xl:justify-start"
                  :module-name="'main'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden xl:flex justify-center xl:absolute xl:inset-y-0 xl:-right-24 xl:w-2/3 2xl:w-3/4"
      >
        <img
          class="object-contain h-56 sm:h-72 md:h-96 xl:w-full xl:h-full"
          src="~/assets/illustration/main.webp"
          alt
        />
      </div>
    </div>

    <div class="mt-8 relative">
      <div class="flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
        <img
          class="order-2 relative lg:absolute shadow-lg mt-6 -ml-2 lg:ml-16 xl:ml-64 lg:z-10 lg:mt-96"
          src="~/assets/screenshot_task.webp"
          alt=" App screenshot"
        />
        <img
          class="order-1 relative shadow-md -ml-2 lg:mb-48"
          src="~/assets/screenshot_home.webp"
          alt="App screenshot"
        />
      </div>
    </div>

    <div class="relative bg-white py-16 sm:py-24 lg:py-32 mt-6 lg:mt-72">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base sm:text-2xl font-semibold tracking-wider text-indigo-600 uppercase"
        >
          {{ $t("index-page.features.database-migration.slogan") }}
        </h2>
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
        >
          {{
            $t("index-page.features.database-migration.industry-first-database")
          }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-700"
            >{{ $t("index-page.features.database-migration.devops") }}</span
          >
          {{
            $t(
              "index-page.features.database-migration.solution-for-DBA-&-Developer"
            )
          }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
            >{{
              $t("index-page.features.database-migration.collaboration")
            }}</span
          >
        </h2>
        <div class="mt-12">
          <FeatureSection />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{ $t("index-page.features.sql-review-and-version-control.title") }}
        </h2>
        <h3 class="mt-4 max-w-3xl text-left text-xl text-gray-500 lg:mx-auto">
          {{
            $t("index-page.features.sql-review-and-version-control.description")
          }}
        </h3>
      </div>
    </div>

    <div class="relative bg-white pt-16 pb-32 overflow-hidden">
      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="w-6 h-6 text-white"
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
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.ui-workflow.title") }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{ $t("index-page.features.ui-workflow.description") }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div
              class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/sqlreview.webp"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.version-control-workflow-gitops.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.version-control-workflow-gitops.description"
                    )
                  }}
                </h3>
                <div class="mt-6">
                  <nuxt-link
                    :to="localePath('/docs/features/version-control')"
                    class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    @click="track('docs.version-control')"
                    >{{
                      $t(
                        "index-page.features.version-control-workflow-gitops.see-guide"
                      )
                    }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div
              class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/versioncontrol.webp"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- begin/SQL Editor Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{ $t("index-page.features.all-in-one-sql-editor.title") }}
        </h2>
        <h3 class="mt-4 max-w-3xl text-center text-xl text-gray-500 lg:mx-auto">
          {{ $t("index-page.features.all-in-one-sql-editor.description") }}
        </h3>
      </div>
      <div class="py-16">
        <img
          class="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="~/static/docs-assets/sql-editor-preview.webp"
          alt="All-in-one SQL Editor"
        />
      </div>
    </div>

    <section class="relative bg-white pt-16 pb-32 overflow-hidden">
      <!-- Explore the Schema -->
      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <!-- Heroicon name: outline/database -->
                  <svg
                    role="img"
                    class="iconify iconify--heroicons-outline"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.explore-the-schema.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.explore-the-schema.description"
                    )
                  }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div
              class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_databases-search.webp"
                alt="Explore the Schema"
              />
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:bottom-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_databases-table-schema.webp"
                alt="Explore the Schema"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Smooth query editing experience -->
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.smooth-query-editing-experience.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.smooth-query-editing-experience.description"
                    )
                  }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div
              class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_autocomplete.webp"
                alt="Smooth query editing experience"
              />
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:bottom-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_format-sql.webp"
                alt="Smooth query editing experience"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Never Miss your Work -->
      <div class="relative mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <!-- Heroicon name: outline/document-text -->
                  <svg
                    role="img"
                    class="iconify iconify--heroicons-outline"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.never-miss-your-work.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.never-miss-your-work.description"
                    )
                  }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div
              class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_sheets.webp"
                alt="Never Miss your Work"
              />
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:bottom-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_history.webp"
                alt="Never Miss your Work"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Share Sheet with Teammates -->
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <!-- Heroicon name: outline/share -->
                  <svg
                    role="img"
                    class="iconify iconify--heroicons-outline"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 1 0 5.367-2.684a3 3 0 0 0-5.367 2.684zm0 9.316a3 3 0 1 0 5.368 2.684a3 3 0 0 0-5.368-2.684z"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.share-sheet-with-teammates.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.all-in-one-sql-editor.features.share-sheet-with-teammates.description"
                    )
                  }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div
              class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_share-popover.webp"
                alt="Share Sheet with Teammates"
              />
              <img
                class="w-3/4 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:bottom-0 lg:max-w-none"
                src="~/static/docs-assets/sql-editor_share-link-access.webp"
                alt="Share Sheet with Teammates"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of/SQL Editor Section -->

    <div class="pt-16 overflow-hidden">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="relative">
          <h2
            class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-center text-gray-900 tracking-tight mb-8"
          >
            {{
              $t("index-page.a-complete-rethink-to-deliver-experience.title")
            }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
              >{{
                $t(
                  "index-page.a-complete-rethink-to-deliver-experience.experience"
                )
              }}</span
            >
          </h2>
          <h3 class="mt-4 max-w-3xl mx-auto text-left text-xl text-gray-500">
            {{
              $t(
                "index-page.a-complete-rethink-to-deliver-experience.description"
              )
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
            <p class="mt-3 text-lg text-gray-500">
              {{
                $t(
                  "index-page.modern-collaborative-dev-tool.bytebase-aspires-to-tools-like"
                )
              }}
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
              >.
              {{ $t("index-page.modern-collaborative-dev-tool.description") }}
            </p>

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
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{
                    $t(
                      "index-page.modern-collaborative-dev-tool.features.usability.description"
                    )
                  }}
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
                  >.
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
                {{
                  $t("index-page.single-binary-with-curated-tech-stack.title")
                }}
              </h3>
              <p class="mt-3 text-lg text-gray-500">
                {{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.the-entire-app-is-bundled-in"
                  )
                }}
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
                {{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.and-started-via"
                  )
                }}
                <span
                  class="text-blue-600"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >{{
                    $t(
                      "index-page.single-binary-with-curated-tech-stack.bytebase"
                    )
                  }}</span
                >.
                {{
                  $t(
                    "index-page.single-binary-with-curated-tech-stack.description"
                  )
                }}
              </p>

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
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Vue + Tailwind CSS
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
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
                    {{
                      $t(
                        "index-page.single-binary-with-curated-tech-stack.tech-stacks.vue-feature"
                      )
                    }}
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
                    {{
                      $t(
                        "index-page.single-binary-with-curated-tech-stack.tech-stacks.tailwindcss-feature"
                      )
                    }}
                    <a
                      href="https://vitejs.dev/"
                      target="_blank"
                      class="text-blue-600"
                      style="
                        box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                          rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                      "
                      >Vite</a
                    >
                    {{
                      $t(
                        "index-page.single-binary-with-curated-tech-stack.tech-stacks.and"
                      )
                    }}
                    <a
                      href="https://typescriptlang.org/"
                      target="_blank"
                      class="text-blue-600"
                      style="
                        box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                          rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                      "
                      >TypeScript</a
                    >,
                    {{
                      $t(
                        "index-page.single-binary-with-curated-tech-stack.tech-stacks.typescript-feature"
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
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
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
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
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
    </div>

    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <ActionSection class="sm:justify-center" :module-name="'footer'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  components: {},
  setup() {
    const track = (name: string) => {
      trackEvent(name);
    };

    return {
      track,
    };
  },
  head: {
    title: "Bytebase | Safe Database Change and Version Control for Teams",
    meta: [
      {
        hid: "bytebase",
        name: "Bytebase | Safe Database Change and Version Control for Teams",
        content:
          "Safer and faster database change and version control for DBAs and Developers",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/assets/logo-full.svg`,
      },
    ],
  },
});
</script>
