import React from 'react';

import '../styles/components/ArticlePage.css';

import { ArticlesCard } from '../components';
import { articles } from '../data';

const ArticlePage = ({ match }) => {
  let article = articles.find((u) => u.slug === match.params.slug);
  let relatedArticles = articles.filter((d) => d.slug !== match.params.slug);

  return (
    <div className="two-column-layout container">
      <section>
        <div className="card">
          <div className="card__body">
            <h1>{article.title}</h1>
            <div className="tags-wrapper">
              {article.tags.map((tag, index) => (
                <div key={index} className="tag">
                  <small>{tag}</small>
                </div>
              ))}
            </div>

            <div className="line-break"></div>
            <p>{article.body}</p>
          </div>
        </div>
      </section>

      <section>
        <ArticlesCard articles={relatedArticles} />
      </section>
    </div>
  );
};

export default ArticlePage;
