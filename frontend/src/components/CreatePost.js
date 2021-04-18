import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';
import '../styles/components/CreatePost.css';

import { Button, TextArea } from '../common';

const CreatePost = () => {
  let dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return setError('Post cannot be empty!');
    } else {
      dispatch(createPost({ content: message, isComment: false }));
    }
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
            <Button type="submit" color="main" text="Mumble Now" size="md" iconName="comment-alt" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
