import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function GlobalHeader() {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto text-sky-500 dark:text-stone-50 pt-4 pb-4">
        <a
          href="/"
          className="flex items-center ml-4 space-x-3 rtl:space-x-reverse text-3xl"
        >
          <FontAwesomeIcon icon={faOtter} className="text-sm xl:text-3xl" />
          <span className="self-center whitespace-nowrap dark:text-stone-50 text-sm xl:text-3xl font-bold font-heading">
            CatchUp
          </span>
        </a>

        {/* Mobile controls */}
        <div className="flex md:order-1">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-900 dark:text-stone-50 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-sm text-sm p-2.5 me-1"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-5 w-5 text-gray-900 dark:text-stone-50"
            />

            <span className="sr-only">Search</span>
          </button>

          {/* Desktop - search input */}
          <div className="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="md:text-xs text-gray-900 dark:text-stone-50"
              />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full  p-2 ps-10 text-sm outline-none text-gray-900 border-[0.5px] border-gray-500 rounded-sm bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:border-stone-50 placeholder:text-gray-900 md:placeholder:text-xs dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Mobile - menu toggle */}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <FontAwesomeIcon
              icon={faBars}
              aria-hidden="true"
              viewBox="0 0 17 14"
              className="text-xs text-gray-900 dark:text-stone-50"
            />
          </button>
        </div>

        {/* Collapible section */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          {/* Mobile - search input inside the menu */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5 text-gray-900 dark:text-stone-50"
              />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm focus:outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col text-sm xl:text-md p-4 md:p-0 mt-4 mr-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 dark:text-stone-50  md:hover:text-sky-500 dark:md:hover:text-sky-500  aria-[current=page]:text-sky-500"
                aria-current="page"
              >
                Feed
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-md text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-sky-500 md:p-0 md:dark:hover:text-sky-500 dark:text-stone-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 aria-[current=page]:text-sky-500"
              >
                Subs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-md text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-sky-500 md:p-0 dark:text-stone-50 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 aria-[current=page]:text-sky-500"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-px w-full bg-[linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300))] dark:bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.gray.600))]" />
    </nav>

    // <div className="flex flex-wrap sm:flex-nowrap gap-2 p-2 bg-gray-900">
    //   <div className="flex-[1_1_100%] sm:flex-[0_0_20%] h-16 md:h-20 bg-rose-400/40 flex items-center justify-center rounded">
    //     Left
    //   </div>

    //   <div className="flex-[1_1_100%] sm:flex-[0_0_60%] h-16 md:h-20 bg-sky-400/40 flex items-center justify-center rounded">
    //     Center
    //   </div>
    //   <div className="flex-[1_1_100%] sm:flex-[0_0_20%] h-16 md:h-20 bg-lime-400/40 flex items-center justify-center rounded">
    //     Right
    //   </div>
    // </div>

    // <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
    //   <div
    //     className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-0
    //               h-auto sm:h-8 px-2 py-1 sm:py-0"
    //   >
    //     {/* Left — 100% on mobile, 20% on sm+ */}
    //     <div className="flex-[1_1_100%] sm:flex-[0_0_20%] inline-flex items-center gap-1 px-2 text-stone-50 hover:text-stone-200">
    //       <a href="/" className="inline-flex items-center gap-1">
    //         <FontAwesomeIcon icon={faOtter} className="h-4 w-4" />
    //         <span className="text-xs sm:text-[10px]">Home</span>
    //       </a>
    //     </div>

    //     {/* Center — 100% on mobile, 60% on sm+ (true centered input) */}
    //     <div className="flex-[1_1_100%] sm:flex-[0_0_60%] min-w-0 flex justify-center">
    //       <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
    //         <FontAwesomeIcon
    //           icon={faMagnifyingGlass}
    //           size="xs"
    //           className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-stone-400 pointer-events-none"
    //         />
    //         <input
    //           type="search"
    //           placeholder="Search"
    //           className="w-60 bg-stone-50 h-6 rounded-sm pl-7 pr-2 text-[10px]
    //                  placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:outline-0 hidden sm:inline"
    //         />
    //       </div>
    //     </div>

    //     {/* Right — 100% on mobile, 20% on sm+ (icons always visible) */}
    //     <div
    //       className="flex-[1_1_100%] sm:flex-[0_0_20%] flex items-center justify-end
    //                 gap-2 sm:gap-3 md:gap-6 whitespace-nowrap"
    //     >
    //       <a
    //         href="/"
    //         className="inline-flex items-center gap-1 text-stone-50 text-xs hover:text-stone-200"
    //       >
    //         <FontAwesomeIcon icon={faHouse} className="h-4 w-4 shrink-0" />
    //         <span className="hidden sm:inline">Feed</span>
    //       </a>
    //       <a
    //         href="/"
    //         className="inline-flex items-center gap-1 text-stone-50 text-xs hover:text-stone-200"
    //       >
    //         <FontAwesomeIcon
    //           icon={faPeopleGroup}
    //           className="h-4 w-4 shrink-0"
    //         />
    //         <span className="hidden sm:inline">Subs</span>
    //       </a>
    //       <a
    //         href="/"
    //         className="inline-flex items-center gap-1 text-stone-50 text-xs hover:text-stone-200"
    //       >
    //         <FontAwesomeIcon icon={faUser} className="h-4 w-4 shrink-0" />
    //         <span className="hidden sm:inline">Profile</span>
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}
