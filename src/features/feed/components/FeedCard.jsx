import React from "react";

export default function FeedCard({ children }) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-gray-900 dark:border-gray-300/25 dark:bg-gray-900 bg-stone-50 shadow-sm">
      <div className="bg-gray-800 p-3 pt-2 pb-2">
        <h2 className="text-sm font-semibold dark:text-gray-900 text-stone-50"></h2>
      </div>
      <div className="mt-2 text-sm text-gray-900 dark:text-stone-50 p-3">
        {children}
      </div>
    </div>
  );
}
