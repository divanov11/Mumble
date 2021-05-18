import React from 'react';
import { useHistory } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../styles/components/CreateArticlePage.css';

import { Button, Input } from '../common';
import { ArticlesCard, Page } from '../components';
import { articles } from '../data';
import { useValidationForm } from '../hooks';
import { useDispatch } from 'react-redux';
import { createArticle } from '../actions/articleActions';

const CreateArticlePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    dispatch(createArticle(form, history));
  };

  const [form, errors, onSubmit, onChange] = useValidationForm({
    validation: {
      title: (value) => value,
      content: (value) => value,
    },
    onSubmit: handleFormSubmit,
  });

  return (
    <Page sidebarNav={false}>
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
                data={form.content}
                onChange={(e, editor) => {
                  onChange({
                    target: {
                      name: 'content',
                      value: editor.getData(),
                    },
                  });
                }}
              />
              {errors.content && <small className="form__error">{'Body is required'}</small>}

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
    </Page>
  );
};

export default CreateArticlePage;
