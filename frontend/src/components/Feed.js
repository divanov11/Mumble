import React, { useState } from 'react';

import Card from '../common/Card';
import PostCard from '../common/PostCard';

import '../styles/components/Feed.css';

function FeedEntry({ post }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => setShowComments(!showComments);

  return (
    <Card key={post.ugu.hh}>
      <div className="post-wrapper">
        <PostCard onMessageIconClick={toggleComments} post={post} link={'/'} />
        {showComments && (
          <div className="post-comments-wrapper">
            {post.comments.map((comment) => (
              <div key={comment.id} className="post-comment">
                <PostCard post={comment} link={'/'} isComment={true}>
                  <div className="comment__mentioned">
                    Replying to
                    {comment.reply_at.map((user) => (
                      <span key={user.id}> @{user.username}</span>
                    ))}
                  </div>
                </PostCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

function Feed({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <FeedEntry key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Feed;
