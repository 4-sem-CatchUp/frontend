import React from "react";
import EditProfileButton from "../components/EditProfileButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHeader() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-6 relative overflow-hidden rounded-md border border-gray-300/25 dark:bg-gray-900 bg-stone-50 p-6 md:p-8 shadow-sm">
      <div className="pointer-events-none absolute inset-0 rounded-2xl" />
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
        <EditProfileButton />
      </div>
    </section>
  );
}
