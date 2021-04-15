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
    // content,
    //comments,
    // comment_count,
    // share_count,
    origional_mumble,
  } = post;

  if (origional_mumble) {
    post = origional_mumble;
  }

  let dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  let [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const [showPostMenu, setShowPostMenu] = useState(false);


  const toggleComments = (newComment = false) => {
    if (newComment === true) {
      setShowComments(true);
    } else {
      setShowComments(!showComments);
    }
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
         {origional_mumble && (
          <div className="remumbled-note">
            <i className="fas fa-paper-plane"></i>
            <i>{user.username} remumbled</i>
          </div>
        )}
      <div className="post-header-wrapper">
          <AuthorBox
            avatarSrc={getApiUrl(post.user.profile_pic)}
            name={post.user.name}
            handle={post.user.username}
            url={`/profile/${post.user.username}`}
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
            {post.content}
          </div>
        </div>
        <PostAction
          onMessageIconClick={toggleComments}
          comments={post.comment_count}
          link={link}
          postId={post.id}
          shares={post.share_count}
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
