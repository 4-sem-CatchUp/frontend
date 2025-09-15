import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900 dark:text-stone-50 dark:bg-gray-950">
      <div className="mx-auto max-w-screen-xl py-10">
        {/* PROFILE HEADER */}
        <section className="grid grid-cols-1 md:grid-cols-6 gap-6 relative overflow-hidden rounded-2xl border border-white/10 dark:bg-gray-900 bg-stone-50 p-6 md:p-8 shadow-sm">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          <div
            className="md:col-span-1 space-y-6 h-32 w-32 flex items-center justify-center 
                      rounded-xl bg-gray-200 dark:bg-gray-800 
                      text-gray-500 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faUser} size="5x" />
          </div>
          <div className="md:col-span-4 space-y-6">
            <h1 className="text-xl md:text-2xl font-semibold">Username</h1>
            <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
              Quick bio section that the user can change
            </p>
          </div>
          <div className="md:col-span-1 space-y-6 ">
            <h1 className="text-xl md:text-2xl font-semibold">
              Rank 32
              <FontAwesomeIcon
                icon={faMedal}
                className="inline-block ml-1 text-yellow-500"
              />
            </h1>
            <button className="btn btn-blue"></button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-blue-300 font-heading font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Edit Profile
              <FontAwesomeIcon icon={faGear} className="inline-block ml-1" />
            </button>
          </div>
        </section>

        {/* MAIN GRID: 66 / 34 split on md+ */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* 66% column */}
          <div className="md:col-span-4 space-y-6">
            {/* Achievements card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-900 dark:border-stone-50/10 dark:bg-gray-900 bg-stone-50 p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-stone-50">
                Achievements
              </h2>
              <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
                List of earned achievements, and maybe currently ongoing ones?
              </p>
            </div>

            {/* Activity card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-900 dark:border-stone-50/10 dark:bg-gray-900 bg-stone-50 p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-stone-50">
                Activity
              </h2>
              <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
                Shows recent activity of the user, what subs they've made
                comments in, posts they've created etc.
              </p>
            </div>

            {/* Comments card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-900 dark:border-stone-50/10 dark:bg-gray-900 bg-stone-50 p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-stone-50">
                Comments
              </h2>
              <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
                List of comments people have made on the users profile, as well
                as an input field to create a new comment.
              </p>
            </div>
          </div>

          {/* 34% sidebar */}
          <aside className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 dark:bg-gray-900 bg-stone-50 p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <h2 className="text-sm font-semibold text-gray-300">Sidebar</h2>
              <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
                This area takes up roughly 34% of the width.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
