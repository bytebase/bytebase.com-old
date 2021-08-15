<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-white pb-8" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-6 xl:col-span-1">
          <img class="h-10" src="~/assets/logo.svg" alt="Bytebase" />
          <div class="flex space-x-6">
            <a
              href="https://github.com//bytebase/bytebase"
              target="__blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com/BytebaseHQ"
              target="__blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>

            <a
              href="mailto:support@bytebase.com"
              target="__blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Email</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
            </a>

            <p class="text-base text-gray-400 xl:text-center">
              &copy; 2021 Bytebase
            </p>
          </div>
          <div class="text-base text-gray-500 hover:text-gray-900">
            <NuxtLink to="/privacy">
              Privacy Policy
            </NuxtLink>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Use cases
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    to="/usecase/developer"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    For Developer
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/usecase/techlead"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    For Tech Lead
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/usecase/dba"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    For DBA
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Integrations
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    to="/integration/gitlab"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    GitLab
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/integration/slack"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Slack
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/integration/discord"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Discord
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/integration/teams"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Teams
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/integration/phpmyadmin"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    phpMyAdmin
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Resources
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="https://docs.bytebase.com/?ref=bytebase.com"
                    target="__blank"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="https://blog.bytebase.com/?ref=bytebase.com"
                    target="__blank"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com//bytebase/bytebase"
                    target="__blank"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Company
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    to="/about"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    About
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/jobs"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Careers - We're Hiring!
                  </NuxtLink>
                </li>

                <li>
                  <a
                    href="mailto:support@bytebase.com"
                    target="__blank"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
