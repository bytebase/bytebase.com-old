<template>
  <div class>
    <div class="relative">
      <div
        class="relative max-w-2xl mx-auto px-4 py-8 text-center sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
          <div class="relative">
            <svg
              class="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                stroke-width="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <h1
              class="relative text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
            >
              {{ $t("slogan.better-way") }}
            </h1>
          </div>
        </blockquote>
      </div>

      <div class="flex justify-center">
        <PastCompanyBar />
      </div>

      <h2 class="sr-only">Plans</h2>

      <!-- Cards -->
      <div
        class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
      >
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-white ring-2 ring-indigo-700 rounded-lg lg:block"
        ></div>

        <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              'bg-white',
              plan.featured
                ? 'ring-2 ring-indigo-700 shadow-md'
                : 'lg:bg-transparent',
              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12',
            ]"
          >
            <div>
              <div class="flex items-center h-7">
                <h2
                  class="text-indigo-600 text-sm font-semibold uppercase tracking-wide"
                >
                  {{ $t(`subscription.plan.${plan.title}.title`) }}
                </h2>
                <span
                  v-if="plan.label"
                  class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800"
                  >{{ $t(plan.label) }}</span
                >
              </div>
              <img
                :src="require(`~/assets/plans/plan-${plan.title}.webp`)"
                class="hidden lg:block w-2/3 m-auto"
              />
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center h-28 gap-y-1">
                  <div class="mt-3 flex items-baseline">
                    <p v-if="plan.pricePrefix" class="text-gray-400 mr-2">
                      {{ $t(plan.pricePrefix) }}
                    </p>
                    <p class="text-5xl font-extrabold tracking-tight">
                      ${{ plan.pricePerInstancePerMonth }}
                    </p>
                    <p v-if="plan.priceSuffix" class="text-gray-400 ml-2">
                      {{ $t(plan.priceSuffix) }}
                    </p>
                  </div>
                  <p class="text-gray-400">
                    {{ $t("subscription.per-instance") }}
                    {{ $t("subscription.per-month") }}
                  </p>
                  <p class="text-gray-400">
                    {{ $t(`subscription.${plan.title}-price-intro`) }}
                  </p>
                </div>
                <nuxt-link
                  v-if="plan.type == 0"
                  :to="
                    localePath('/docs/get-started/install/deploy-with-docker')
                  "
                  class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium"
                  @click="track('deploy')"
                  >{{ plan.buttonText }}</nuxt-link
                >
                <button
                  v-else
                  :class="[
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                      : 'ring-2 ring-indigo-600',
                    'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium',
                  ]"
                  @click="onTeamOrEnterpriseButtonClick(plan)"
                >
                  {{ plan.buttonText }}
                </button>
                <div
                  v-if="plan.trialDays"
                  class="font-bold text-sm my-2 text-center"
                >
                  {{ $t("subscription.free-trial") }}
                </div>
              </div>
            </div>
            <h4 class="sr-only">Features</h4>
            <ul
              role="list"
              class="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0"
            >
              <li
                v-for="(feature, index) in plan.mainFeatureList"
                :key="index"
                class="py-3 flex items-center"
              >
                <CheckIcon
                  class="text-indigo-500 w-5 h-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="text-gray-600 ml-3 text-sm font-medium">
                  {{ $t(`subscription.main-features.${feature}`) }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">
        <i18n path="subscription.announcement" for="cancel">
          <template #cancel>
            <nuxt-link :to="localePath('/refund')" class="underline">{{
              $t("subscription.cancel")
            }}</nuxt-link>
          </template>
        </i18n>
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
              {{ $t(`subscription.plan.${plan.title}.title`) }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ $t(`subscription.plan.${plan.title}.desc`) }}
            </p>
            <nuxt-link
              v-if="plan.type == 0"
              :to="localePath('/docs/get-started/install/deploy-with-docker')"
              class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium"
              >{{ plan.buttonText }}</nuxt-link
            >
            <button
              v-else
              :class="[
                plan.featured
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                  : 'ring-2 ring-indigo-600',
                'mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium',
              ]"
              @click="onTeamOrEnterpriseButtonClick(plan)"
            >
              {{ plan.buttonText }}
            </button>
          </div>

          <div v-for="section in sections" :key="section.title">
            <h4 class="mt-10 text-sm font-bold text-gray-900">
              {{ $t(`subscription.feature-sections.${section.title}.title`) }}
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
                ></div>
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
                      {{
                        $t(
                          `subscription.feature-sections.${section.title}.features.${feature.title}`
                        )
                      }}
                    </dt>
                    <dd
                      class="flex items-center justify-end sm:px-4 sm:justify-center"
                    >
                      <span
                        v-if="feature.tiers[index].content"
                        :class="[
                          feature.tiers[index].featured
                            ? 'text-indigo-600'
                            : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                        >{{ $t(`${feature.tiers[index].content}`) }}</span
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
                        <span class="sr-only">
                          {{
                            feature.tiers[index].value === true ? "Yes" : "No"
                          }}
                        </span>
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
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-7xl mx-auto px-8">
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
              <div class="flex items-center h-7">
                <p
                  :class="[
                    plan.featured ? 'text-indigo-600' : 'text-gray-900',
                    'text-sm font-bold',
                  ]"
                >
                  {{ $t(`subscription.plan.${plan.title}.title`) }}
                </p>
                <span
                  v-if="plan.label"
                  class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800"
                  >{{ $t(plan.label) }}</span
                >
              </div>
              <p class="mt-2 text-sm text-gray-500 h-10">
                {{ $t(`subscription.plan.${plan.title}.desc`) }}
              </p>
              <nuxt-link
                v-if="plan.type == 0"
                :to="localePath('/docs/get-started/install/deploy-with-docker')"
                class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium"
                >{{ plan.buttonText }}</nuxt-link
              >
              <button
                v-else
                :class="[
                  plan.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                    : 'ring-2 ring-indigo-600',
                  'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium',
                ]"
                @click="onTeamOrEnterpriseButtonClick(plan)"
              >
                {{ plan.buttonText }}
              </button>
              <div
                v-if="plan.trialDays"
                class="font-bold text-sm my-2 text-center"
              >
                {{ $t("subscription.free-trial") }}
              </div>
            </div>
          </div>
        </div>

        <div v-for="section in sections" :key="section.title">
          <h3 class="text-xl font-bold text-gray-900 text-left my-5">
            {{ $t(`subscription.feature-sections.${section.title}.title`) }}
          </h3>
          <div class="relative">
            <!-- Fake card backgrounds -->
            <div
              class="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div class="w-1/4 pr-4"></div>
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg"></div>
              </div>
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg"></div>
              </div>
              <div class="w-1/4 pl-4">
                <div class="w-full h-full bg-white rounded-lg"></div>
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
                    <span class="sr-only">{{
                      $t(`subscription.plan.${plan.title}.title`)
                    }}</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="feature in section.features" :key="feature.title">
                  <th
                    scope="row"
                    class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                  >
                    {{
                      $t(
                        `subscription.feature-sections.${section.title}.features.${feature.title}`
                      )
                    }}
                  </th>
                  <td
                    v-for="(tier, tierIdx) in feature.tiers"
                    :key="tierIdx"
                    :class="[
                      tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                      tier.featured ? 'text-indigo-600' : 'text-gray-900',
                      'relative w-1/4 py-0 text-center',
                    ]"
                  >
                    <span class="w-full h-full py-3 flex justify-center">
                      <span
                        v-if="tier.content"
                        :class="['text-sm font-medium']"
                        >{{ $t(tier.content) }}</span
                      >
                      <template v-else>
                        <CheckIcon
                          v-if="tier.value === true"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                        <XIcon v-else class="h-5 w-5" aria-hidden="true" />
                        <span class="sr-only">
                          {{ tier.value === true ? "Yes" : "No" }}
                        </span>
                      </template>
                      <span v-if="tier.tooltip" class="tooltip-wrapper ml-1">
                        <QuestionIcon class="h-5 w-5" />
                        <!-- class="h-5 w-5" -->
                        <span class="tooltip whitespace-nowrap">{{
                          $t(tier.tooltip)
                        }}</span>
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex">
          <div class="w-1/4 pr-4"></div>
          <div
            v-for="(plan, planIndex) in plans"
            :key="plan.title"
            :class="[
              planIndex === plans.length - 1 ? 'pl-4' : 'px-4',
              'relative w-1/4 py-0 text-center',
            ]"
          >
            <nuxt-link
              v-if="plan.type == 0"
              :to="localePath('/docs/get-started/install/deploy-with-docker')"
              class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium"
              >{{ plan.buttonText }}</nuxt-link
            >
            <button
              v-else
              :class="[
                plan.featured
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                  : 'ring-2 ring-indigo-600',
                'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium',
              ]"
              @click="onTeamOrEnterpriseButtonClick(plan)"
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-7xl mx-auto px-4 py-4 pb-24 text-right text-gray-400">
      <i18n path="subscription.announcement" for="cancel">
        <template #cancel>
          <nuxt-link :to="localePath('/refund')" class="underline">{{
            $t("subscription.cancel")
          }}</nuxt-link>
        </template>
      </i18n>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  onMounted,
  watchEffect,
} from "@nuxtjs/composition-api";
import {
  Metric,
  PAGE,
  ACTION,
  PRICING_EVENT,
  useSegment,
} from "~/plugin/segment";
import { Plan, PlanType, FEATURE_SECTIONS, PLANS } from "~/common/plan";
import XIcon from "~/components/XIcon.vue";
import CheckIcon from "~/components/CheckIcon.vue";
import QuestionIcon from "~/components/QuestionIcon.vue";
import { useAuth0, IAtuhPlugin } from "~/plugin/auth0";
import { useCookie } from "~/plugin/cookie";

