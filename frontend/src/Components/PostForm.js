import React, { useContext, useState } from "react";
import { PostsContext } from "../Context/PostsContext";

import { createPost } from "../Services/posts";

function PostForm() {
    const [content, setContent] = useState("");
    const postsContext = useContext(PostsContext);

    const submit = async (e) => {
        e.preventDefault();
        await createPost(content, postsContext);
        setContent("");
    };

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={submit} id="feed-post-form">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Share your brilliant thought!"
                    ></textarea>
                    <div id="post-btn-wrapper">
                        <input
                            id="post-btn"
                            className="btn btn-1"
                            type="submit"
                            value="Post"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostForm;
