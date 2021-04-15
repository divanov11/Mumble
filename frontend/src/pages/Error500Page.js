import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/components/Error500Page.css';

const Error500Page = ({ error }) => (
  <div className="main500page">
    <h1>5<span><img src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)"/></span><span><img src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)"/></span></h1>
    <h2>🚨 - Internal Error !</h2>
    <p>Something went wrong</p>
    <br/>
    <Link to="/">Click here to go back to the 🏡 home page</Link>
    <br/><br/>
    <h5>Also, you can 🙌 raise an issue&nbsp;
    <a href="https://github.com/divanov11/Mumble/issues"> here</a>.
    </h5>
  </div>
);

export default Error500Page;
