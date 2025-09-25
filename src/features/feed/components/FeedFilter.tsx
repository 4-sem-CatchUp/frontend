import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function FeedFilter() {
  return (
    <div>
      {' '}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="outline text-center bg-transparent inline-flex items-center"
        //class=" outline text-center bg-transparent inline-flex items-center w-1/4 xl:w-1/8"
        type="button"
      >
        Sortér
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Seneste
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Hot
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
