// import defaultImg from './images/default.png';
import sulamita from './images/sulamita.png';
// import dennis from './images/dennis.jpg';
import shahriar from './images/shahriar.png';
// import cody from './images/cody.png';
// import mani from './images/mani.png';
// import mohammad from './images/mohammad.png';
// import abhijit from './images/abhijit.png';
// import mehdi from './images/mehdi.png';
// import samthefam from './images/samthefam.png';
import peng from './images/peng.png';
// import zach from './images/zach.png';
// import ujjawal from './images/ujjawal.png';

const notifications = [
  {
    id: '1',
    content: 'started discusion How to code better',
    notification_type: 'discussion',
    content_slug: 'How-do-you-configure-HttpOnly-cookies',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    user: {
      id: '11',
      name: 'Peng Boris Akebuon',
      username: 'itzomen',
      profile_pic: peng,
    },
    created: '2021-04-02 T19:04:25+00:00',
    is_read: false,
  },
  {
    id: '2',
    content: 'wrote a new article',
    notification_type: 'article',
    content_slug: 'article2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    user: {
      id: '2',
      name: 'Shahriar Parvez',
      username: 'mrspShuvo',
      profile_pic: shahriar,
    },
    created: '2021-04-02 T19:04:25+00:00',
    is_read: false,
  },
  {
    id: '3',
    content: 'Started following you',
    notification_type: 'follow',
    content_slug: 'realsamwick',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: '3',
      name: 'Sulamita Ivanov',
      username: 'sulamtiaiva',
      profile_pic: sulamita,
    },
    created: '2021-03-29 T19:04:25+00:00',
    is_read: false,
  },
];

export default notifications;
