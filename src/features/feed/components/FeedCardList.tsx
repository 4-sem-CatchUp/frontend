import React from 'react';
import { useFeed } from '../api/useFeedQuery';
import FeedCard from './FeedCard';

export default function FeedList() {
  const { data: posts = [], isLoading, isError, error } = useFeed();
   
  if (isLoading) return <p className="p-4">Loading…</p>;
  if (isError) return <p className="p-4">Error: {String(error?.message || 'failed')}</p>;

  return (
    <div className="grid gap-6">
      {posts?.map((p) => (
        <FeedCard
          key={p.id}
          postTitle={p.postTitle}
          profileImg={p.profileImg}
          featuredImg={p.featuredImg}
          profileName={p.profileName}
          sub={p.sub}
          commentCount={p.commentCount}
          upvotes={p.upvotes}
          downvotes={p.downvotes}
          postContent={p.postContent}
          date={p.date}
        />
      ))}
    </div>
  );
}
