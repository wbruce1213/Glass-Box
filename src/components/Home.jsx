import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar - Following convention placement */}
      <nav className="nav-bar">
        <div className="nav-content">
          <h1 className="logo">Glass Box</h1>
          <div className="search-bar">
            <input type="search" placeholder="Search" aria-label="Search" />
          </div>
          <div className="nav-icons">
            <button aria-label="Home">Home</button>
            <button aria-label="Messages">Messages</button>
            <button aria-label="Create new post">New Post</button>
            <button aria-label="Explore">Explore</button>
            <button aria-label="Profile">Profile</button>
          </div>
        </div>
      </nav>

      {/* Main Content - Improved hierarchy and readability */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Stories Section */}
          <section className="stories-section" aria-label="User stories">
            <h2 className="visually-hidden">Stories</h2>
            <div className="stories-container">
              {/* Stories will be added here */}
            </div>
          </section>

          {/* Posts Feed with improved visual hierarchy */}
          <section className="posts-feed" aria-label="Posts feed">
            <h2 className="visually-hidden">Posts</h2>
            <article className="post">
              <header className="post-header">
                <div className="post-user">
                  <div className="user-avatar" aria-hidden="true"></div>
                  <button className="username-button">user123</button>
                </div>
                <button className="more-options" aria-label="More options">•••</button>
              </header>
              <div className="post-image" role="img" aria-label="Post content"></div>
              <div className="post-actions">
                <button aria-label="Like post">Like</button>
                <button aria-label="Comment on post">Comment</button>
                <button aria-label="Share post">Share</button>
              </div>
              <div className="post-engagement">
                <p className="post-likes">100 likes</p>
                <p className="post-caption">
                  <span className="username">user123</span> 
                  <span className="caption-text">This is a sample post</span>
                </p>
              </div>
            </article>
          </section>
        </div>

        {/* Right Sidebar - Improved accessibility and visual hierarchy */}
        <aside className="sidebar" aria-label="User information and suggestions">
          <div className="user-profile">
            <div className="user-avatar" aria-hidden="true"></div>
            <div className="user-info">
              <button className="username-button">YourUsername</button>
              <span className="name">Your Name</span>
            </div>
          </div>
          <div className="suggestions">
            <div className="suggestions-header">
              <h3>Suggestions For You</h3>
              <button className="see-all-button">See All</button>
            </div>
            {/* Suggested users will be added here */}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home; 