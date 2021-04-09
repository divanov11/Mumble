import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { searchPosts } from '../actions/postActions';
import { Card, PostCard } from '../common';

import '../styles/components/SearchBox.css';

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
        <div>
          <h5>No Results found..</h5>
        </div>
      )}
    </div>
  );
};

export default SearchByPostsList;
