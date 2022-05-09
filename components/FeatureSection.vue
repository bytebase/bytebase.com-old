<template>
  <div class="mt-12 text-center">
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.sql-review.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.sql-review.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.database-as-code.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.database-as-code.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.streamlined-deployment.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.streamlined-deployment.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.sql-editor.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.sql-editor.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.migration-history.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.migration-history.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.anomaly-center.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.anomaly-center.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.drift-detection.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.anomaly-center.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.backup-and-restore.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.backup-and-restore.description") }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div class="-mt-6">
            <div>
              <span
                class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {{ $t("features.role-based-access-control.title") }}
            </h3>
            <p class="mt-5 text-base text-gray-500">
              {{ $t("features.role-based-access-control.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
