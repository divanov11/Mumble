import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiUrl } from '../services/config';
import { useDetectClickOutside } from 'react-detect-click-outside';
import AuthorBox from './AuthorBox';
import PostAction from './PostAction';
import VotingWidget from './VotingWidget';
import { formatDate } from '../utilities/';
import { getPostComments } from '../actions/postActions';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  const {
    user,
    created,
    vote_rank,
    content,
    //comments,
    comment_count,
    share_count,
  } = post;

  let dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  let [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const [showPostMenu, setShowPostMenu] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
    dispatch(getPostComments(setComments, post.id));
  };

  const handlePostDropdownMenu = () => {
    setShowPostMenu(prevState => !prevState);
  };

  const closePostMenu = (e) => {
    if (navigationRef.current.classList.contains('dropmenu--show')) {
      navigationRef.current.classList.remove('dropmenu--show');
      setShowPostMenu(false);
    }
  }

  const navigationRef = useDetectClickOutside({
    onTriggered: closePostMenu,
  });

  useEffect(() => {
    if(showPostMenu) {
      navigationRef.current.classList.toggle('dropmenu--show');
    }
  }, [navigationRef, showPostMenu]);

  return (
    <div className={`${isComment && 'post-card--comment'}`} {...others}>
      <div className="post-header-wrapper">
        <AuthorBox
          avatarSrc={getApiUrl(user.profile_pic)}
          name={user.name}
          handle={user.username}
          url={`/profile/${user.username}`}
          size={isComment ? 'sm' : 'md'}
        />
        <div className="post--options">
          <div className="post__dropmenu">
            <p className="post__dropmenu--icon" onClick={handlePostDropdownMenu}>
              ...
            </p>
            <div ref={navigationRef} className="card dropmenu">
            {auth.user.id === user.id &&
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
            }
            {auth.user.id !== user.id &&
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
            }
            </div>
          </div>
          <p className="post-meta">{formatDate.distanceDate(created)}</p>
        </div>
      </div>
      <div className="post-contents">
        <VotingWidget votes={vote_rank} />
        <div className="post-body">
          {children}
          {content}
        </div>
      </div>
      <PostAction
        onMessageIconClick={toggleComments}
        comments={comment_count}
        link={link}
        postId={post.id}
        shares={share_count}
        setComments={setComments}
      />
      {showComments && (
        <div className="post-comments-wrapper">
          {comments.map((comment) => (
            <div key={comment.id} className="post-comment">
              <PostCard post={comment} link={'/'} isComment={true}>
                <div className="comment__mentioned">
                  Replying to
                  {comment.reply_at?.map((user) => (
                    <span key={user.id}> @{user.username}</span>
                  ))}
                </div>
              </PostCard>
            </div>
          ))}
        </div>
      )}{' '}
    </div>
  );
};

export default PostCard;
