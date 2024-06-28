// src/components/Profile/Profile.js

import React from "react";
import user from "../../data/user.json"; // Import the user data
import "./Profile.css"; // Create this CSS file for styling the profile

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-banner">
        <img
          src="https://example.com/banner.jpg"
          alt="Banner"
          className="banner-image"
        />
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src="https://example.com/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
        <p>{user.bio}</p>
        <p>📍 {user.location}</p>
        <p>
          🔗 <a href={`https://${user.website}`}>{user.website}</a>
        </p>
        <p>📅 Joined {user.joined}</p>
        <p>
          <strong>{user.following}</strong> Following{" "}
          <strong>{user.followers}</strong> Followers
        </p>
      </div>
      <div className="profile-posts">
        <h2>Posts</h2>
        {user.posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <p>{post.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
