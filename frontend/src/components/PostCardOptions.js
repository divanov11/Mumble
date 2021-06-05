import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { formatDate } from '../utilities';
import classNames from 'classnames';

import '../styles/components/PostCardOptions.css';
import { deletePost } from '../actions/postActions';
import { deleteUserPost, followUser } from '../actions/userActions';
import { useLocation } from 'react-router';

const PostCardOptions = ({ post, ancestors, remumble, deletePostFromState }) => {
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;
  const auth = useSelector((state) => state.auth);
  const [showPostMenu, setShowPostMenu] = useState(false);
  const { user, created } = post;

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

  /* function:  handleDeleteMumble  (or)  handleDeleteRemumble
    when user deletes his/her mumble or remumble
    * 1. check the current path from the URL to know whether user is deleting from homepage or profile page
    * 2. if deleting from home page then dispatch delete action via postActions to postDashboardReducer
    * 3. if deleting from profile page then dispatch delete action via userActions to userPostsListReducer
    */
  const handleDeleteMumble = () => {
    if (currentPath === '/') {
      dispatch(deletePost(post.id));
    } else if (currentPath.startsWith('/profile')) {
      dispatch(deleteUserPost(post.id));
    }

    deletePostFromState(post);

    for (let ancestor of ancestors) {
      ancestor((count) => count - 1);
    }
    closePostMenu();
  };

  const handleDeleteRemumble = () => {
    if (currentPath === '/') {
      dispatch(deletePost(remumble.remumbleId));
    } else if (currentPath.startsWith('/profile')) {
      dispatch(deleteUserPost(remumble.remumbleId));
    }
    closePostMenu();
  };

  const handleFollowUser = () => {
    dispatch(followUser(post.user.username));
    closePostMenu();
  };

  const handleUnfollowUser = () => {
    dispatch(followUser(post.user.username));
    closePostMenu();
  };

  const isFollowingUser = useSelector((state) =>
    state.following.following.find((user) => user.id === post.user.id),
  );

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
                onClick={handleDeleteMumble}
                // onClick={() => dispatch(deletePost(post.id))}
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
              {isFollowingUser && (
                <div onClick={handleUnfollowUser} role="button" className="dropmenu__menuitem">
                  <i className="fas fa-user-times post__dropmenu--navicon"></i>
                  Unfollow {user.name}
                </div>
              )}
              {!isFollowingUser && (
                <div onClick={handleFollowUser} role="button" className="dropmenu__menuitem">
                  <i className="fas fa-user-times post__dropmenu--navicon"></i>
                  Follow {user.name}
                </div>
              )}
              <div role="button" className="dropmenu__menuitem">
                <i className="fas fa-ban post__dropmenu--navicon"></i>
                Block {user.name}
              </div>
              {remumble?.isMyRemumble && (
                <div onClick={handleDeleteRemumble} role="button" className="dropmenu__menuitem">
                  <i className="fas fa-trash post__dropmenu--navicon"></i>
                  Delete
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCardOptions;
