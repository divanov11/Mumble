import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error404Page.css';

const Error404Page = () => (
  <div className="main404page">
    <h1>4<span><img src="./frontend/public/apple-touch-icon.png" alt="Mumble Logo"/></span>4</h1>
    <h2>Page Not Found !</h2>
    <br/>
    <p>Looks like you got lost</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default Error404Page;
