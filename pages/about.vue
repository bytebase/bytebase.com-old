<template>
  <div>
    <section class="overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <h1>
            <span
              class="block text-2xl text-center text-indigo-600 font-semibold tracking-wide uppercase"
              >Why we build</span
            >
          </h1>
          <blockquote class="mt-10">
            <div
              class="max-w-5xl mx-auto text-left text-2xl leading-9 text-gray-900"
            >
              <p class="mt-6">
                While we have a plethora of commerial and open-source database
                engines serving billions of users, our tooling around making
                <span class="underline inline font-semibold">reliable</span>,
                <span class="underline inline font-semibold">consistent</span>,
                <span class="underline inline font-semibold"></span
                ><span class="underline inline font-semibold">auditable</span>
                application database schema changes are embrassing. And today
                many teams are still connecting to the production DB and
                applying changes directly. Quick and dirty, until BOMB!
              </p>
              <p class="mt-6"></p>
              <p class="mt2">
                What's the
                <a
                  href="https://about.gitlab.com"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
                  >GitLab</a
                >
                for database instead of code?
              </p>
              <p class="mt-2">
                What's the
                <a
                  href="https://figma.com"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
                  >Figma</a
                >
                for DBAs instead of designers?
              </p>
              <p class="mt-2">
                What's the
                <a
                  href="https://terraform.io"
                  target="_blank"
                  class="text-blue-600 font-semibold"
                  style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
                  >Terraform</a
                >
                for Database-as-Code instead of Infrastructure-as-Code?
              </p>

              <p class="mt-6">There was no really good answer.</p>
              <p class="mt-6">
                It's like a Porsche with a good engine, but only paired with the
                handy wheel and brake, can it deliver the safe and pleasant
                driving experience. And that's what
                <span
                  class="text-indigo-600 font-semibold"
                  style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
                  >Bytebase</span
                >
                tries to achieve, to pair the database engine with the proper
                wheel and brake to improve the development velocity and
                experience.
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
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  head: {},
  setup() {
    const track = (name: string) => {
      trackEvent(name);
    };

    useMeta({
      title: "About Us",
      meta: [
        {
          hid: "about",
          name: "about",
          content: "Built by the engineers behind Google Cloud SQL",
        },
      ],
    });

    return { track };
  },
});
</script>
