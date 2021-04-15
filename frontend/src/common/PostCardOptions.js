import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { formatDate } from '../utilities/';
import classNames from 'classnames';
import '../styles/components/PostCardOptions.css';

const PostCardOptions = ({ post }) => {
  const auth = useSelector((state) => state.auth);

  const { user, created } = post;

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

  const userCreatedPost = auth.user.id === user.id;

  return (
    <div className="post--options">
      <div className="post__dropmenu">
        <p className="post__dropmenu--icon" onClick={handlePostDropdownMenu}>
          ...
        </p>
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
              <div role="button" className="dropmenu__menuitem">
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
      <p className="post-meta">{formatDate.distanceDate(created)}</p>
    </div>
  );
};

export default PostCardOptions;
