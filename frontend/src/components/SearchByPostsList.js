import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersAndPostList.css';
import logo from '../assets/logo/dark-logo.png';

import { searchPosts } from '../actions/postActions';
import { Card } from '../common';
import PostCard from './PostCard';

const SearchByPostsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;
  const { posts } = useSelector((state) => state.postSearchList);

  useEffect(() => {
    dispatch(searchPosts(keyword));
  }, [dispatch, keyword]);

  const showResultsNotFound = posts.length === 0;

  return (
    <div className="category-wrapper" id="category-posts">
      {showResultsNotFound && (
        <div className="card">
          <div className="card__body">
            <div className="not-found">
              <div>
                <h2 className="not-found__logo">
                  4
                  <span>
                    <img src={logo} alt="Mumble Icon" />
                  </span>
                  4
                </h2>
                <h3>Mumble post not found</h3>
                <br />
                <p>Looks like the post title was spelled wrong or the post has been deleted !</p>
                <br />
                <Link to="/">&#x2190; Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showResultsNotFound &&
        posts.map((post) => (
          <Card key={post.id}>
            <div className="post-wrapper">
              <PostCard post={post} ancestors={[]} link={'/'} />
            </div>
          </Card>
        ))}
    </div>
  );
};

export default SearchByPostsList;
