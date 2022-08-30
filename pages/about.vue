<template>
  <div>
    <section class="overflow-hidden">
      <div class="flex">
        <img
          class="w-full"
          src="~/assets/illustration/about_banner.webp"
          alt=""
        />
      </div>

      <div class="relative max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <h1>
            <span
              class="block text-2xl text-center text-indigo-600 font-semibold tracking-wide uppercase"
              >{{ $t("about.why-we-build-title") }}</span
            >
          </h1>
          <blockquote class="mt-10">
            <div
              class="max-w-5xl mx-auto text-left text-2xl leading-9 text-gray-900"
            >
              <p class="mt-6">
                <i18n path="about.why-we-build" tag="h1">
                  <template #reliable>
                    <span class="underline inline font-semibold">{{
                      $t("about.reliable")
                    }}</span>
                    <span class="inline font-semibold">{{
                      $t("about.comma")
                    }}</span>
                  </template>
                  <template #consistent>
                    <span class="underline inline font-semibold">{{
                      $t("about.consistent")
                    }}</span>
                    <span class="inline font-semibold">{{
                      $t("about.comma")
                    }}</span>
                  </template>
                  <template #auditable>
                    <span class="underline inline font-semibold"></span
                    ><span class="underline inline font-semibold">{{
                      $t("about.auditable")
                    }}</span>
                  </template>
                </i18n>
              </p>
              <p class="mt-6"></p>
              <p class="mt2">
                {{ $t("about.what-is") }}
                <a
                  href="https://about.gitlab.com"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >GitLab</a
                >
                {{ $t("about.gitlab-for-database") }}
              </p>
              <p class="mt-2">
                {{ $t("about.what-is") }}
                <a
                  href="https://figma.com"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >Figma</a
                >
                {{ $t("about.figma-for-dba") }}
              </p>
              <p class="mt-2">
                {{ $t("about.what-is") }}
                <a
                  href="https://terraform.io"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="
                    box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                      rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                  "
                  >Terraform</a
                >
                {{ $t("about.terraform-for-database-as-code") }}
              </p>

              <p class="mt-6">{{ $t("about.there-is-no-good-answer") }}</p>
              <p class="mt-6">
                <i18n path="about.porsche-example" tag="h1">
                  <template #bytebase>
                    <span
                      class="text-indigo-600 font-semibold"
                      style="
                        box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                          rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                      "
                    >
                      {{ $t("common.bytebase") }}</span
                    >
                  </template>
                </i18n>
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>

    <TeamSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const track = (name: string) => {
      trackEvent(name);
    };

    return { track };
  },
  head: {
    title: "About Us",
    meta: [
      {
        hid: "about",
        name: "about",
        content: "Built by engineers knowing database development flow",
      },
    ],
  },
});
</script>
