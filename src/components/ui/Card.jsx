import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-gray-900 dark:border-gray-800 dark:bg-gray-900 bg-stone-50 shadow-sm">
      <div className="bg-gray-800 p-3 pt-2 pb-2">
        <h2>{title}</h2>
      </div>
      <div className="mt-2 text-sm text-gray-900 dark:text-stone-50 p-3">
        {children}
      </div>
    </div>
  );
}
