// Feed.js

import React, { useState } from "react";
import PostForm from "../Post/PostForm";
import "./feed.css";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "First post!",
      author: "User1",
      timestamp: "2024-06-01 12:00",
    },
    {
      id: 2,
      content: "Hello world!",
      author: "User2",
      timestamp: "2024-06-02 14:00",
    },
    {
      id: 3,
      content: "Another day, another post.",
      author: "User3",
      timestamp: "2024-06-03 16:00",
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      content,
      author: "CurrentUser", // Replace with actual user info if available
      timestamp: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed-container">
      <PostForm addPost={addPost} />
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <div className="post-author">{post.author}</div>
            <div className="post-timestamp">{post.timestamp}</div>
          </div>
          <div className="post-content">{post.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
