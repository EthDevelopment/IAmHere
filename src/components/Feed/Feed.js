// Feed.js

import React from "react";
import "./Feed.css";

const posts = [
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
  // Add more posts here
];

function Feed() {
  return (
    <div className="feed-container">
      {posts
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .map((post) => (
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
