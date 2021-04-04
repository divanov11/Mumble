import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/CreatePost.css';
import Button from '../common/Button';
import AuthorBox from '../common/AuthorBox';
import userData from '../data/users';

function PostForm() {
  const user = userData.find((u) => Number(u.id) === 1);

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
          <AuthorBox
            name={user.name}
            handle={user.username}
            url={`/profile/${user.username}`}
            avatarSrc={user.profile_pic}
            size="sm"
          />
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
                color="main"
                size="lg"
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
