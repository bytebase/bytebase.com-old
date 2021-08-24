<template>
  <div class="py-16 overflow-hidden">
    <div class="prose prose-xl mx-auto">
      <span
        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
      >
        Database Schema Design
      </span>
      <h1>
        Primary Key - UUID or Auto Increment Integer/Sequence?
      </h1>
    </div>
    <span
      class="mt-6 flex flex-row items-center block text-base justify-center text-gray-900 font-semibold tracking-wide uppercase"
    >
      <img
        class="h-10 w-10 rounded-full mr-2"
        src="~/assets/avatar/tianzhou.webp"
        alt=""
      />Tianzhou Chen
      <time class="ml-1 text-gray-500" datetime="2021-08-24">
        Aug 24, 2021
      </time></span
    >
    <div class="mt-6 prose prose-indigo prose-xl mx-auto">
      <p>
        One of the first things when designing a new database schema is to
        decide which type of <strong>primary key</strong> to use. And 99% of the
        time, developers need to choose between either UUID or Auto Increment
        Integer/Sequence.
      </p>
      <p>
        Developers may not realize initially, but choosing the primary key type
        can have consequential impact down the road and it's almost impossible
        to switch afterwards.
      </p>

      <blockquote>
        Choosing a proper primary key format requires a good understanding of
        both the business requirements as well as the underlying database
        system, so that the schema designer can make the educated tradeoff.
      </blockquote>

      <h2>
        UUID
      </h2>
      <p>
        There are 5 standard UUID formats nowadays. Most of the time, people
        either choose v4 (random UUID) or v1 (timestamp UUID)
      </p>
      <ul role="list">
        Pros
        <li>
          Globally unique. e.g. No false positive for finding items using log.
          Easy for migrating data between systems since collision is only
          theoratically possible.
        </li>
        <li>
          Stateless, it can be generated on the fly.
        </li>
        <li>
          A sense of secure since malicious user can't guess the ID. However,
          your security team would always insist that a public accessible UUID
          path does not meet the security standard.
        </li>
        <li>
          Version 1 UUID stores timestamp info, could be useful sometimes.
        </li>
      </ul>

      <ul role="list">
        Cons
        <li>
          Not readable.
        </li>
        <li>
          Not naturally sortable according to creation time. Though v1 UUID
          format contains timestamp, it encodes the timestamp using
          little-endian in that the least significant time appears first, which
          renders the UUID hard to sort according to creation time. People
          design their own UUID format to fix this and there is also a draft
          proposal to
          <a
            href="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format"
            target="__blank"
            >standardize</a
          >
          it.
        </li>
        <li>
          For database like MySQL, Oracle, which uses clustered primary key,
          version 4 randomly generated UUID will hurt insertion performance if
          used as the primary key. This is because it requires reordering the
          rows to place the newly inserted row at the right position inside the
          clustered index. On the other hand, PostgreSQL uses heap instead of
          clustered primary key, thus using UUID as the primary key won't impact
          PostgreSQL's insertion performance.
        </li>
      </ul>

      <h2>
        Auto Increment Integer/Sequence
      </h2>
      <p>
        Using auto increment integer/sequence as the primary key is also quite
        common and every major database engine provides the native support. e.g.
      </p>
      <ul role="list">
        <li>MySQL - <strong>AUTO_INCREMENT</strong></li>
        <li>PostgreSQL - <strong>SERIAL</strong></li>
        <li>SQLite - <strong>AUTOINCREMENT</strong></li>
      </ul>
      <ul role="list">
        Pros
        <li>
          Readable. This is especially valuable if we would expose it
          externally. Thinking of issue id, obviously, issue-123 is much more
          readable than issue-b1e92c3b-a44a-4856-9fe3-925444ac4c23.
        </li>
        <li>
          Less space. UUID always occupies 16 bytes. For Auto Increment Integer,
          when stored as Long format, it occupies 8 bytes. If the table itself
          has only a few columns, the extra primary key space overhead will
          become more significant.
        </li>
      </ul>

      <ul role="list">
        Cons
        <li>
          It can't be used in the distributed system since it's quite likely
          that different hosts could produce exactly the same number.
        </li>
        <li>
          It can't be generated on the fly. Instead, we must consult the
          database to figure out the next available primary key. In a
          distributed system, this often means to introduce a separate service
          to produce this sequential number. And that service becomes a
          single-point-of-failure (SPOF).
        </li>
        <li>
          Some business data can be exposed, since the latest ID could represent
          the total number of inventory. Attackers can also scan the integer
          range to explore leakage (though it shouldn't happen if ACL is
          implemented correctly).
        </li>
      </ul>

      <h2>
        Which one to choose?
      </h2>
      <p>
        As listed above, there are Pros and Cons between the 2 approaches. But
        based on our experience, 95% of the time, the default choice should
        always be <strong>Auto Increment Integer</strong>. Why?
      </p>
      <blockquote>
        Readability, and readability leads simplicity. Number is easy to write,
        easy to remember and easy to communicate. The primary key is not only
        used by the system, it's also exposed to the end user (e.g. order #),
        inspected by the operation engineer, customer suppport etc...
      </blockquote>

      <p>
        99.9% of the applications won't reach internet scale and they just
        consist of several models allowing CRUD operations, containing thousands
        of records. And doesn't need a distributed system.
      </p>

      <p>
        Taking the classic issue tracking/project management tool as an example.
        The tool likely will have at most 5 figure projects each containing 5
        figure issues. and issue id such as <strong>issue/123</strong> is
        definitely more readable than
        <strong>issue/b1e92c3b-a44a-4856-9fe3-925444ac4c23</strong>. In fact,
        all major issue tracking systems use integer as the issue id. Jira,
        Apple's Radar, Google's issue tracker etc... And most applications are
        less complex than those issue tracking tools.
      </p>

      <p>
        There are valid cases of choosing UUID e.g. log entry. But most of the
        time, using UUID as the primary key is a sign of pre-mature optimization
        and it's also a choice hard to revert afterwards.
      </p>

      <p>
        What do you think😊
      </p>

      <blockquote>
        BTW, if you like this article, you might also be interested in our
        product Bytebase, an open source, web-based schema change management
        tool. It will not tell you which primary key format to pick, but it will
        help you to collaborate with your Developer and DBA peers to reach a
        better consensus.
      </blockquote>

      <h2>
        References
      </h2>
      <ol role="list">
        <li>
          <a href="https://tools.ietf.org/html/rfc4122" target="__blank"
            >RFC 4122 (the original UUID RFC)</a
          >
        </li>
        <li>
          <a
            href="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format"
            target="__blank"
            >New UUID proposal including timestamp ordered and randomness
            format</a
          >
        </li>
        <li>
          <a
            href="https://segment.com/blog/a-brief-history-of-the-uuid"
            target="__blank"
            >A brief history of the UUID</a
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "blog",
  head: {
    title: "Primary Key - UUID or Auto Increment Integer",
    meta: [
      {
        hid: "Primary Key",
        name: "Primary Key - UUID or Auto Increment Integer",
        content:
          "Choosing which primary key type to use can have a cascading effect down the road. And it's always hard or totally impossible to switch later. We list Pros and Cons between these 2 most common appoaches.",
      },
    ],
  },
  setup() {},
});
</script>
