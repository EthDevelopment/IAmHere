// src/components/Post/PostForm.js

import React from "react";
import "./postForm.css";

const PostForm = () => {
  return (
    <div className="post-form">
      <div className="post-header">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="profile-pic"
        />
        <textarea
          className="post-input"
          placeholder="What is happening?!"
        ></textarea>
      </div>
      <div className="post-footer">
        <div className="post-icons">{/* Add your icons here */}</div>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default PostForm;
