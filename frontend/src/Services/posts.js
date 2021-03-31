export const createPost = async (content, [posts, setPosts]) => {
    // this would use axios to hit the api in the future
    setPosts([
        {
            id: `${parseInt(Math.random() * 1e6)}`,
            content,
            image: null,
            vote_rank: "0",
            post_type: "standard",
            created: "2021-03-29 T19:04:25+00:00",
            comment_count: "0",
            share_count: "0",
            comments: [],
            user: {
                id: "1",
                name: "Sam Wick",
                username: "realsamwick",
                profile_pic: "https://randomuser.me/api/portraits/men/52.jpg",
            },
        },
        ...posts,
    ]);
};
