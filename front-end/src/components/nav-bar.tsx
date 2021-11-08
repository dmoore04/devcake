import { Nav, NavbarContainer, NavLogo } from '../styling/NavBar_elements';
import { Link, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const NavBar: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = (e: React.SyntheticEvent) => {
    setUser({
      _id: '',
      username: '',
      avatarUrl: '',
      name: '',
      topics: [],
      media: [],
      saved: [],
    });
    localStorage.removeItem('devCakeUser');
  };

  if (!user.username) {
    return <Redirect push to={{ pathname: '/log-in' }} />;
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">DevCake</NavLogo>
          <Link key="home" to="/">
            Home
          </Link>
          <Link key="topic-choice" to="/topic-choice">
            Topic Choice
          </Link>
          <Link key="media-choice" to="/media-choice">
            Media Choice
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
        </NavbarContainer>
      </Nav>
      <div>
        <img src={user.avatarUrl} alt="profile pic" width="50" />
        <h3>{user.name}</h3>
        <h4>{user.username}</h4>
        <button id="signOut__btn" onClick={handleSignOut}>
          log out
        </button>
      </div>
    </>
  );
};

export default NavBar;
