<template>
  <div class="max-w-7xl mx-auto">
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto space-y-16">
          <div>
            <div>
              <span
                class="block text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >Aug 19, 2021</span
              >
              <h1
                href="#release-040"
                id="release-040"
                class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:underline"
              >
                Bytebase 0.4.0
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
              Update instruction
              <ul class="mt-4 text-lg space-y-2">
                <li>
                  For fresh installation, follow
                  <a
                    href="https://github.com/bytebase/bytebase#installation"
                    target="__blank"
                    >https://github.com/bytebase/bytebase#installation</a
                  >.
                </li>
                <li>
                  If you upgrade from previous veresion, then it requires manual
                  schema change, please contact
                  <a href="mailto:support@bytebase.com" target="__blank"
                    >support@bytebase.com</a
                  >
                  and we will assist you to perform the manual upgrade.
                </li>
              </ul>
              <h2>🐞 Important Bug Fixes</h2>
              <ul role="list">
                <li>
                  <strong>MySQL 5.7 compatibility</strong> - In the previous
                  version, Bytebase couldn't sync the migration history properly
                  because it used a MySQL 8.0 only feature.
                </li>
              </ul>
              <h2>🚀 New Features</h2>
              <ul role="list">
                <li>
                  <strong
                    >Backup and restore (<a
                      href="https://docs.bytebase.com/use-bytebase/backup-restore-database"
                      target="__blank"
                      >detailed guide</a
                    >)</strong
                  >
                  - User can now configure weekly automatic backup for the
                  database. Meanwhile, user can also take manual backup anytime.
                  Later on, User can restore the backup to a new database.
                </li>
                <li>
                  <strong
                    >Webhook (<a
                      href="https://docs.bytebase.com/use-bytebase/webhook-integration"
                      target="__blank"
                      >detailed guide</a
                    >)</strong
                  >
                  - User can now configure webhook to allow Bytebase to post
                  messages to the configured webhook endpoint upon varioius
                  events. Bytebase currently supports following events:
                  <ul class="mt-4 text-lg space-y-2">
                    <li>Issue creation</li>
                    <li>Issue status change</li>
                    <li>Issue task status change</li>
                    <li>
                      Issue info change such as its assignee, title, description
                    </li>
                    <li>Issue comment creation</li>
                  </ul>

                  Bytebase also supports following webhook provides:
                  <ul class="mt-4 text-lg space-y-2">
                    <li>Slack</li>
                    <li>Discord</li>
                    <li>Microsoft Teams</li>
                    <li>
                      DingTalk (钉钉)
                    </li>
                    <li>Feishu (飞书）</li>
                    <li>WeCome (企业微信）</li>
                  </ul>
                </li>
              </ul>
              <h2>🎠 Community</h2>
              <ul role="list">
                <li>
                  Thanks @zhj-hx for providing feedback and helping us
                  troubleshooting the MySQL 5.7 compatibility issue
                </li>
                <li>
                  Thanks @iczc for the PR.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span
                class="block text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >Aug 02, 2021</span
              >
              <h1
                href="#release-030"
                id="release-030"
                class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:underline"
              >
                Bytebase 0.3.0
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
              Update instruction
              <ul class="mt-4 text-lg space-y-2">
                <li>
                  For fresh installation, follow
                  <a
                    href="https://github.com/bytebase/bytebase#installation"
                    target="__blank"
                    >https://github.com/bytebase/bytebase#installation</a
                  >.
                </li>
                <li>
                  If you upgrade from previous veresion, then it requires manual
                  schema change, please contact
                  <a href="mailto:support@bytebase.com" target="__blank"
                    >support@bytebase.com</a
                  >
                  and we will assist you to perform the manual upgrade.
                </li>
              </ul>
              <h2>🚀 New Features</h2>
              <ul role="list">
                <li>
                  <strong
                    >Environment approval policy (<a
                      href="https://docs.bytebase.com/use-bytebase/approval-policy"
                      target="__blank"
                      >detailed guide</a
                    >)</strong
                  >
                  - For a particular environment, the workspace Owner or DBA can
                  configure whether the database schema change requires
                  approval.
                </li>
                <li>
                  <strong>Inbox</strong> - Added Inbox to the left sidebar.
                  Issue's status change will post to its creator, assignee and
                  subscribers inbox. If there occurs failed task, there will be
                  additional alert symbol.
                </li>
                <li>
                  <strong>Database instance user sync</strong> - Bytebase will
                  now periodically sync instance's users and their corresponding
                  grants and display those info on the instance detail page.
                  This helps Bytebase user to quickly recognize who has acccess
                  to an certain instance.
                </li>
              </ul>
              <h2>🎠 Community</h2>
              <ul role="list">
                <li>
                  We received our first customer review. Thanks @barretlee for
                  the detailed review!
                </li>
                <li>
                  Our GitHub repository has reached 100 stars at the begining of
                  the week. The user name is @binarysort :)
                </li>
                <li>
                  We appeared on GitHub Trending during the week and accumulated
                  500 stars over the week.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span
                class="block text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >July 26, 2021</span
              >
              <h1
                href="#release-022"
                id="release-022"
                class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:underline"
              >
                Bytebase 0.2.2
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
              Update instruction
              <ul class="mt-4 text-lg space-y-2">
                <li>
                  For fresh installation, follow
                  <a
                    href="https://github.com/bytebase/bytebase#installation"
                    target="__blank"
                    >https://github.com/bytebase/bytebase#installation</a
                  >.
                </li>
                <li>
                  If you upgrade from 0.1.0, then it requires manual schema
                  change, please contact
                  <a href="mailto:support@bytebase.com" target="__blank"
                    >support@bytebase.com</a
                  >
                  and we will assist you to perform the manual upgrade.
                </li>
              </ul>
              <h2>🐞 Important Bug Fixes</h2>
              <ul role="list">
                <li>
                  <strong>MySQL connection leak</strong> - In the previous
                  version, when Bytebase does not properly release the
                  connection after finishing connecting the MySQL instance,
                  which will cause MySQL connection pool exhaustation.
                </li>
              </ul>
              <h2>🚀 New Features</h2>
              <ul role="list">
                <li>
                  <strong
                    >External SQL console (<a
                      href="https://docs.bytebase.com/settings/external-sql-console"
                      target="__blank"
                      >detailed guide</a
                    >)</strong
                  >
                  - Allow user to configure an external SQL console like
                  phpMyAdmin. If configured, Bytebase will surface the link to
                  the console in the relevant database and table page
                </li>
                <li>
                  <strong>Issue list page</strong> - Added a dedicated page to
                  list issues. It supports to filter based on
                  user/project/environment/issue status.
                </li>
                <li>
                  <strong>Project migration history tab</strong> - The tab lists
                  the migration history for each database under that project.
                  For each database, Bytebase will list at most 5 most recent
                  migration history, and user can click the database name to
                  view the complete migration history.
                </li>
              </ul>
              <h2>🎄 Experience Enhancement</h2>
              <ul role="list">
                <li>
                  Added new 403, 404 page
                </li>
              </ul>
              <h2>🎠 Community</h2>
              <ul role="list">
                <li>
                  We launched our English blog, checkout our
                  <a
                    href="https://blog.bytebase.com/launch-bytebase"
                    target="__blank"
                    >launch post</a
                  >.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span
                class="block text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >July 19, 2021</span
              >
              <h1
                href="#release-020"
                id="release-020"
                class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:underline"
              >
                Bytebase 0.2.0
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
              Update instruction
              <ul class="mt-4 text-lg space-y-2">
                <li>
                  For fresh installation, follow
                  <a
                    href="https://github.com/bytebase/bytebase#installation"
                    target="__blank"
                    >https://github.com/bytebase/bytebase#installation</a
                  >.
                </li>
                <li>
                  If you upgrade from 0.1.0, it requires manual schema change,
                  please contact
                  <a href="mailto:support@bytebase.com" target="__blank"
                    >support@bytebase.com</a
                  >
                  and we will assist you to perform the manual upgrade.
                </li>
              </ul>
              <h2>🚀 New Features</h2>
              <ul role="list">
                <li>
                  <strong>Migration history</strong> - Added the migration
                  history to the database detail page. This is applicable to
                  project using either UI or Version Control workflow.
                </li>
                <li>
                  <strong>Table detail page</strong> - Added table detail page.
                  This is normally reached via the database detail page. The
                  table detail page displays the basic table info as well as its
                  columns and indexes.
                </li>
              </ul>
              <h2>🎄 Experience Enhancement</h2>
              <ul role="list">
                <li>
                  Added button to referesh the repository list when configuring
                  the project Version Control workflow.
                </li>
                <li>
                  Added help doc on
                  <a
                    href="https://docs.bytebase.com/install/docker#start-a-mysql-docker-instance-for-testing"
                    target="__blank"
                    >how to start a MySQL docker instance</a
                  >.
                </li>
              </ul>
              <h2>🎠 Community</h2>
              <ul role="list">
                <li>
                  In the first week after we open sourced Bytebase on GitHub, we
                  have added 3 external contributors. We also created and
                  resolved the first issue. Thanks @silentred, @s7v7nislands,
                  @spinningbot for the PR, as well as @IronManZ suggestions on
                  how to improve the MySQL setup guide.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span
                class="block text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >July 12, 2021</span
              >
              <h1
                href="#release-020"
                id="release-020"
                class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:underline"
              >
                Bytebase 0.1.0
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
              For fresh installation, follow
              <a
                href="https://github.com/bytebase/bytebase#installation"
                target="__blank"
                >https://github.com/bytebase/bytebase#installation</a
              >.
              <p>
                We released our first open source version on GitHub. Please
                checkout our
                <NuxtLink to="/blog/announce-bytebase">launch post</NuxtLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "changelog",
  head: {},
  setup() {
    const { title } = useMeta();
    title.value = "Changelog";
  },
});
</script>
