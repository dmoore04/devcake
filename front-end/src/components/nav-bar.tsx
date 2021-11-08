import { Link } from 'react-router-dom';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="topic-choice" to="/topic-choice">
        Topic Choice
      </Link>
      <Link key="category-choice" to="/category-choice">
        Category Choice
      </Link>
      <Link key="user-profile" to="/user-profile">
        User Profile
      </Link>
      <Link key="following" to="/user-profile">
        Following
      </Link>
      <Link key="Bookmarks" to="/user-profile">
        Bookmarks
      </Link>
    </div>
  );
};

export default NavBar;
