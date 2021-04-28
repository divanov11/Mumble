import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { formatDate } from '../utilities';
import classNames from 'classnames';

import '../styles/components/PostCardOptions.css';
import { deletePost } from '../actions/postActions';

const PostCardOptions = ({ post }) => {
  const auth = useSelector((state) => state.auth);

  const { user, created } = post;

  const dispatch = useDispatch();

  const [showPostMenu, setShowPostMenu] = useState(false);

  const handlePostDropdownMenu = (e) => {
    e.stopPropagation();
    setShowPostMenu(!showPostMenu);
  };

  const closePostMenu = () => {
    setShowPostMenu(false);
  };

  const navigationRef = useDetectClickOutside({
    onTriggered: closePostMenu,
  });

  const userCreatedPost = auth.user.id === user.user;

  return (
    <div className="post--options">
      <div className="post__dropmenu">
        <div className="post-meta">
          <span>{formatDate.distanceDate(created)}</span>
          <span className="post__dropmenu--icon" onClick={handlePostDropdownMenu}>
            <i className="fas fa-ellipsis-v"></i>
          </span>
        </div>

        <div
          ref={navigationRef}
          className={classNames('card', 'dropmenu', {
            'dropmenu--show': showPostMenu,
          })}
        >
          {userCreatedPost && (
            <>
              <div role="button" className="dropmenu__menuitem">
                <i className="fas fa-edit post__dropmenu--navicon"></i>
                Edit
              </div>
              <div
                onClick={() => dispatch(deletePost(post.id))}
                role="button"
                className="dropmenu__menuitem"
              >
                <i className="fas fa-trash post__dropmenu--navicon"></i>
                Delete
              </div>
            </>
          )}
          {!userCreatedPost && (
            <>
              <div role="button" className="dropmenu__menuitem">
                <i className="fas fa-minus-circle post__dropmenu--navicon"></i>
                Hide
              </div>
              <div role="button" className="dropmenu__menuitem">
                <i className="fas fa-user-times post__dropmenu--navicon"></i>
                Unfollow {user.name}
              </div>
              <div role="button" className="dropmenu__menuitem">
                <i className="fas fa-ban post__dropmenu--navicon"></i>
                Block {user.name}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCardOptions;
