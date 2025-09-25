import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import DefaultButton from '@/components/ui/DefaultButton';

export default function FeedFilter() {
  return (
    <div>
      <div className='flex'>
      {' '}
      <DefaultButton 
      icon={<FontAwesomeIcon icon={faCaretDown} />}
      id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-center dark:bg-gray-800 text-sky-500  hover:text-sky-600 dark:bg- inline-flex items-center w-1/2 "
        type="button" text='Sort'/>
        <DefaultButton 
      icon={<FontAwesomeIcon icon={faFilter} />}
      id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-center dark:bg-gray-800 text-sky-500  hover:text-sky-600 dark:bg- inline-flex items-center w-1/2 "
        type="button" text='Filter'/>
</div>
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
