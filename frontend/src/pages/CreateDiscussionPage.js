import React, { useState, useEffect } from 'react';
import { useHistory, Prompt } from 'react-router-dom';

import '../styles/components/CreateDiscussionPage.css';

import { Button } from '../common';
import { Page } from '../components';

const CreateDiscussionPage = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDiscussionSubmitted, setIsDiscussionSubmitted] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.onbeforeunload = null;
    // use the form data and make a request to API
    alert('Discussion Created!! \n Now you will be directed to the Discussion Page');
    // set isArticleSubmitted variables
    setIsDiscussionSubmitted(true);
    // reset title and body variables
    setTitle('');
    setBody('');
  };

  window.onbeforeunload = function (e) {
    e.preventDefault();
    if (title.trim() || body.trim()) {
      return 'Discard changes?';
    }
  };

  useEffect(() => {
    if (isDiscussionSubmitted) {
      // redirect to the articles page, in the real request slug should be changed to created article's slug
      history.push(`/article/article1`);
    }
  }, [history, isDiscussionSubmitted]);

  return (
    <Page>
      <section>
        <div className="card">
          <div className="card__body">
            <div className="discussion-header">
              <h1 className="discussion-headline">Create Discussion</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="form__field">
                <label>Title</label>
                <input
                  value={title}
                  onChange={handleTitleChange}
                  type="text"
                  className="input"
                  required
                />
              </div>
              <div className="form__field">
                <label>Body</label>
                <textarea
                  value={body}
                  onChange={handleBodyChange}
                  className="input input--textarea"
                  required
                ></textarea>
              </div>
              <Button color="main" type="submit">
                Submit
              </Button>
            </form>
            <Prompt
              when={title.length > 0 || body.length > 0}
              message="Are you sure you want to leave without finishing your discussion?"
            />
          </div>
        </div>
      </section>
      <section></section>
    </Page>
  );
};

export default CreateDiscussionPage;
