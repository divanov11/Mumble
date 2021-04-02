import React from 'react';

import '../styles/App.css';
import '../styles/index.css';
import { PostComment } from '../Components/PostComment';

export default {
  title: 'Components/PostComment',
  component: PostComment,
};

const comment = {
  id: '5',
  reply_at: [
    {
      id: '1',
      name: 'Sam Wick',
      username: 'realsamwick',
      profile_pic: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      id: '2',
      name: 'Chandler Palm',
      username: 'chands',
      profile_pic: 'https://randomuser.me/api/portraits/men/56.jpg',
    },
  ],
  content: 'Love - Lke - Dislike. Probably stick to those 3',
  image: null,
  vote_rank: '1',
  post_type: 'standard',
  created: '2021-03-29 T19:04:25+00:00',
  comment_count: '1',
  share_count: '0',
  user: {
    id: '3',
    name: 'Janet Sours',
    username: 'jsours',
    profile_pic: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
};

export const Default = () => (
  <div style={{ width: '700px', background: 'white' }}>
    <PostComment comment={comment}></PostComment>
  </div>
);
