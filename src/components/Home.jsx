import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-content">
          <h1 className="logo">Glass Box</h1>
          <div className="nav-icons">
            <button>Home</button>
            <button>Messages</button>
            <button>New Post</button>
            <button>Explore</button>
            <button>Profile</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Stories */}
        <div className="stories-container">
          {/* We'll add stories here */}
        </div>

        {/* Posts Feed */}
        <div className="posts-feed">
          {/* Example Post */}
          <div className="post">
            <div className="post-header">
              <div className="post-user">
                <div className="user-avatar"></div>
                <span className="username">user123</span>
              </div>
              <button className="more-options">•••</button>
            </div>
            <div className="post-image">
              {/* Placeholder for post image */}
            </div>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
            <div className="post-likes">100 likes</div>
            <div className="post-caption">
              <span className="username">user123</span> This is a sample post
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="sidebar">
        <div className="user-profile">
          <div className="user-avatar"></div>
          <div className="user-info">
            <span className="username">YourUsername</span>
            <span className="name">Your Name</span>
          </div>
        </div>
        <div className="suggestions">
          <div className="suggestions-header">
            <span>Suggestions For You</span>
            <button>See All</button>
          </div>
          {/* Suggested users will go here */}
        </div>
      </aside>
    </div>
  );
};

export default Home; 