import React from 'react';

import Truncate from '../../../components/ui/Truncate';
import DefaultButton from '../../../components/ui/DefaultButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function FeedCard({
  postTitle,
  profileImg,
  featuredImg,
  profileName,
  sub,
  commentCount,
  upvotes,
  downvotes,
  postContent,
  date,
}) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-gray-900 dark:border-gray-300/25 dark:bg-gray-900 bg-stone-50 shadow-sm">
      {/* Top Heading */}
      <div className="bg-gray-800 p-3 pt-2 pb-2">
        <h2 className="text-sm font-semibold ">{postTitle}</h2>
      </div>

      {/* Rest of card */}
      <div className="mt-2 text-sm flex gap-4 justify-start text-gray-900 dark:text-stone-50 p-3">
        {/* Left side 30% */}
        <div className="flex-none w-16">
          <img className="rounded-full size-16 border-2 border-sky-500 object-cover" src={profileImg} alt="" />
        </div>
        <div className="flex-col md:flex-none  md:basis-3/12">
          <p>{profileName}</p>
          <p>{sub}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>

        {/* Right side 70% */}
        <div className="flex-1 md:basis-8/12">
          {/* Nested left side */}
          <div className="flex-col">
            <img className="pb-3 w-1/2" src={featuredImg} alt="" />
            <p>{postContent}</p>
          </div>

          {/* Nested right side */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <a href="">
                <FontAwesomeIcon icon={faArrowUp} />
                {upvotes}
              </a>
              <a href="">
                <FontAwesomeIcon icon={faArrowDown} />
                {downvotes}
              </a>
              <a href="">
                <FontAwesomeIcon icon={faComment} />
                <span>{commentCount}</span>
              </a>
            </div>
            <div className="flex">

              <DefaultButton text="Læs mere" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
