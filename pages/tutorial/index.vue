<template>
  <div class="bg-white">
    <div>
      <!--
        Mobile filter dialog
  
        Off-canvas menu for mobile, show/hide based on off-canvas menu state.
      -->
      <div
        v-if="state.showSidebar"
        class="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div
          class="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        ></div>

        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
        <div
          class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto"
        >
          <div class="px-4 flex items-center justify-between">
            <div class="text-lg font-medium text-gray-900">Filters</div>
            <button
              type="button"
              class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
              @click.prevent="state.showSidebar = false"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Filters -->
          <form class="mt-4">
            <div class="border-t border-gray-200 pt-4 pb-4">
              <fieldset>
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    Level
                  </div>
                </legend>
                <div id="filter-section-0" class="pt-4 pb-2 px-4">
                  <div class="space-y-6">
                    <div
                      v-for="(filter, index) in state.levelFilterList"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        type="checkbox"
                        :value="filter.value"
                        :checked="filter.checked"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        @input="
                          () => {
                            filter.checked = !filter.checked;
                          }
                        "
                      />
                      <label class="ml-3 text-sm text-gray-600">
                        {{ filter.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>

          <form class="mt-4">
            <div class="border-t border-gray-200 pt-4 pb-4">
              <fieldset>
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    Integration
                  </div>
                </legend>
                <div id="filter-section-0" class="pt-4 pb-2 px-4">
                  <div class="space-y-6">
                    <div
                      v-for="(filter, index) in state.integrationFilterList"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        type="checkbox"
                        :value="filter.value"
                        :checked="filter.checked"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        @input="
                          () => {
                            filter.checked = !filter.checked;
                          }
                        "
                      />
                      <label class="ml-3 text-sm text-gray-600">
                        {{ filter.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>

      <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="pb-4">
          <h1
            class="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            📕 {{ $t("common.tutorials") }}
          </h1>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
            <button
              type="button"
              class="inline-flex items-center lg:hidden"
              @click="state.showSidebar = true"
            >
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <!-- Heroicon name: solid/plus-sm -->
              <svg
                class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div class="hidden lg:block">
              <form class="divide-y divide-gray-200 space-y-10">
                <div>
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">
                      Level
                    </legend>
                    <div class="pt-6 space-y-3">
                      <div
                        v-for="(filter, index) in state.levelFilterList"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          type="checkbox"
                          :value="filter.value"
                          :checked="filter.checked"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          @input="
                            () => {
                              filter.checked = !filter.checked;
                            }
                          "
                        />
                        <label class="ml-3 items-center text-sm text-gray-600">
                          {{ filter.name }}
                          <span
                            class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                          >
                            {{ levelTagItemCount(filter.value) }}
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
              <form class="mt-4 divide-y divide-gray-200 space-y-10">
                <div>
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">
                      Integration
                    </legend>
                    <div class="pt-6 space-y-3">
                      <div
                        v-for="(filter, index) in state.integrationFilterList"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          type="checkbox"
                          :value="filter.value"
                          :checked="filter.checked"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          @input="
                            () => {
                              filter.checked = !filter.checked;
                            }
                          "
                        />
                        <label class="ml-3 items-center text-sm text-gray-600">
                          {{ filter.name }}
                          <span
                            class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                          >
                            {{ integrationTagItemCount(filter.value) }}
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Tutorial grid -->
          <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div class="relative bg-white overflow-hidden space-y-6">
              <div
                v-for="(tutorial, index) in filteredTutorialList"
                :key="index"
                class="mx-2"
              >
                <div class="flex justify-between items-center">
                  <nuxt-link
                    :to="localePath(`/blog/${tutorial.slug}`)"
                    class="block text-2xl text-left font-semibold tracking-wide hover:underline"
                  >
                    {{ tutorial.title }}
                  </nuxt-link>
                  <div class="flex space-x-2">
                    <span
                      class="items-center px-3 py-0.5 mr-2 rounded-full"
                      :class="tutorialTagStyle(tutorial.level)"
                    >
                      {{ tutorial.level }}
                    </span>
                  </div>
                </div>
                <div class="mt-2 flex space-x-2 text-gray-500 items-center">
                  <img
                    v-for="(
                      integration, integrationIndex
                    ) in tutorial.integrations"
                    :key="integrationIndex"
                    :src="
                      require(`~/assets/logo/${integrationLogo(integration)}`)
                    "
                    class="h-6 w-auto"
                  />
                  <span aria-hidden="true">&middot;</span>
                  <time :datetime="tutorial.publishedAt">
                    {{ tutorial.publishedAt }}
                  </time>
                </div>
                <p class="mt-4 text-gray-600">
                  {{ tutorial.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@nuxtjs/composition-api";
import slug from "slug";
import {
  Integration,
  integrationLogo,
  TutorialLevel,
  tutorialTagStyle,
} from "~/common/type";

type LevelFilterItem = {
  value: TutorialLevel;
  name: string;
  checked: boolean;
};

const LEVEL_FILTER_LIST: LevelFilterItem[] = [
  {
    value: "Beginner",
    name: "Beginner",
    checked: false,
  },
  {
    value: "Intermediate",
    name: "Intermediate",
    checked: false,
  },
  {
    value: "Advanced",
    name: "Advanced",
    checked: false,
  },
];

type IntegrationFilterItem = {
  value: Integration;
  name: string;
  checked: boolean;
};

const INTEGRATION_FILTER_LIST: IntegrationFilterItem[] = [
  {
    value: "MySQL",
    name: "MySQL",
    checked: false,
  },
  {
    value: "PostgreSQL",
    name: "PostgreSQL",
    checked: false,
  },
  {
    value: "ClickHouse",
    name: "ClickHouse",
    checked: false,
  },
  {
    value: "TiDB",
    name: "TiDB",
    checked: false,
  },
  {
    value: "Snowflake",
    name: "Snowflake",
    checked: false,
  },
  {
    value: "MongoDB",
    name: "MongoDB",
    checked: false,
  },
  {
    value: "Spanner",
    name: "Spanner",
    checked: false,
  },
  {
    value: "Terraform",
    name: "Terraform",
    checked: false,
  },
  {
    value: "GitHub",
    name: "GitHub",
    checked: false,
  },
  {
    value: "GitLab",
    name: "GitLab",
    checked: false,
  },
];

type Tutorial = {
  title: string;
  description: string;
  slug: string;
  integrations: Integration[];
  publishedAt: string;
  level: TutorialLevel;
};

const TUTORIAL_LIST: Tutorial[] = [
  {
    title: "Database Change Management with PostgreSQL and GitHub",
    description:
      "This tutorial will bring your PostgreSQL schema change to the next level by introducing the GitOps workflow, where you commit schema change script to the GitHub repository, which will in turn trigger the schema deployment pipeline in Bytebase.",
    slug: "database-change-management-with-postgresql-and-github",
    integrations: ["PostgreSQL", "GitHub"],
    publishedAt: "2023/02/16 11:45",
    level: "Intermediate",
  },
  {
    title: "Database Change Management with PostgreSQL",
    description:
      "PostgreSQL is the world's most advanced open-source relational database management system. This tutorial will guide you step-by-step to set up database change management for PostgreSQL in Bytebase.",
    slug: "database-change-management-with-postgresql",
    integrations: ["PostgreSQL"],
    publishedAt: "2023/02/14 12:15",
    level: "Beginner",
  },
  {
    title: "Database Change Management with MySQL and GitHub",
    description:
      "This tutorial will bring your MySQL schema change to the next level by introducing the GitOps workflow, where you commit schema change script to the GitHub repository, which will in turn trigger the schema deployment pipeline in Bytebase.",
    slug: "database-change-management-with-mysql-and-github",
    integrations: ["MySQL", "GitHub"],
    publishedAt: "2023/02/08 11:15",
    level: "Intermediate",
  },
  {
    title: "Database Change Management with MySQL",
    description:
      "MySQL is the most popular open-source relational database management system. This tutorial will guide you step-by-step to set up database change management for MySQL in Bytebase.",
    slug: "database-change-management-with-mysql",
    integrations: ["MySQL"],
    publishedAt: "2023/02/07 11:15",
    level: "Beginner",
  },
  {
    title: "Manage Databases in Bytebase with Terraform",
    description:
      "This tutorial will guide you to use Terraform Bytebase Provider to manage your databases via Terraform.",
    slug: "manage-databases-in-bytebase-with-terraform",
    integrations: ["Terraform"],
    publishedAt: "2023/01/16 21:15",
    level: "Intermediate",
  },
  {
    title:
      "How to Configure Database Access Control and Data Anonymization for Developer",
    description:
      "This tutorial will walk you through how database access control and data anonymization works in Bytebase. You’ll need two Bytebase accounts – one DBA and one Developer.",
    slug: "how-to-configure-database-access-control-and-data-anonymization-for-developer",
    integrations: [],
    publishedAt: "2023/01/05 21:15",
    level: "Intermediate",
  },
  {
    title: "Database Change Management with TiDB and GitHub",
    description:
      "This tutorial will bring your TiDB schema change to the next level by introducing the GitOps workflow, where you commit the schema change script to the GitHub repository, which will in turn trigger the schema deployment pipeline in Bytebase.",
    slug: "database-change-management-with-tidb-and-github",
    integrations: ["TiDB", "GitHub"],
    publishedAt: "2023/01/04 21:15",
    level: "Intermediate",
  },
  {
    title: "Database Change Management with TiDB",
    description:
      "TiDB is an open-source NewSQL database that supports Hybrid Transactional and Analytical Processing workloads. This tutorial will guide you step-by-step to set up database change management for TiDB in Bytebase.",
    slug: "database-change-management-with-tidb",
    integrations: ["TiDB"],
    publishedAt: "2023/01/03 21:15",
    level: "Beginner",
  },
  {
    title: "Database Change Management with Snowflake and GitHub",
    description:
      "This tutorial will bring your Snowflake schema change to the next level by introducing the GitOps workflow, where you commit the schema change script to the GitHub repository, which will in turn trigger the schema deployment pipeline in Bytebase.",
    slug: "database-change-management-with-snowflake-and-github",
    integrations: ["Snowflake", "GitHub"],
    publishedAt: "2022/12/26 21:15",
    level: "Intermediate",
  },
  {
    title: "Database Change Management with Snowflake",
    description:
      "This tutorial will guide you step-by-step to set up database change management for Snowflake in Bytebase.",
    slug: "database-change-management-with-snowflake",
    integrations: ["Snowflake"],
    publishedAt: "2022/12/22 21:15",
    level: "Beginner",
  },
  {
    title: "How to integrate SQL Review into Your GitLab or GitHub CI/CD",
    description:
      "This is a tutorial on how to integrate SQL Review into your GitLab & GitHub CI/CD, so that SQL review is automatically triggered before SQL scripts are merged into your repos.",
    slug: "how-to-integrate-sql-review-into-gitlab-github-ci",
    integrations: ["GitHub", "GitLab"],
    publishedAt: "2022/12/2 21:21:21",
    level: "Intermediate",
  },
  {
    title: "How to Synchronize Database Schemas",
    description:
      "This article briefly describes the general scenarios of database schema synchronization and how to use this feature smoothly in Bytebase with pure UI operations.",
    slug: "how-to-synchronize-database-schemas",
    integrations: [],
    publishedAt: "2022/11/24 18:00",
    level: "Beginner",
  },
  {
    title: "How to Setup Database CI/CD with GitHub, Part 3: Put Them Together",
    description:
      "Now that you have finished Part 1 SQL Review GitHub Actions and Part 2 GitOps workflow, this final part will guide you through putting them together to run the whole process.",
    slug: "github-database-cicd-part-3-put-them-together",
    integrations: ["GitHub"],
    publishedAt: "2022/9/9 13:00:00",
    level: "Intermediate",
  },
  {
    title:
      "How to Setup Database CI/CD with GitHub, Part 2: GitHub.com Database GitOps",
    description:
      "This second part will guide you through configuring GitHub.com database GitOps with Bytebase. After following these steps, you can trigger database changes by merging sql files into your GitHub repository.",
    slug: "github-database-cicd-part-2-github-database-gitops",
    integrations: ["GitHub"],
    publishedAt: "2022/9/6 13:00:00",
    level: "Intermediate",
  },
  {
    title:
      "How to Setup Database CI/CD with GitHub, Part 1: Enable SQL Review with GitHub Actions",
    description:
      "This first article will guide you to enable SQL Review GitHub actions (developed by Bytebase) when there is a pull request in your repository.",
    slug: "github-database-cicd-part-1-sql-review-github-actions",
    integrations: ["GitHub"],
    publishedAt: "2022/9/2 13:00:00",
    level: "Intermediate",
  },
  {
    title: "The Database CI/CD Best Practice with GitHub",
    description:
      "We already have CI/CD for code delivery, why not the database? Imagine applying and deploying database changes the same way you would application code.",
    slug: "database-cicd-best-practice-with-github",
    integrations: ["GitHub"],
    publishedAt: "2022/08/31 15:15",
    level: "Intermediate",
  },
];

interface LocalState {
  levelFilterList: LevelFilterItem[];
  integrationFilterList: IntegrationFilterItem[];
  showSidebar: boolean;
}

export default defineComponent({
  setup() {
    const state = reactive<LocalState>({
      levelFilterList: LEVEL_FILTER_LIST,
      integrationFilterList: INTEGRATION_FILTER_LIST,
      showSidebar: false,
    });

    const levelTagItemCount = (level: TutorialLevel): number => {
      let count = 0;
      for (const tutorial of TUTORIAL_LIST) {
        if (tutorial.level == level) {
          count++;
        }
      }
      return count;
    };

    const integrationTagItemCount = (tag: Integration): number => {
      let count = 0;
      for (const tutorial of TUTORIAL_LIST) {
        if (tutorial.integrations.includes(tag)) {
          count++;
        }
      }
      return count;
    };

    const filteredTutorialList = computed(() => {
      const levelFilterTagList: TutorialLevel[] = [];
      for (const filter of state.levelFilterList) {
        if (filter.checked) {
          levelFilterTagList.push(filter.value);
        }
      }

      const integrationFilterTagList: Integration[] = [];
      for (const filter of state.integrationFilterList) {
        if (filter.checked) {
          integrationFilterTagList.push(filter.value);
        }
      }

      const list: any[] = [];
      for (const tutorial of TUTORIAL_LIST) {
        if (levelFilterTagList.length > 0) {
          if (!levelFilterTagList.includes(tutorial.level)) {
            continue;
          }
        }

        if (integrationFilterTagList.length > 0) {
          let found = false;
          for (const tag of integrationFilterTagList) {
            if (tutorial.integrations.includes(tag)) {
              found = true;
              break;
            }
          }
          if (!found) {
            continue;
          }
        }
        list.push(tutorial);
      }

      return list;
    });

    return {
      slug,
      state,
      levelTagItemCount,
      integrationTagItemCount,
      filteredTutorialList,
      integrationLogo,
      tutorialTagStyle,
    };
  },
  head: {
    title: "Tutorials",
    meta: [
      {
        hid: "Bytebase Tutorials",
        name: "Bytebase Tutorials",
        content: "Bytebase Tutorials",
      },
    ],
  },
});
</script>
