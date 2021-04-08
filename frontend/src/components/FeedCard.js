import React from 'react';

import '../styles/components/Feed.css';

import { Card, PostCard } from '../common';

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
