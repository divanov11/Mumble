import React from 'react';
import { useHistory } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../styles/components/CreateArticlePage.css';

import { Button, Input } from '../common';
import { ArticlesCard } from '../components';
import { articles } from '../data';
import { useValidationForm } from '../hooks/useValidationForm';

const CreateArticlePage = () => {
  const history = useHistory();

  const handleFormSubmit = () => {
    alert('Article Created! \n Now you will be directed to the Articles Page');
    history.push(`/article/article1`);
  };

  const [form, errors, onSubmit, onChange] = useValidationForm({
    validation: {
      title: (value) => value,
      body: (value) => value,
    },
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="container two-column-layout">
      <section>
        <div className="card">
          <div className="card__body">
            <div className="article-header">
              <h1 className="article-headline">Create Article</h1>
            </div>
            <form onSubmit={onSubmit}>
              <Input
                placeholder="Your title goes here..."
                value={form.title}
                onChange={onChange}
                type="text"
                className="input"
                name="title"
                label="Title"
                error={errors.title && 'Title is required'}
              />
              <CKEditor
                config={{ placeholder: 'Share your mumble thoughts...' }}
                editor={ClassicEditor}
                data={form.body}
                onChange={(e, editor) => {
                  onChange({
                    target: {
                      name: 'body',
                      value: editor.getData(),
                    },
                  });
                }}
              />
              {errors.body && <small className="form__error">{'Body is required'}</small>}

              <Button color="main" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
};

export default CreateArticlePage;
