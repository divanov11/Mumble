import defaultImg from './images/default.png';
import sulamita from './images/sulamita.png';
import dennis from './images/dennis.jpg';
import shahriar from './images/shahriar.png';
import cody from './images/cody.png';
import mani from './images/mani.png';
import mohammad from './images/mohammad.png';
import abhijit from './images/abhijit.png';
import mehdi from './images/mehdi.png';
import samthefam from './images/samthefam.png';
import peng from './images/peng.png';
import zach from './images/zach.png';
import ujjawal from './images/ujjawal.png';

const notifications = [
  {
    id: '1',
    content: 'started discusion How to code better',
    notification_type: 'discussion',
    content_slug: 'How-do-you-configure-HttpOnly-cookies',
    user: {
      id: '3',
      name: 'Sulamita Ivanov',
      username: 'sulamtiaiva',
      profile_pic: sulamita,
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
      name: 'Shahriar Parvez',
      username: 'mrspShuvo',
      profile_pic: shahriar,
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
      name: 'Sulamita Ivanov',
      username: 'sulamtiaiva',
      profile_pic: sulamita,
    },
    created: '2021-04-02 T19:04:25+00:00',
    isRead: true,
  },
];

export default notifications;
