import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
export default function EditProfileButton(icon) {
  return (
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-blue-300 font-heading font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Edit Profile
      <FontAwesomeIcon icon={faGear} className="inline-block ml-1" />
    </button>
  );
}
