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
              SQL Review
            </h3>
            <p class="mt-5 text-base text-gray-500">
              A dedicated review workflow and UI for Developers and DBAs to
              collaborate on schema changes. Assisted with automatic backward
              compatibility, syntax checks.
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
              Database-as-Code
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Integrate with VCS hosting the migration scripts. Migration
              pipeline is triggered on observing new script push event.
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
              Streamlined Deployment
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Support multi-stage, multi-environment schema change in a single
              pipeline.
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
              Migration History
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Bookkeeping the full migration history with side-by-side diff
              comparison between versions.
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
              Anomaly Center
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Periodically scan all managed instances and databases and provide
              user a holistic view to see all anomalies.
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
              Drift Detection
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Automatically detects schema drift by comparing the recorded
              schema and actual schema. Catch any unexpected schema changes.
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
              Backup and Restore
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Per-database automatic and manual backup. Restore to new database
              with the entire restored chain history.
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
              Role-based Access Control
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Two role set. Owner, DBA, Developer for workspace. Owner,
              Developer for project.
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              Archive
            </h3>
            <p class="mt-5 text-base text-gray-500">
              Retire instead of destroying. Prevent breaking the system
              accidentally while keeping it manageable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
