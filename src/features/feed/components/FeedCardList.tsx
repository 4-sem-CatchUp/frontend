import React, { useMemo, useState } from 'react';
import { useFeed } from '../api/useFeedQuery';
import FeedCard from './FeedCard';
import FeedFilter from './FeedFilter';

export type SortOption = 'newest' | 'hottest' | 'topRated'; 

export default function FeedCardList() {
  const { data: posts = [], isLoading, isError, error } = useFeed();
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  
  
  const sortedPosts = useMemo(() => {

    const postsArray = [...posts]; 
    switch (sortBy) {
    case 'newest': 
    return postsArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() 
    );

    case 'hottest': {
      return postsArray.sort((a, b) => {
        const scoreA = (a.upvotes ?? 0) - (a.downvotes ?? 0);
        const scoreB = (b.upvotes ?? 0) - (b.downvotes ?? 0);
        if (scoreB !== scoreA) return scoreB - scoreA;
        return new Date(b.date).getTime() - new Date(a.date).getTime() 
      });
    }

    case 'topRated': {
      return postsArray.sort((a,b) => {
        const aUpvotes = a.upvotes ?? 0; 
        const bUpvotes = b.upvotes ?? 0;
        if (bUpvotes !== aUpvotes) return bUpvotes - aUpvotes;
        return new Date(b.date).getTime() - new Date(a.date).getTime() 
      });
    }

    default: 
    return posts;
  }
}, [posts, sortBy]);
  
  

  if (isLoading) return <p className="p-4">Loading…</p>;
  if (isError) return <p className="p-4">Error: {String(error?.message || 'failed')}</p>;
  
  
  return (
    <div className="grid gap-6">
      <FeedFilter value={sortBy} onChange={(v) => { console.log('sort change ->', v); setSortBy(v); }} />
      {sortedPosts?.map((p: any) => (
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
