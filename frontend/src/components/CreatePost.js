import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
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
              style={{ minHeight: '10rem' }}
              name="create-post"
              placeholder="Ask a question!"
              onChange={handleMessageChange}
              value={message}
              label="Create Post"
              hideLabel={true}
              error={error}
            />
            <Button type="submit" size="md" color="main" text="Post Question" iconName="comment-alt" />
          </form>
          <Prompt
            when={message.length > 0}
            message="Are you sure you want to leave without posting?"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
