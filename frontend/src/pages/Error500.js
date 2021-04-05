import React from 'react';
import { Link } from 'react-router-dom';

const Error500 = ({ error }) => (
  <div style={{ margin: '20rem' }}>
    <h1>🚨 500 - Internal Error!</h1>
    <h3>
      There was an error with this listing. <Link to="/"> Click here</Link> to
      back to the 🏡 home page.
      <h5>
        Also, you can raise an issue&nbsp;
        <a href="https://github.com/divanov11/Mumble/issues"> here 👋</a>.
      </h5>
    </h3>
    <pre
      style={{
        color: 'red',
        background: 'var(--color-light)',
        padding: '1rem 2rem',
        margin: '2rem 0',
      }}
    >
      <code>Error: {error.message}</code>
    </pre>
  </div>
);

export default Error500;
