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

const postsData = [
  {
    id: '1',
    content:
      'If you could add any kind of reaction besides a "like" to tweets/posts, what would you add? Looking for ideas, here are a few that I came up with: - Helpful - Cool - Interesting - Love',
    image: null,
    vote_rank: '25',
    post_type: 'standard',
    created: '2021-03-29 T19:04:25+00:00',
    comment_count: '2',
    share_count: '2',
    comments: [
      {
        id: '5',
        reply_at: [
          {
            id: '11',
            name: 'Peng Boris Akebuon',
            username: 'itzomen',
            profile_pic: peng,
          },
          {
            id: '10',
            name: 'Sam The Fam',
            username: 'samthefam',
            email: 'samthefam@mumble.dev',
            profile_pic: samthefam,
          },
        ],
        content: 'Love - Lke - Dislike. Probably stick to those 3',
        image: null,
        vote_rank: '1',
        post_type: 'standard',
        created: '2021-03-29 T19:04:25+00:00',
        comment_count: '2',
        share_count: '0',
        comments: [
          {
            id: '7',
            content: '100% Agree!',
            image: null,
            vote_rank: '0',
            post_type: 'standard',
            created: '2021-03-29 T19:04:25+00:00',
            comment_count: '0',
            share_count: '0',
            comments: [],
            user: {
              id: '9',
              name: 'Mehdi',
              username: 'midouWebDev',
              profile_pic: mehdi,
            },
          },
          {
            id: '8',
            content: 'Also here just to add comments',
            image: null,
            vote_rank: '0',
            post_type: 'standard',
            created: '2021-03-29 T19:04:25+00:00',
            comment_count: '1',
            share_count: '0',
            comments: [
              {
                id: '9',
                content: 'Interesting concept...',
                image: null,
                vote_rank: '0',
                post_type: 'standard',
                created: '2021-03-29 T19:04:25+00:00',
                comment_count: '0',
                share_count: '0',
                comments: [],
                user: {
                  id: '8',
                  name: 'Abhijit Vempati',
                  username: 'mohammad4kh',
                  email: 'abhivemp@mumble.dev',
                  profile_pic: abhijit,
                },
              },
            ],
            user: {
              id: '1',
              name: 'Dennis Ivy',
              username: 'dennis',
              profile_pic: dennis,
            },
          },
        ],

        user: {
          id: '7',
          name: 'Mohammad Khaled',
          username: 'mohammad4kh',
          email: 'mohammad@mumble.dev',
          profile_pic: mohammad,
        },
      },
      {
        id: '6',
        reply_at: [
          {
            id: '10',
            name: 'Sam The Fam',
            username: 'samthefam',
            email: 'samthefam@mumble.dev',
            profile_pic: samthefam,
          },
          {
            id: '9',
            name: 'Mehdi',
            username: 'midouWebDev',
            email: 'amidouWebDev@mumble.dev',
            profile_pic: mehdi,
          },
        ],
        content:
          'I dont know, why add anything new. Seem like the system we have has work nice so far. No need to change!',
        image: null,
        vote_rank: '1',
        post_type: 'standard',
        created: '2021-03-29 T19:04:25+00:00',
        comment_count: '0',
        share_count: '0',
        comments: [],

        user: {
          id: '6',
          name: 'Manibharathi',
          username: 'mani',
          profile_pic: mani,
        },
      },
    ],
    user: {
      name: 'Sulamita Ivanov',
      username: 'sulamtiaiva',
      profile_pic: sulamita,
    },
  },

  {
    id: '2',
    content:
      'The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get access to our alpha and future releases!',
    image: null,
    vote_rank: '22',
    post_type: 'standard',
    created: '2021-03-27 T19:04:25+00:00',
    comment_count: '0',
    share_count: '0',
    comments: [],
    user: {
      id: '13',
      name: 'Ujjawal Shrivastava',
      username: 'ujjawal',
      email: 'ujjawal@mumble.dev',
      profile_pic: ujjawal,
    },
  },

  {
    id: '3',
    content:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    image: null,
    vote_rank: '6',
    post_type: 'standard',
    created: '2021-03-29 T19:02:25+00:00',
    comment_count: '0',
    share_count: '3',
    comments: [],
    user: {
      id: '1',
      name: 'Dennis Ivy',
      username: 'dennis',
      email: 'dennis@mumble.dev',
      profile_pic: dennis,
    },
  },

  {
    id: '4',
    content:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    image: null,
    vote_rank: '36',
    post_type: 'standard',
    created: '2021-03-29 T19:04:25+00:00',
    comment_count: '0',
    share_count: '3',
    comments: [],
    user: {
      id: '4',
      name: 'Cody Seibert',
      username: 'codyseibert',
      email: 'cody@mumble.dev',
      profile_pic: cody,
    },
  },
  {
    id: '5',
    content:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    image: null,
    vote_rank: '36',
    post_type: 'standard',
    created: '2021-03-29 T19:04:25+00:00',
    comment_count: '0',
    share_count: '3',
    comments: [],
    user: {
      id: '2',
      name: 'Shahriar Parvez',
      username: 'MrspShuvo',
      email: 'mrspShuvo@mumble.dev',
      profile_pic: shahriar,
    },
  },
];

export default postsData;
