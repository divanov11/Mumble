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
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Feed;
