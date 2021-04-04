const notifications = [
  {
    id: '1',
    content: 'started discusion How to code better',
    notification_type: 'discussion',
    content_slug: 'How-do-you-configure-HttpOnly-cookies',
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
    notification_type: 'article',
    content_slug: 'article2',
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
    notification_type: 'follow',
    content_slug: 'realsamwick',
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
