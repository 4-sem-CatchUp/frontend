import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function EditProfileButton({ icon, text }) {
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
