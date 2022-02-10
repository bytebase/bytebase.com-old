<template>
  <div class="relative bg-white px-4 sm:px-6 lg:px-8 py-8">
    <div class="relative max-w-2xl mx-auto px-4 py-8 text-left sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">Refund policy</h1>
      <p class="text-2xl pt-5 leading-relaxed">
        Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with our products* for any reason, just contact our 
        <a
          href="mailto:support@bytebase.com"
          target="__blank"
          class="text-2xl underline text-gray-600 hover:text-gray-900"
        >support team</a> and we’ll take care of you.
      </p>

      <div v-for="(section, i) of sections" :key="i">
        <h2 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl pt-16">{{ section.title }}</h2>
        <div v-for="(content, j) of section.content" :key="`${i}`-`${j}`">
          <ul v-if="content.type === 'list'" class="text-2xl pt-5 list-disc">
            <li v-for="text of content.paragraphs" :key="text" class="leading-relaxed">{{ text }}</li>
          </ul>
          <div v-else>
            <p class="text-2xl pt-5 leading-relaxed" v-for="text of content.paragraphs" :key="text">
              {{ text }}
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl pt-16">Get in touch</h2>
      <p class="text-2xl pt-5 leading-relaxed">
        At the end of the day, nearly everything on the edges comes down to a case-by-case basis. 
        <a
          href="mailto:support@bytebase.com"
          target="__blank"
          class="text-2xl underline text-gray-600 hover:text-gray-900"
        >Contact us</a>, tell us what’s up, and we’ll work with you to make sure you’re happy.
      </p>
      <p class="text-2xl pt-5 leading-relaxed">
        *This policy applies to any product created and owned by Byetbase.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface Section {
  title: string
  content: {
    type: string
    paragraphs: string[]
  }[]
}

const sections: Section[] = [
  {
    title: "Examples of full refunds we’d grant.",
    content: [
      {
        type: "list",
        paragraphs: [
          "If you were just charged for your next year of service but you meant to cancel, we’re happy to refund that extra charge.",
          "If you forgot to cancel your account a couple years ago and you haven’t used it since then, we’ll give you a full refund for a few back years. No problem.",
          "If you tried one of our products for a couple years and you just weren’t happy with it, you can have your money back.",
        ]
      }
    ]
  },
  {
    title: "Examples of partial refunds or credits we’d grant.",
    content: [
      {
        type: "list",
        paragraphs: [
          "If you forgot to cancel your account a year ago, and there’s been activity on your account since then, we’ll review your account usage and figure out a partial refund based on how many months you used it.",
          "If you upgraded your account a few years ago to a higher plan and kept using it in general but you didn’t end up using the extra features, projects, or storage space, we’d consider applying a prorated credit towards future months.",
          "If we had extended downtime (multiple hours in a day, or multiple days in a month) or you emailed customer service and it took multiple days to get back to you, we’d issue a partial credit to your account."
        ]
      }
    ]
  }
]

export default defineComponent({
  setup() {
    return {
      sections
    }
  },
})
</script>
