import React, { useState } from 'react';
import { Link, Prompt } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/components/CreatePost.css';

import { Button, AuthorBox, TextArea } from '../common';

const CreatePost = () => {
  let auth = useSelector((state) => state.auth);
  let { user } = auth;

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    window.onbeforeunload = null;
    if (!message.trim()) {
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

  window.onbeforeunload = function (e) {
    e.preventDefault();
    if (message.trim()) {
      return "Discard changes?";
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
          <Link to="/create-article">
            <Button text="Write Article" size="sm" iconName="edit" />
          </Link>
        </div>
        <div className="create-post__body">
          <form className="form" onSubmit={onFormSubmit}>
            <TextArea
              name="create-post"
              placeholder="Share your brilliant thought!"
              onChange={handleMessageChange}
              value={message}
              label="Create Post"
              hideLabel={true}
              error={error}
            />
            <Prompt
            when={message.length > 0}
            message="Are you sure you want to leave without posting?"
            />
            <Button type="submit" color="main" text="Mumble Now" iconName="comment-alt" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
