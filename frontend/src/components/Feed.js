import React from 'react';

import Card from '../common/Card';
import PostCard from '../common/PostCard';

import '../styles/components/Feed.css';

function Feed({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <Card key={post.id}>
          <div className="post-wrapper">
            <PostCard post={post} link={'/'} />
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Feed;
