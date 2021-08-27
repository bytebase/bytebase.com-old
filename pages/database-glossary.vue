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
                    Category
                  </div>
                </legend>
                <div class="pt-4 pb-2 px-4" id="filter-section-0">
                  <div class="space-y-6">
                    <div
                      v-for="(filter, index) in state.filterList"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        type="checkbox"
                        :value="filter.value"
                        :checked="filter.checked"
                        @input="
                          () => {
                            filter.checked = !filter.checked;
                          }
                        "
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label class="ml-3 text-sm text-gray-600">
                        {{ filter.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="border-t border-gray-200 pt-4 space-y-4">
              <fieldset
                v-for="(alphaItem, index) in filteredAlphaList"
                :key="index"
              >
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    {{ alphaItem.letter }}
                  </div>
                </legend>
                <div
                  v-for="(glossary, glossaryIndex) in alphaItem.list"
                  :key="glossaryIndex"
                  class="pt-2 px-4"
                >
                  <a
                    :href="`#${glossaryAnchor(glossary.name)}`"
                    class="text-sm text-gray-600 hover:underline"
                  >
                    {{ glossary.name }}
                  </a>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>

      <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pb-4">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            📕 Database Glossary
          </h1>
          <h2 class="mt-4 text-base text-gray-500">
            A handy database reference on the internet. We cover general
            database, MySQL, PostgreSQL as well as Bytebase specific topics.
          </h2>
          <div class="text-right">
            <a
              href="https://github.com/bytebase/bytebase.com/edit/main/pages/database-glossary.vue"
              target="__blank"
              class="text-sm text-blue-600 hover:underline"
              >Suggest changes on GitHub</a
            >
          </div>
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
                      Category
                    </legend>
                    <div class="pt-6 space-y-3">
                      <div
                        v-for="(filter, index) in state.filterList"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          type="checkbox"
                          :value="filter.value"
                          :checked="filter.checked"
                          @input="
                            () => {
                              filter.checked = !filter.checked;
                            }
                          "
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label class="ml-3 items-center text-sm text-gray-600">
                          {{ filter.name }}
                          <span
                            class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                          >
                            {{ tagItemCount(filter.value) }}
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="pt-10 space-y-6">
                  <fieldset
                    v-for="(alphaItem, index) in filteredAlphaList"
                    :key="index"
                  >
                    <a
                      :href="`#${alphaItem.letter}`"
                      class="block text-sm font-medium text-gray-900 hover:underline"
                    >
                      {{ alphaItem.letter }}
                    </a>
                    <div
                      v-for="(glossary, glossaryIndex) in alphaItem.list"
                      :key="glossaryIndex"
                      class="pt-2"
                    >
                      <a
                        :href="`#${glossaryAnchor(glossary.name)}`"
                        class="flex items-center text-sm text-gray-600 hover:underline"
                      >
                        {{ glossary.name }}
                      </a>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Glossary grid -->
          <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div class="relative bg-white overflow-hidden space-y-6">
              <div v-for="(alphaItem, index) in filteredAlphaList" :key="index">
                <a
                  :href="`#${alphaItem.letter}`"
                  :id="alphaItem.letter"
                  class="block text-2xl text-left text-indigo-600 font-semibold tracking-wide uppercase hover:underline"
                >
                  {{ alphaItem.letter }}
                </a>

                <div
                  v-for="(glossary, glossaryIndex) in alphaItem.list"
                  :key="glossaryIndex"
                  class="mt-6"
                >
                  <div class="flex items-center space-x-4">
                    <a
                      :href="`#${glossaryAnchor(glossary.name)}`"
                      :id="glossaryAnchor(glossary.name)"
                      class="text-xl text-gray-800 font-semibold hover:underline"
                      >{{ glossary.name }}</a
                    >
                    <div
                      v-for="(tag, tagIndex) in glossary.tagList"
                      :key="tagIndex"
                    >
                      <span
                        v-if="tag == 'General'"
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                      >
                        {{ tag }}
                      </span>
                      <span
                        v-if="tag == 'Bytebase'"
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {{ tag }}
                      </span>
                      <span
                        v-if="tag == 'MySQL'"
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {{ tag }}
                      </span>
                      <span
                        v-if="tag == 'PostgreSQL'"
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  <p class="mt-4 text-gray-600">
                    {{ glossary.description }}
                  </p>
                  <div v-if="glossary.reference" class="flex justify-end mt-2">
                    <a
                      :href="glossary.reference"
                      target="__blank"
                      class="flex items-center text-blue-600 hover:underline"
                      >Reference
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path></svg
                    ></a>
                  </div>
                </div>
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

type Tag = "All" | "General" | "Bytebase" | "MySQL" | "PostgreSQL";

type FilterItem = {
  value: Tag;
  name: string;
  checked: boolean;
};

const FILTER_LIST: FilterItem[] = [
  {
    value: "General",
    name: "General",
    checked: false,
  },
  {
    value: "Bytebase",
    name: "Bytebase",
    checked: false,
  },
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
];

type Glosssary = {
  name: string;
  description: string;
  reference: string;
  tagList: Tag[];
};

type AlphaItem = {
  letter: string;
  list: Glosssary[];
};

const ALPHA_LIST: AlphaItem[] = [
  {
    letter: "A",
    list: [
      {
        name: "ACID",
        description:
          "ACID stands for Atomicity, Consistency, Isolation, Durability. These are the key properties of a database transaction to guarantee correctness even (unexpected) failure occurs.",
        reference: "https://en.wikipedia.org/wiki/ACID",
        tagList: ["General"],
      },
      {
        name: "Atomicity",
        description:
          "A in ACID, the property to guarantee all state mutation in a transaction either all happen or none happen (all or nothing).",
        reference: "https://en.wikipedia.org/wiki/Atomicity_(database_systems)",
        tagList: ["General"],
      },
      {
        name: "Audit log / Audit trail",
        description: `A set of chronological records providing documentary evidence of a series of database activities.
          User activities such as login attempt, DDL operations are often captured. For DML operations, due to its large volume and
          impact on performance, is normally not captured.`,
        reference: "https://en.wikipedia.org/wiki/Atomicity_(database_systems)",
        tagList: ["General"],
      },
      {
        name: "Autonomous database",
        description:
          "A shinny concept declaring the database can operate without DBA involvement, which sounds a bit optimistic like the self-driving technology in auto industry.",
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "B",
    list: [
      {
        name: "B+ tree",
        description: `The fundamental data structure used in all major database systems storing the data.
        B+ tree is a variation of B tree, both have a very large fanout to store links to the data page, which
        greatly reduces the number of I/O operations to find the desired data. Unlike B tree which stores data
        on the non-leaf node. B+ tree only stores data on the leaf node, which gives it a even large fanout to store links.`,
        reference: "https://en.wikipedia.org/wiki/B%2B_tree",
        tagList: ["General"],
      },
      {
        name: "Backup",
        description: `A copy of data taken and may be used to restore after a data loss event. Bytebase supports both the manual (on-demand)
        and the automatic per-database backup.`,
        reference:
          "https://docs.bytebase.com/use-bytebase/backup-restore-database",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Bloom filter",
        description: `A space-efficient probabilistic data structure commonly used by the query engine to greatly reduce
        I/O operations or remote data fetch in the case of distributed environment.`,
        reference: "https://en.wikipedia.org/wiki/Bloom_filter",
        tagList: ["General"],
      },
      {
        name: "Buffer pool / Buffer cache",
        description: `A consecutive memory area to cache table and index data in memory to avoid I/O operations.
        The buffer pool consists of many pages of same size (normal values are 4K, 8K, 16K bytes), and a variation of
        LRU (Least Recently Used) strategy is often used to swap buffer pages.`,
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "C",
    list: [
      {
        name: "Catalog (Database Catalog)",
        description: `Records the metadata of the database, which are stored in the so-called System Table. The metadata
        includes the database name, table name, database users and their permissions, etc.`,
        reference: "https://en.wikipedia.org/wiki/Database_catalog",
        tagList: ["General"],
      },
      {
        name: "Change data capture (CDC)",
        description: `A process to record the data changes. It's often used to copy the data to a different system such as
        warehouse or a different database system in the process of migration.`,
        reference: "https://en.wikipedia.org/wiki/Change_data_capture",
        tagList: ["General"],
      },
      {
        name: "Checkpoint",
        description: `The original idea comes from the ARIES paper (see reference). For performance reason, database
        does not persist modified data to disk after every committed change, instead, it periodically issues checkpoint which persists
        the changes in batch. It's called checkpoint because when database crahes and then starts again for crash recovery, the
        recovery process only needs to recover the committed changes after the latest checkpoint because the checkpoint
        guarantees any commits before that checkpoint have been persisted already. Checkpoint is still a heavy operation and
        may impact database performance.
        `,
        reference: "https://people.eecs.berkeley.edu/~brewer/cs262/Aries.pdf",
        tagList: ["General"],
      },
      {
        name: "Column",
        description: `A set of data values of a particular type, one value for each row of the database. Column can also have constraints such
        as non-emptiness, having a certain prefix and etc.`,
        reference: "https://en.wikipedia.org/wiki/Column_(database)",
        tagList: ["General"],
      },
      {
        name: "Commit",
        description: `Commit marks the end of a transaction, persisting all mutations from that transaction. For performance reason, database
        does not perist the change to data file directly upon commit, rather, it persists the change to a commit log also called write-ahead log.
        Later on, database will do a checkpoint to persist those changes from write-ahead log to the data file in batch.`,
        reference: "https://en.wikipedia.org/wiki/Commit_(data_management)",
        tagList: ["General"],
      },
      {
        name: "Consistency",
        description: ` "C in ACID, database defines a set of constraints, the consistency property guarantees the same invariants before and after the transaction.`,
        reference:
          "https://en.wikipedia.org/wiki/Consistency_(database_systems)",
        tagList: ["General"],
      },
      {
        name: "Constraint",
        description: `Specific requriement that must be met by the value stored in the database. Typical constraints are NOT NULL constraint, UNIQUE constraint and etc.`,
        reference: "https://en.wikipedia.org/wiki/Check_constraint",
        tagList: ["General"],
      },
      {
        name: "Cost-based optimization (CBO)",
        description: `A optimization strategy used by the query enigne to pick a query plan to execute the SQL statment based on the
        cost estimate. It's  the strategy used by all mainstream databases. It's predecessor is Rule-based optimization (RBO). The
        advantage of CBO is it's more adaptive than the hard-coded RBO since it's based on the actual context, the number of estimated
        rows to be fetched, the cost  of each fetch, the index to be used and etc. Because there are quite a few factors to consider,
        and it's prohibitive expensive to explore all permutations, thus the database often finds the best plan among a subset of
        all possible plans.`,
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Crash recovery",
        description: `A process running upon database startup if the database is not shutdown properly (crash, power failure).
        The process restores the database to the consistent state by rolling back incomplete transactions and completing committed
        transactions. All mainstream database use the same crash recovery mechanism described in the ARIES paper (see reference).`,
        reference: "https://people.eecs.berkeley.edu/~brewer/cs262/Aries.pdf",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "D",
    list: [
      {
        name: "Data source",
        description: `A connection set up to a database from a database instance. There could be multiple data sources for the same
        database. e.g. one for read-only connection, and one for read-write connection.`,
        reference: "https://en.wikipedia.org/wiki/Datasource",
        tagList: ["General"],
      },
      {
        name: "Data source name (DSN)",
        description: `A string describing the data source. This is the one used by the database driver code to establish the connection
        to the database. The format is a variation of <driver>://<username>:<password>@<host>:<port>/<database> depending on the specific
        driver implementation.`,
        reference: "https://en.wikipedia.org/wiki/Data_source_name",
        tagList: ["General"],
      },
      {
        name: "Data definition language (DDL)",
        description: `The statement to change the structure (schema) of the database such as CREATE, ALTER, DROP statements.`,
        reference: "https://en.wikipedia.org/wiki/Data_definition_language",
        tagList: ["General"],
      },
      {
        name: "Data manipulation language (DML)",
        description: `The statement to query or change the data of the database such as SELECT, INSERT, UPDATE, DELETE statements.`,
        reference: "https://en.wikipedia.org/wiki/Data_manipulation_language",
        tagList: ["General"],
      },
      {
        name: "Database",
        description: `A logic collection of schema objects like tables, stored procedures, triggers, users. A database is the one created
        by 'CREATE DATABASE'. Bytebase also has a database concept which is a 1:1 mapping to this database definition. Database in
        Bytebase always belongs to a single project.`,
        reference: "https://docs.bytebase.com/concepts/data-model#database",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Database instance",
        description: `The complete running environment providing the database service. This is usually denoted by a host:port pointing
        to the running instance. When people talk about MySQL/PostgreSQL instance, they usually refer to the database instance. A single
        database instance can host many databases. Bytebase has an instance concept which is a 1:1 mapping to this instance definition.
        Instance in Bytebase always belongs to a particular environment. Bytebase also stores the database schema migration history on
        the instance itself.`,
        reference:
          "https://docs.bytebase.com/concepts/data-model#database-instance",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Database-as-code",
        description: `A workflow to store database schema changes as a series of schema migration scripts in the version control system (VCS).
        Whenever new script committed to the VCS, a process will kickoff automatically to start the process of applying the script to the database.
        Thus the database schema change is managed in a very similar fashion as code. This workflow is considerred superior than the classic
        UI based SQL review workflow. However, it requires a bit more setup and engineering discipline. Bytebase supports this workflow and helps
        ease the onboarding and ongoing management of using this workflow.`,
        reference: "https://docs.bytebase.com/features/version-control",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Deadlock",
        description: `A situation in which multiple transactions are waiting for one another to give up locks. Transaction may acquire locks when
        it's accessing a resource, if one transaction accesses resource A and then B, another transaction accesses resource B and then A, they may
        hold lock on A and B respectively while waiting for each other to release another lock, thus a deadlock occurs. Database has a deadlock
        detection algorithm to find such situation and would abort one of the transactions to resolve the deadlock.`,
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Durability",
        description: `D in ACID, the property to guarantee the changes after the successful transaction commit will survive permanently.`,
        reference:
          "https://en.wikipedia.org/wiki/Durability_(database_systems)",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "E",
    list: [
      {
        name: "Encryption at rest (EAR)",
        description: `Database stores data in its own format on the disk. While the data looks obscure to the humans, it can be de-obfuscated
        and altered with some effort. This poses a risk if malicious user has direct access to the disk, which can bypass the database
        ACL system to access and alter the data. EAR is the method to encrypt the data on disk (at rest) using an encryption key, which makes
        this attack impossible. Data is encrypted right before writing to the disk and decrypted right after reading from the disk.
        `,
        reference: "https://en.wikipedia.org/wiki/Data_at_rest",
        tagList: ["General"],
      },
      {
        name: "Encryption in transit",
        description: `Client normally accesss database server over a public or untrusted network, to prevents eavesdropping and man-in-the-middle
        attack, database client and server would first establish a secure connection by agreeing on the encrytion algorithm and ephemeral encryption
        key to use, then client and server can securely exchange the messages with each other.`,
        reference: "https://en.wikipedia.org/wiki/Data_in_transit",
        tagList: ["General"],
      },
      {
        name: "Engine / Database engine",
        description: `Sometimes, this refers to the database type like MySQL, PostgreSQL. Sometimes, especially when we are talking
        about a specific database, this refers to the underlying storage engine which manages the transaction and data storage layer
        (e.g. Both InnoDB and MyISAM are a database engine of MySQL). The storage engine is one of the 3 core subsystems in a tranditional
        database management system. The other 2 are the query engine and the server layer (managing ACL, client connections/sessions).
        The storage engine would expose an API for other subsystems (mainly the query engine) to interact with it. Storage engine can operate
        can also be a standlone component, in which case, it's used as a library (e.g. Berkeley DB).`,
        reference: "https://en.wikipedia.org/wiki/Database_engine",
        tagList: ["General"],
      },
      {
        name: "Environment",
        description: `A top level model in Bytebase to model after various environments in the development pipeline such as test, staging, prod.
        A bytebase database instance always belong to a single environment. Bytebase owner and DBA can also configure approval policies on the environment.`,
        reference: "https://docs.bytebase.com/concepts/data-model#environment",
        tagList: ["Bytebase"],
      },
    ],
  },
  {
    letter: "F",
    list: [
      {
        name: "Failover",
        description: `An operation to switch to a secondary database instance when the primary database instance fails. That secondary instance
        is commonly known as standby, failover replica. The key metrics to evaluate the failover are RPO (Recovery Point Objective) and
        RTO (Recovery Time Objective).`,
        reference: "https://en.wikipedia.org/wiki/Failover",
        tagList: ["General"],
      },
      {
        name: "Filesort / External merge sort",
        description: `When performing sorting operations for ORDER BY, GROUP BY and there is no sufficient memory to sort all data at once,
        database will partition the data, sort them batch by batch and write the intermediate sorting results to disk. Since it involves
        heavy I/O operations, it will drastically impact query performance.`,
        reference: "https://dev.mysql.com/doc/internals/en/filesort.html",
        tagList: ["General", "MySQL"],
      },
      {
        name: "Foreign data wrapper",
        description: `A PostgreSQL specific feature to allow it access external data sources such as CSV file, MySQL database and etc.
        Besides, unlike MySQL, PostgreSQL does not natively support accessing different databases in a single statement, to achieve the
        similar result, user can also setup a PostgreSQL database as a foreign data source.`,
        reference:
          "https://www.postgresql.org/docs/current/ddl-foreign-data.html",
        tagList: ["PostgreSQL"],
      },
      {
        name: "Foreign key",
        description: `A set of attributes in a table that refers to the primary key of another table. The foreign key links 2 tables and
        often establishes the referential integrity rules between 2 tables. (e.g a typical referential rule is a particular row can't be
        removed if the row id is referenced in any foreign tables.).`,
        reference: "https://en.wikipedia.org/wiki/Foreign_key",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "H",
    list: [
      {
        name: "Hierarchical model",
        description: `A data model in which the data are organized into a tree-like structure.
        This is the first model used in database system from IBM. But it lost popularity to the relational model.
        `,
        reference: "https://en.wikipedia.org/wiki/Hierarchical_database_model",
        tagList: ["General"],
      },
      {
        name: "Hint",
        description: `A hint to advice the query optimizer to use a particular optimization strategy which would be
        otherwise ignored. Query optimizer usually follows the hint if specified.`,
        reference: "https://en.wikipedia.org/wiki/Hint_(SQL)",
        tagList: ["General"],
      },
      {
        name: "HTAP (Hybrid transactional/analytical processing)",
        description: `A new term coined recently to combine the transactional and analytical power into a single system.
        Trandtionally, transactional and analytical processing are handled by different systems, which causes the headache
        of maintanining 2 separate systems as well as duplicating the data and managing the pipeline to copy the data
        from the online transactional system to the analytical system. HTAP gains popularity because it eliminates the
        duplicate system and data, making near real-time analytic possible. On the other hand, the challenge still remains
        as how to efficiently handle both transactional and analytical workload in the same system, and how to prevent analytical
        workload interfering with online transactional processing.`,
        reference:
          "https://en.wikipedia.org/wiki/Hybrid_transactional/analytical_processing",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "I",
    list: [
      {
        name: "Index",
        description: `A data structure greatly improves the speed of data retrieval. Like the physical book index, the index
        helps quickly locate a particular value or a range of values (finding a needle in a haystack). While good for boosting
        query performance, index brings the overhead of updating the index entry whenever underlying data changes. Thus adding
        /removing index is a balanced art and should be evaluated carefully.
        maintaining index `,
        reference: "https://en.wikipedia.org/wiki/Database_index",
        tagList: ["General"],
      },
      {
        name: "InnoDB",
        description: `A well-engineered storage engine which is now the default storage engined used by MySQL. It's a performant
        storage engine providing the standard ACID-compliant transaction features. Inno stands for "Innovation", InnoDB is the
        lesser hero underpinning the many web services and saving huge amount of DBA headaches.
        `,
        reference: "https://en.wikipedia.org/wiki/InnoDB",
        tagList: ["MySQL"],
      },
      {
        name: "Isolation",
        description: `I in ACID, the property defines the behavior of how concurent transactions sees changes from each other.
        ANSI/ISO SQL defines 4 isolation levels in the order of ascending strictness: Read uncommitted, Read committed, Repeatable reads, Serializable.`,
        reference: "https://en.wikipedia.org/wiki/Isolation_(database_systems)",
        tagList: ["General"],
      },
      {
        name: "Issue",
        description: `Issue is a Bytebase concept, each issue represents a specific collaboration activity between Developer and
        DBA such as creating a database, altering a schema. It's similar to the issue concept in other issue management tools.
        An issue always belong to a Bytebase Project.`,
        reference: "https://docs.bytebase.com/concepts/data-model#issue",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "J",
    list: [
      {
        name: "JDBC",
        description: `Java Database Connectivity (JDBC) defines a standard API for Java to access database. Different database venders
        implements the JDBC API so that Java programs can call the same standard API to access different databases.`,
        reference: "https://en.wikipedia.org/wiki/Java_Database_Connectivity",
        tagList: ["General"],
      },
      {
        name: "Join",
        description: `An opereator in relational algebra to combine columns from multiple tables into a single table. Query
        engines usually fulfills the join request using one of the Nested-loop join, Merge join, Hash join methods.
        `,
        reference: "https://en.wikipedia.org/wiki/Join_(SQL)",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "L",
    list: [
      {
        name: "Lock",
        description: `A technique to prevent simultaneous access to data in a database to prevent inconsisten results. Modern
        databases all implement the granular row-level locking for performance reason. But some operations like altering the 
        schema would still require table-level locking, which would block the normal online processing. That's the reason such
        operations are performed during non-business hours to reduce impact.`,
        reference: "https://en.wikipedia.org/wiki/Record_locking",
        tagList: ["General"],
      },
      {
        name: "LRU (Least Recently Used)",
        description: `The algorithm used by database engines to swap the buffer pool pages. Different database engines use
        a different variation of LRU algorithms.`,
        reference:
          "https://en.wikipedia.org/wiki/Page_replacement_algorithm#Least_recently_used",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "M",
    list: [
      {
        name: "Migration (database system)",
        description: `The process of migrating the entire database from one system to another (e.g. From MySQL to PostgreSQL or vice versa).
        The process usually consists of 3 phase, 1) baseline phase 2) catchup phase 3) switchover phase. In the baseline phase, team creates
        a data dump from the source database system and loads it into the target database system. 2) In the catchup phase, team configures a
        change-data-capture (CDC) pipeline to stream the ongoing changes to the target database. 3) In the switchover phase, team cuts off
        the traffic to the original database, wait for target database to catch up all new changes from the source database, and then redirect
        the traffic to the target database. If executely carefully, the downtime would be limited to the blackout period in the switchover phase.
        `,
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Migration (schema change)",
        description: `The process of making changes to the database schema. The process is both dangerous and hard to fix. Performing a
        successful schema migration requires coordination between developers, DBAs and the operating environment. Bytebase is a product
        built specifically for addressing the challenges involved in this database schema change process. It supports the 2 most common
        change workflows, 1) Classic UI-based SQL review workflow and 2) Version control based workflow (database-as-code).`,
        reference: "https://docs.bytebase.com/concepts/schema-change-workflow",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "MVCC (Multi-version concurrency control)",
        description: `A method used to achieve both performant concurrent access and strict isolation level. The idea is to
        give each transaction a unique versioned view of the data, thus each transaction can operate on their own. Only at
        the commit phase, the database system will perform the resolution, the conflict might arise at this point and may
        cause the transaction to abort. However, the assumption is such scenario is less likely to happen and that's why
        MVCC is referred as optimistic concurrency control. A classic saying for MVCC, "Reads do not block Writes, writes
        do not block Reads".`,
        reference:
          "https://en.wikipedia.org/wiki/Multiversion_concurrency_control",
        tagList: ["General"],
      },
      {
        name: "MySQL",
        description:
          "A pragmatic, performant database secretly supporting a majority of internet services.",
        reference: "https://www.mysql.com/",
        tagList: ["MySQL"],
      },
    ],
  },
  {
    letter: "N",
    list: [
      {
        name: "Normalization",
        description: `A process of designing a database schema in accordance with a series of so-called normal forms. The design
          requires skillful balance among data redudancy, data integrity, performance and etc.`,
        reference: "https://en.wikipedia.org/wiki/Database_normalization",
        tagList: ["General"],
      },
      {
        name: "NewSQL",
        description: `A class of relational database management systems that seek to provide the scalability of NoSQL systems for 
          online transaction processing (OLTP) workloads while maintaining the ACID guarantees of a traditional database system. This
          emerges from the NoSQL movement which advocates scalability over classic ACID guarantees. And only after hard learned lessons,
          people realize the merits of the old wisdom and add ACID to the NoSQL, thus resulting in NewSQL.
          `,
        reference: "https://en.wikipedia.org/wiki/NewSQL",
        tagList: ["General"],
      },
      {
        name: "NoSQL",
        description: `A class of database management systems does not provide SQL like interface or does not employ relational
        model. A key difference from the relational database group is NoSQL does not enforce schema (schemaless). Notable 
        NoSQL are Redis, MongoDB, AWS DynamoDB`,
        reference: "https://en.wikipedia.org/wiki/NoSQL",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "O",
    list: [
      {
        name: "Optimizer / Query optimizer",
        description: `A key subsytem in relational database to determine the efficient way to execute a given query in a timely fashion.
          It tranforms an input SQL query into an executable query plan. Most mainstream databases use the cost-based optimizer (CBO) which
          determines the best query by calculating the cost of many factors such I/O speed, number of rows to be accessed etc. Because
          the cost is an estimate, and also the plan needs to be generated in a timely fashion, thus the optimizer can not permutate all
          possible plans and pick the optimal plan.`,
        reference: "https://en.wikipedia.org/wiki/Query_optimization",
        tagList: ["General"],
      },
      {
        name: "ODBC (Open Database Connectivity)",
        description: `A standard API for accessing database management systems. Its current usage is more limited to Microsoft ecosystems
        beause other programming environments employ different but similar standard API (like JDBC for Java, database/sql for Golang).
        `,
        reference: "https://en.wikipedia.org/wiki/Open_Database_Connectivity",
        tagList: ["General"],
      },
      {
        name: "OLAP (Online analytical processing)",
        description: `A process specializing in handling multi-dimensional analytical queries efficiently. This is often used
        in database warehouse, business intelligence. Traditionally, a specialized system is built for this type of processing. But
        nowadays, many systems try to combine the OLAP and OLTP power into a single system known as HTAP (Hybrid transactional/analytical processing).`,
        reference: "",
        tagList: ["General"],
      },
      {
        name: "OLTP (Online transaction processing)",
        description: `A process specializing in online transaction processing. It's optimized for serving requests in milliseconds
        for hundreds of thousands customers concurrently, while conforming ACID transaction properties. Nowadays, more OLTP system evolves to
        handle OLAP, which becomes a HTAP system.`,
        reference:
          "https://en.wikipedia.org/wiki/Online_transaction_processing",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "P",
    list: [
      {
        name: "Page",
        description: `Both on disk and in memory, database data is stored as a consecutive byte blocks with same size. Each block is
        called a page. Normal page size are 4KB, 8KB, 16KB bytes. Data I/O operation is performed on the unit of pages. Most of the time,
        database can't hold all data in the memory, thus it employs a buffer pool to maintain a list of active pages based on LRU. The
        buffer pool swaps the pages continously based on the access pattern, a process known as page-in, page-out.`,
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Point-in-time-recovery (PITR)",
        description: `A process to restore the database state to a particular point in time. This is often achieved by first restoring 
        the database using a base backup (baselining) and then replaying the change-data-capature (CDC) logs up to the desired point in
        time.`,
        reference: "https://en.wikipedia.org/wiki/Point-in-time_recovery",
        tagList: ["General"],
      },
      {
        name: "PostGIS",
        description: `An open source PostgreSQL plugin providing sophisticated geo-spatial operations. It leverages the PostgreSQL
        extensibilities to offer a native geo-spatial processing experience. It's one of the features setting PostgreSQL apart from
        other database systems.`,
        reference: "https://postgis.net/",
        tagList: ["PostgreSQL"],
      },
      {
        name: "PostgreSQL",
        description:
          "A battle tested, well-engineered, multi-model, open source relational database. The only regret is its naming story.",
        reference: "https://www.postgresql.org/",
        tagList: ["PostgreSQL"],
      },
      {
        name: "Primary key",
        description: `A set of columns that uniquely identifies a row in a table. It could be a single column such as UUID or a set
        of columns. Many database systems requires user to specify the primary key in the table schema, for those not specified, an
        internal primary key is always created since the primary key is required to identify and address a particular row.`,
        reference: "https://en.wikipedia.org/wiki/Primary_key",
        tagList: ["General"],
      },
      {
        name: "Project",
        description: `Project is a Bytebase top-level model and is a logic unit to model a team effort. It's similar to the project
        concept in other dev tools such as Jira, GitLab. Project is the container to group logically related Databases,  Issues and Users together.`,
        reference: "https://docs.bytebase.com/concepts/data-model#project",
        tagList: ["Bytebase"],
      },
    ],
  },
  {
    letter: "Q",
    list: [
      {
        name: "Query",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Query Plan",
        description: "",
        reference: "https://en.wikipedia.org/wiki/Query_plan",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "R",
    list: [
      {
        name: "Redo log",
        description: "See Write-ahead log",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Referential integrity",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Relational model",
        description: "See Write-ahead log",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Replication",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Restore",
        description: ``,
        reference: "",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Result set",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Rollback",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "RPO (Recovery Point Objective)",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "RTO (Recovery Time Objective)",
        description: "",
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "S",
    list: [
      {
        name: "Schema",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Server / Database server",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Sharding",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "SQL",
        description: "A better language than PHP.",
        reference: "https://en.wikipedia.org/wiki/SQL",
        tagList: ["General"],
      },
      {
        name: "SQL review",
        description: "",
        reference: "",
        tagList: ["General", "Bytebase"],
      },
      {
        name: "Storage engine",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Stored procedure",
        description:
          "A subroutine coded and executed on the database directly. Looks handy, but always turns out to be a headache.",
        reference: "https://en.wikipedia.org/wiki/Stored_procedure",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "T",
    list: [
      {
        name: "Table",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Transaction",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Trigger",
        description: "",
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "U",
    list: [
      {
        name: "User-defined function (UDF)",
        description: "",
        reference: "",
        tagList: ["General"],
      },
      {
        name: "Undo log",
        description: "",
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "V",
    list: [
      {
        name: "Vacuum",
        description: "",
        reference: "",
        tagList: ["PostgreSQL"],
      },
      {
        name: "View",
        description: "",
        reference: "",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "W",
    list: [
      {
        name: "Write-ahead log (WAL)",
        description: "",
        reference: "https://en.wikipedia.org/wiki/Write-ahead_logging",
        tagList: ["General"],
      },
    ],
  },
  {
    letter: "X",
    list: [
      {
        name: "XID",
        description:
          "The transaction ID and can cause database outage if not monitoring its wraparound status carefully.",
        reference:
          "https://www.2ndquadrant.com/en/blog/around-world-two-billion-transactions/",
        tagList: ["PostgreSQL"],
      },
    ],
  },
];

interface LocalState {
  filterList: FilterItem[];
  showSidebar: false;
}

export default defineComponent({
  head: {
    title: "Database Glossary",
    meta: [
      {
        hid: "Database Glossary",
        name: "Database Glossary",
        content: "",
      },
    ],
  },
  setup() {
    const state = reactive<LocalState>({
      filterList: FILTER_LIST,
      showSidebar: false,
    });

    const glossaryAnchor = (name: string): string => {
      return name.toLowerCase().replaceAll(" ", "-");
    };

    const tagItemCount = (tag: Tag): number => {
      let count = 0;
      for (const alpha of ALPHA_LIST) {
        for (const glossary of alpha.list) {
          if (tag == "All" || glossary.tagList.includes(tag)) {
            count++;
          }
        }
      }
      return count;
    };

    const filteredAlphaList = computed(() => {
      const filterTagList: Tag[] = [];
      for (const filter of state.filterList) {
        if (filter.checked) {
          filterTagList.push(filter.value);
        }
      }

      if (filterTagList.length > 0) {
        const list: AlphaItem[] = [];
        for (const alpha of ALPHA_LIST) {
          const glossaryList: Glosssary[] = [];
          for (const glossary of alpha.list) {
            for (const tag of glossary.tagList) {
              if (filterTagList.includes(tag)) {
                glossaryList.push(glossary);
                break;
              }
            }
          }

          if (glossaryList.length > 0) {
            list.push({
              letter: alpha.letter,
              list: glossaryList,
            });
          }
        }
        return list;
      }
      return ALPHA_LIST;
    });

    return {
      state,
      tagItemCount,
      glossaryAnchor,
      filteredAlphaList,
    };
  },
});
</script>
