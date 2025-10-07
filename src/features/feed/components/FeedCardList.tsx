import FeedCard from './FeedCard';
import FeedFilter from './FeedFilter';
import { useFeedPosts } from '../hooks/useFeedPosts';

export default function FeedCardList() {
  const { posts, sortBy, setSortBy, isLoading, isError, error } = useFeedPosts();

  if (isLoading) return <p className="p-4">Loading…</p>;
  if (isError) return <p className="p-4">Error: {String((error as any)?.message || 'failed')}</p>;

  return (
    <div className="grid gap-6">
      <FeedFilter
        value={sortBy}
        onChange={(v) => {
          console.log('sort change ->', v);
          setSortBy(v);
        }}
      />
      {posts?.map((p: any) => (
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
