import { NavLogo } from '../styling/NavBar_elements';
import { Container, Button } from '../styling/Components.styled';
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
      <Container className="sidebar">
        <NavLogo className="nav-logo" to="/">
          <span className="light">dev</span>Cake
        </NavLogo>
        <div className="profile">
          {/* <h3 className= "handle text-muted">{user.name}</h3> */}
          <h4 className="navbar__username">@{user.username}</h4>
          <div>
            <Link key="user-profile" to="/user-profile">
              <img className="profile-photo" src={user.avatarUrl} alt="profile pic" />
            </Link>
          </div>
        </div>

        {/* <MenuItem> */}
        <Link className="menu-item" key="home" to="/">
          <span>
            <i className="fas fa-home"></i>
          </span>
          <h3>Home</h3>
        </Link>
        <Link className="menu-item" key="user-profile" to="/user-profile">
          <span>
            <i className="fas fa-user-circle"></i>
          </span>
          <h3>Profile</h3>
        </Link>
        <Link className="menu-item" key="topic-choice" to="/topic-choice">
          <span>
            <i className="fas fa-clipboard-list"></i>
          </span>
          <h3>Topics</h3>
        </Link>
        <Link className="menu-item" key="media-choice" to="/media-choice">
          <span>
            <i className="fas fa-photo-video"></i>
          </span>
          <h3>Media</h3>
        </Link>
        <Button className="btn" id="signOut__btn" onClick={handleSignOut}>
          Log Out
        </Button>
      </Container>
    </>
  );
};

export default NavBar;
