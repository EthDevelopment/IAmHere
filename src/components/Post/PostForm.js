// PostForm.js

import React, { useState } from "react";
import "./postForm.css";

function PostForm({ addPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="post-form-header">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="profile-pic"
        />
        <textarea
          className="post-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What is happening?!"
        />
      </div>
      <div className="post-form-footer">
        <div className="post-icons">
          {/* Add icons here, using placeholders for now */}
          <span className="icon">🖼️</span>
          <span className="icon">GIF</span>
          <span className="icon">📊</span>
          <span className="icon">😊</span>
          <span className="icon">📅</span>
          <span className="icon">📍</span>
        </div>
        <button type="submit" className="post-button">
          Post
        </button>
      </div>
    </form>
  );
}

export default PostForm;
