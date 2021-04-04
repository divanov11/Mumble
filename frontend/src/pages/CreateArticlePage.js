import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import ArticlesCard from '../components/ArticlesCard';
import '../styles/components/CreateDiscussionPage.css';
import articles from '../data/articles';

function CreateArticlePage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // use the form data and make a request to API
    alert('Article Created!! \n Now you will be directed to the Articles Page');
    // redirect to the articles page, in the real request slug should be changed to created article's slug
    history.push(`/article/article1`);
  };

  return (
    <div className="container article--layout">
      <section>
        <div className="card">
          <div className="card__body">
            <div className="article-header">
              <h1 className="article-headline">Create Article</h1>
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
      <section id="right-sidebar">
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
}

export default CreateArticlePage;
