import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { searchPosts } from '../actions/postActions';
import { Card, PostCard } from '../common';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersandPostList.css';
import logo from '../assets/logo/dark-logo.png';

const SearchByPostsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;
  const postSearchList = useSelector((state) => state.postSearchList);
  const { posts } = postSearchList;

  useEffect(() => {
    dispatch(searchPosts(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="category-wrapper" id="category-posts">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id}>
            <div className="post-wrapper">
              <PostCard post={post} link={'/'} />
            </div>
          </Card>
        ))
      ) : (
        <div className="card">
          <div className="card__body">
            <div className="not__found">
              <div>
                <h2 className="fade__404__logo">
                  4
                  <span>
                    <img src={logo} alt="Mumble Icon" />
                  </span>
                  4
                </h2>
                <h3>Mumble post not found !</h3>
                <br />
                <p>Looks like the post title was spelled wrong or the post has been deleted !</p>
                <br />
                <Link to="/">&#x2190; Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchByPostsList;
