import React from 'react';

import '../styles/components/Feed.css';

import { Card } from '../common';
import PostCard from './PostCard';

function Feed({ posts }) {
  return (
    <section className="feed">
      {posts.map((post) => (
        <Card key={post.id}>
          <div className="post-wrapper">
            <PostCard post={post} ancestors={[]} link={'/'} />
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Feed;
