import React from 'react';

/**
 * DefaultButton component
 *
 * Reusable styled button.
 * Props:
 * - text: string label displayed inside the button
 * - icon: optional icon element displayed next to the text
 *
 * Styling:
 * - Tailwind classes for size, colors, hover/focus states, and dark mode
 * - Full-width layout with rounded corners and bold heading font
 */

export default function DefaultButton({ icon, text }) {
  return (
    <button
      type="button"
      class="w-full text-stone-50 bg-sky-500 hover:bg-sky-600 hover:cursor-pointer focus:ring-4 focus:ring-blue-300 font-heading font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-500 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-blue-800"
    >
      {text}
      {icon}
    </button>
  );
}
