import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/components/CreateDiscussionPage.css';

import { Button } from '../common';
import { DiscussionsCard } from '../components';
import { discussions } from '../data';

const CreateDiscussionPage = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // use the form data and make a request to API
    alert('Discussion Created!! \n Now you will be directed to the Discussion Page');
    // redirect to the discussion page, in the real request slug should be changed to created discussion's slug
    history.push(`/discussion/What-is-this-locking-pin-for-a-hinge-called`);
  };

  return (
    <div className="container two-column-layout">
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
          </div>
        </div>
      </section>
      <section>
        <DiscussionsCard discussions={discussions} />
      </section>
    </div>
  );
};

export default CreateDiscussionPage;
