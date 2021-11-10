import { NavLogo } from '../styling/NavBar_elements';
import { Container, Profilephoto, Button} from '../styling/Components.styled';
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
        <Container>
          <NavLogo to="/">DevCake</NavLogo>
          <div>
            {/* <h3 className= "handle text-muted">{user.name}</h3> */}
            <h4>{user.username}</h4>
            <div >
              <Profilephoto>
              <Link key="user-profile" to="/user-profile">
                <img src={user.avatarUrl} alt="profile pic" />
              </Link> 
              </Profilephoto>
              <Button className = "btn-primary" id="signOut__btn" onClick={handleSignOut}>
            log out
          </Button>
            </div>
          </div>
          {/* <MenuItem> */}
          <Link key="home" to="/">
          <i className="fas fa-home">Home</i> 
          </Link>
          <Link key="topic-choice" to="/topic-choice">
          <i className="fas fa-clipboard-list">Topic Choice</i>
          </Link>
          <Link key="media-choice" to="/media-choice">
          <i className ="fas fa-photo-video">Media Choice</i>
          </Link>
          <Link key="user-profile" to="/user-profile">
          <i className="fas fa-user-circle">User Profile</i>
          </Link>
          {/* <Link key="following" to="/user-profile">
          <i className="fas fa-check-square">Following</i>
          </Link>
          <Link key="Bookmarks" to="/user-profile">
          <i className="fas fa-bookmark">Bookmarks</i>
          </Link> */}
          {/* </MenuItem> */}
        </Container>
    </>
  );
};

export default NavBar;