interface LocalPlan extends Plan {
  label?: string;
  featured: boolean;
  buttonText: string;
  pricePrefix: string;
  priceSuffix: string;
}

interface LocalFeatureTier {
  value: boolean;
  featured?: boolean;
  content?: string;
  tooltip?: string;
}

interface LocalFeature {
  title: string;
  tiers: LocalFeatureTier[];
}

interface LocalFeatureSection {
  title: string;
  features: LocalFeature[];
}

export default defineComponent({
  components: {
    CheckIcon,
    QuestionIcon,
    XIcon,
  },
  setup() {
    const { app } = useContext();
    const analytics = ref<Metric>();
    const auth0 = ref<IAtuhPlugin>();

    const getButtonText = (plan: Plan): string => {
      if (plan.type === PlanType.FREE)
        return app.i18n.t("common.deploy-now") as string;
      if (plan.type === PlanType.ENTERPRISE)
        return app.i18n.t("subscription.contact-us") as string;
      if (plan.trialDays) {
        return app.i18n.t("subscription.start-trial") as string;
      }
      return app.i18n.t("subscription.subscribe") as string;
    };

    const plans: LocalPlan[] = PLANS.map((plan) => ({
      ...plan,
      label: app.i18n.t(`subscription.plan.${plan.title}.label`) as string,
      featured: plan.type === PlanType.TEAM,
      buttonText: getButtonText(plan),
      pricePrefix:
        plan.type === PlanType.ENTERPRISE ? "subscription.start-from" : "",
      priceSuffix:
        plan.type === PlanType.ENTERPRISE
          ? "pricing.price-suffix-for-enterprise"
          : "",
    }));

    const sections: LocalFeatureSection[] = FEATURE_SECTIONS.map((section) => {
      return {
        title: section.type,
        features: section.featureList.map((feature) => ({
          title: feature,
          tiers: plans.map((p) => {
            const supportFeature = p.featureList.find(
              (planFeature) => planFeature.type === feature
            );
            const res: LocalFeatureTier = {
              value: !!supportFeature,
              featured: p.featured,
            };

            if (supportFeature?.content) {
              res.content = `subscription.feature-sections.${section.type}.features.${supportFeature.content}`;
            }

            if (supportFeature?.tooltip) {
              res.tooltip = `subscription.feature-sections.${section.type}.features.${supportFeature.tooltip}`;
            }
            return res;
          }),
        })),
      };
    });

    onMounted(() => {
      auth0.value = useAuth0();
      watchEffect(() => {
        analytics.value = useSegment().analytics;
      });
    });

    const login = () => {
      analytics.value?.track(PRICING_EVENT.LOGIN_CLICK);
      const url = `https://hub.bytebase.com/subscription?${buildUrlParamater()}`;

      auth0.value?.isAuthenticated().then((isAuthenticated) => {
        if (isAuthenticated) {
          window.open(url, "__blank");
        } else {
          auth0.value?.loginWithRedirect({
            redirectUrl: url,
          });
        }
      });
    };

    const buildUrlParamater = (): string => {
      const cookie = useCookie();

      const queryObj = {
        utm_source: cookie.get("utm_source"),
        utm_medium: cookie.get("utm_medium"),
        utm_campaign: cookie.get("utm_campaign"),
        source: PAGE.PRICING,
        trial: `${PlanType.TEAM}`,
      };
      return new URLSearchParams(queryObj).toString();
    };

    const onTeamOrEnterpriseButtonClick = (plan: Plan) => {
      if (plan.type === PlanType.TEAM) {
        analytics.value?.track(PRICING_EVENT.TEAM_PLAN_CLICK);
        login();
      } else if (plan.type === PlanType.ENTERPRISE) {
        analytics.value?.track(PRICING_EVENT.ENTERPRISE_PLAN_CLICK);
        window.open(
          "mailto:support@bytebase.com?subject=Request for enterprise plan"
        );
      }
    };

    const track = (component: string) => {
      analytics.value?.track(`${PAGE.PRICING}.${component}.${ACTION.CLICK}`);
    };

    return {
      plans,
      sections,
      track,
      onTeamOrEnterpriseButtonClick,
    };
  },
  head() {
    return {
      title: "Bytebase Pricing",
      meta: [
        {
          hid: "Bytebase Pricing",
          name: "Bytebase Pricing",
          content:
            "Free to start. Paid plan available. Cancel anytime. No hidden charges.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  @apply relative;
}

.tooltip {
  @apply hidden absolute -top-10 left-4 px-2 py-1 rounded bg-black bg-opacity-80 text-white;
  transform: translateX(-50%);
}

.tooltip-wrapper:hover .tooltip {
  @apply block z-50;
}
</style>
