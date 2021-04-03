const notifications = [
  {
    id: '1',
    content: 'started discusion How to code better',
    user: {
      id: '2',
      name: 'Chandler Palm',
      username: 'chands',
      profile_pic: 'https://randomuser.me/api/portraits/men/56.jpg',
    },
    created: '2021-03-29 T19:04:25+00:00',
    isRead: true,
  },
  {
    id: '2',
    content: 'wrote a new article',
    user: {
      id: '2',
      name: 'John Doe',
      username: 'johnny',
      profile_pic: 'https://randomuser.me/api/portraits/men/53.jpg',
    },
    created: '2021-04-02 T19:04:25+00:00',
    isRead: false,
  },
  {
    id: '3',
    content: 'Started following you',
    user: {
      id: '2',
      name: 'John Doe',
      username: 'johnny',
      profile_pic: 'https://randomuser.me/api/portraits/men/58.jpg',
    },
    created: '2021-04-02 T19:04:25+00:00',
    isRead: true,
  },
];

export default notifications;
