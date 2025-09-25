import React from 'react';
import type {ReactNode} from 'react';
import Truncate from '../../../components/ui/Truncate';
import DefaultButton from '../../../components/ui/DefaultButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export interface FeedCardProps {
  postTitle?: string; 
  profileImg?: string; 
  featuredImg?: string; 
  profileName?: string;
  sub?: string;
  commentCount?: number;
  upvotes?: number; 
  downvotes?: number;
  postContent?: string;
  date?: ReactNode;
}

/**
 * Render a feed/post card showing title, author info, a content preview, and action counts.
 *
 * @param postContent - The post text shown in the card; content is truncated to 70 characters for the preview.
 * @param date - Display value for the post's date (may be a string or React node).
 * @returns The JSX element for the feed card component.
 */
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
}:FeedCardProps) {
  return (
    <div className="relative overflow-hidden rounded-sm border dark:border-gray-800 dark:bg-gray-900 bg-stone-50 border-gray-900 shadow-sm">
      {/* Top Heading */}
      <div className="bg-gray-800 p-3 pt-2 pb-2">
        <h3>{postTitle}</h3>
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
          <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
        </div>

        {/* Right side 70% */}
        <div className="flex-1 md:basis-8/12">
          {/* Nested left side */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <img className="w-1/3 lg:w-1/4 h-full" src={featuredImg} alt="" />
            <p>
              <Truncate length={70}>{postContent}</Truncate>
            </p>
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
