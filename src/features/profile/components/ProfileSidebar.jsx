import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProfileSidebar() {
  return (
    <div className="relative overflow-hidden rounded-md border border-white/10 dark:border-gray-300/25 dark:bg-gray-900 bg-stone-50 p-6 shadow-sm">
      <div className="pointer-events-none absolute inset-0 rounded-2xl" />

      <h2 className="text-sm font-semibold text-gray-900 dark:text-stone-50 pb-2">
        Online Status
      </h2>
      <div className="h-px w-full bg-[linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300))] dark:bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.gray.600))]" />

      <h2 className="text-sm font-semibold text-gray-900 dark:text-stone-50 pt-2">
        Subs
      </h2>
      <ul className="mt-2 text-sm text-gray-900 dark:text-stone-50">
        <li>Animalpics</li>
        <li>Animalpics</li>
        <li>Animalpics</li>
        <li>Animalpics</li>
      </ul>
    </div>
  );
}
