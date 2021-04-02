import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/CreatePost.css';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

function PostForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      return setError('Post cannot be empty!');
    }
    alert(`Creating new post with message: ${message}`);
    setMessage('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (error && e.target.value) {
      setError(null);
    }
  };

  return (
    <div className="card create-post">
      <div className="card__body">
        <div className="create-post__header">
          <div className="author-box">
            <Avatar size="small" />
            <div className="author-box__info">
              <p className="author-box__name">Dennis Ivy</p>
              <small className="author-box__handle">@dennis_ivy</small>
            </div>
          </div>
          <Link to="/create-article" className="btn btn--sm">
            <i className="far fa-file-alt" style={{ marginRight: '5px' }} />{' '}
            Write Article
          </Link>
        </div>
        <div className="create-post__body">
          <form className="form" onSubmit={onFormSubmit}>
            <div className="form__field">
              <textarea
                className="input input--textarea"
                name="message"
                id="message"
                placeholder="Share your brilliant thought!"
                onChange={handleMessageChange}
                value={message}
              ></textarea>
              {error && <small style={errorStyles}>{error}</small>}

              <Button
                id="post-btn"
                type="submit"
                buttonStyle="main"
                size="large"
                text="Create Post"
                iconName="pencil-alt"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;

const errorStyles = {
  color: 'rgb(220, 20, 60)',
  fontWeight: 'bold',
  display: 'block',
};
