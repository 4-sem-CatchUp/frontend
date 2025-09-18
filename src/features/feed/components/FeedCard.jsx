import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function FeedCard({ postTitle, children }) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-gray-900 dark:border-gray-300/25 dark:bg-gray-900 bg-stone-50 shadow-sm">
      {/* Top Heading */}
      <div className="bg-gray-800 p-3 pt-2 pb-2">
        <h2 className="text-sm font-semibold ">{postTitle}</h2>
      </div>

      {/* Rest of card */}
      <div className="mt-2 text-sm flex gap-4 md:gap-2 justify-center text-gray-900 dark:text-stone-50 p-3">
        {/* Left side 30% */}
        <div className=" md:basis-1/12 shrink-0 justify-center">
          <img
            className="rounded-full w-15 border-2 border-sky-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaO17R-l4C-6fTJD7pxe4jvCK7NBw_9GbSRw&s"
            alt=""
          />
        </div>
        <div className="flex-col md:flex-none  md:basis-3/12">
          <p>Burak Gültekin</p>
          <p>/datamatiker-aarhus</p>
          <p></p>
        </div>

        {/* Right side 70% */}
        <div className="flex-1 md:basis-8/12">
          {/* Nested left side */}
          <div className="flex">
            <img src="" alt="" />
            <p>{children}</p>
          </div>

          {/* Nested right side */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <a href="">
                <FontAwesomeIcon icon={faArrowUp} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faArrowDown} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faComment} />
                <span>3</span>
              </a>
            </div>
            <div className="flex">
              <button className="">Læs mere</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
