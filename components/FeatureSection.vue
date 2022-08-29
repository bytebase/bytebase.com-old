<template>
  <div class="mt-12 text-center">
    <div class="grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
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
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.sql-review.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </span>
          </div>
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.sql-advisor.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
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
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.sql-editor.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
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
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.gitops.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </span>
          </div>
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.tenent-mode.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </div>
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.online-schema-change.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </span>
          </div>
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.pitr.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </span>
          </div>
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.backup-restore.title") }}
          </h3>
        </div>
      </div>

      <div class="pt-6">
        <div class="flow-root bg-gray-50 rounded-lg px-6 py-6">
          <div class="-mt-12">
            <span
              class="inline-flex items-center justify-center p-3 bg-white border-2 border-gray-900 rounded-md shadow-lg"
            >
              <svg
                class="w-10 h-10 text-gray-900"
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
          <h3 class="mt-4 text-4xl font-medium text-gray-900 tracking-tight">
            {{ $t("features.role-based-access-control.title") }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
