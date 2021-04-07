/* eslint-disable */
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

const discussions = [
  {
    id: '1',
    slug: 'How-do-I-set-HttpOnly-cookie-in-Django',
    headline: 'How do I set HttpOnly cookie in Django?',
    body: 'How do I set HttpOnly cookie in Django? And is it worth the effort to prevent XSS?',
    created: '2021-03-29 T19:04:25+00:00',
    vote_ratio: '26',
    user: {
      name: 'Sulamita Ivanov',
      username: 'sulamtiaiva',
      profile_pic: sulamita,
    },
    tags: ['Python', 'Django', 'React', 'Postgres', 'Security'],
    answers: [
      {
        id: '1',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
        vote_ratio: '-8',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '1',
          name: 'Dennis Ivy',
          username: 'dennis',
          profile_pic: dennis,
        },
      },
      {
        id: '2',
        content:
          'In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.',
        vote_ratio: '6',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '2',
          name: 'Shahriar Parvez',
          username: 'mrspShuvo',
          profile_pic: shahriar,
        },
      },
      {
        id: '3',
        content: 'In Django 3.0 you can set the following cookies to True in your settings.py',
        vote_ratio: '1',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '4',
          name: 'Cody Seibert',
          username: 'codyseibert',
          profile_pic: cody,
        },
      },
    ],
  },
  {
    id: '2',
    slug: 'How-do-you-configure-HttpOnly-cookies',
    headline: 'How do you configure HttpOnly cookies in tomcat / java webapps?',
    body:
      "After reading Jeff's blog post on Protecting Your Cookies: HttpOnly. I'd like to implement HttpOnly cookies in my web application.",
    created: '2021-03-29 T19:04:25+00:00',
    vote_ratio: '8',
    user: {
      id: '4',
      name: 'Cody Seibert',
      username: 'codyseibert',
      profile_pic: cody,
    },
    tags: [
      'Python',
      'Django',
      'React',
      'JavaScript',
      'Node JS',
      'Postgres',
      'System Architecture',
      'Security',
    ],
    answers: [
      {
        id: '1',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
        vote_ratio: '-8',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '2',
          name: 'Shahriar Parvez',
          username: 'mrspShuvo',
          profile_pic: shahriar,
        },
      },
      {
        id: '2',
        content:
          'In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.',
        vote_ratio: '6',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '2',
          name: 'Chandler Palm',
          username: 'chands',
          profile_pic: 'https://randomuser.me/api/portraits/men/56.jpg',
        },
      },
    ],
  },
  {
    id: '3',
    slug: 'What-is-this-locking-pin-for-a-hinge-called',
    headline: 'What is this locking pin for a hinge called?',
    created: '2021-03-29 T19:04:25+00:00',
    vote_ratio: '31',
    user: {
      id: '1',
      name: 'Dennis Ivy',
      username: 'dennis',
      profile_pic: dennis,
    },
    tags: ['Python', 'Django', 'React'],
    answers: [
      {
        id: '1',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
        vote_ratio: '-8',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '4',
          name: 'Cody Seibert',
          username: 'codyseibert',
          profile_pic: cody,
        },
      },
      {
        id: '2',
        content:
          'In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.',
        vote_ratio: '6',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '6',
          name: 'Manibharathi',
          username: 'mani',
          profile_pic: mani,
        },
      },
      {
        id: '3',
        content: 'In Django 3.0 you can set the following cookies to True in your settings.py',
        vote_ratio: '1',
        created: '2021-03-29 T19:04:25+00:00',
        user: {
          id: '7',
          name: 'Mohammad Khaled',
          username: 'mohammad4kh',
          profile_pic: mohammad,
        },
      },
    ],
  },
];

export default discussions;
