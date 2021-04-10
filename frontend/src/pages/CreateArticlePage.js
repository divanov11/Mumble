import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../styles/components/CreateArticlePage.css';

import { Button, Input } from '../common';
import { ArticlesCard } from '../components';
import { articles } from '../data';

const CreateArticlePage = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('Share your mumble thoughts...');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // use the form data and make a request to API
    alert('Article Created! \n Now you will be directed to the Articles Page');
    // redirect to the articles page, in the real request slug should be changed to created article's slug
    history.push(`/article/article1`);
  };

  return (
    <div className="container create-article--layout">
      <section>
        <div className="card">
          <div className="card__body">
            <div className="article-header">
              <h1 className="article-headline">Create Article</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
              <Input
                value={title}
                onChange={handleTitleChange}
                type="text"
                className="input"
                label="Title"
                required
              />
              <CKEditor
                editor={ClassicEditor}
                data={body}
                onChange={handleBodyChange}
                onFocus={(event, editor) => {
                  setBody((prevState) => {
                    // Strips html tags from prevState
                    // So gets blank even if user clicked any ckeditor option (list, quotes, etc.)
                    // before clicking content area
                    if (prevState.replace(/<[^>]*>?/gm, '') === 'Share your mumble thoughts...') {
                      return '';
                    }
                    return prevState;
                  });
                }}
              />
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
};

export default CreateArticlePage;
