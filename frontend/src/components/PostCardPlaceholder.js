import React from 'react';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';

import '../styles/components/PostCardPlaceholder.css';

const PostCardPlaceholder = () => {
  const cards = [1, 2, 3];
  return (
    <div className="show-loading-animation">
      {cards.map((value) => (
        <div key={value} className="card post-card-placeholder">
          <div className="post-card-placeholder__header">
            <div className="post-card-placeholder__avatar">
              <RoundShape color="#c5c5c5" style={{ width: 80, height: 80 }} />
            </div>
            <div className="post-card-placeholder__header-author-box">
              <TextBlock rows={2} color="#c5c5c5" />
            </div>
          </div>

          <div className="post-card-placeholder__body">
            <TextBlock rows={4} color="#c5c5c5" />
          </div>

          <div className="post-card-placeholder__actions">
            <TextBlock rows={1} color="#c5c5c5" style={{ width: 50 }} />
            <TextBlock rows={1} color="#c5c5c5" style={{ width: 50 }} />
            <TextBlock rows={1} color="#c5c5c5" style={{ width: 50 }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCardPlaceholder;
