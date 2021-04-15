import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/components/Error500Page.css';

const Error500Page = ({ error }) => (
  <div className="main500page">
    <h1>5<span><img src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)"/></span><span><img src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)"/></span></h1>
    <h2>🚨 - Internal Error !</h2>
    <p>Something went wrong</p>
    <br/>
    <Link to="/">🏡 Go Home</Link>
    <br/>
);

export default Error500Page;
