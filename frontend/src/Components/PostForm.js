import React from 'react';

function PostForm() {
  return (
    <div className="card">
      <div className="card-body">
        <form id="feed-post-form" method="POST">
          <textarea placeholder="Share your brilliant thought!"></textarea>
          <div id="post-btn-wrapper">
            <input id="post-btn" className="btn btn-1" type="submit" value="Post" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
