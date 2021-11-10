import React, { useEffect, useContext, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';
import UserContext from '../contexts/UserContext';

import TopicSuggestion from '../components/TopicSuggestion';
import FollowedTopics from '../components/FollowedTopics';
import ReadingList from '../components/ReadingList';
import {
  ButtonContainer,
  HeaderButton,
  StyledUserCard,
  StyledUserProfile,
  UnselectedHeaderButton,
} from '../styling/Profile_elements';

const UserProfile: React.FC<IPage> = (props) => {
  const { user } = useContext(UserContext);
  const [displayFollowing, setDisplayFollowing] = useState(true);
  const [displayReadingList, setDisplayReadingList] = useState(false);

  useEffect(() => {
    setDisplayFollowing(true);
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  const toggleFollowing = () => {
    setDisplayFollowing(true);
    setDisplayReadingList(false);
  };

  const toggleReading = () => {
    setDisplayFollowing(false);
    setDisplayReadingList(true);
  };

  return (
    <>
      <div className="left sidebar">
        <NavBar />
      </div>
      <div className="right">
        <TopicSuggestion />
      </div>
      <TopicSuggestion />
      <StyledUserProfile id="userInfo">
        <h3>User Profile</h3>
        <StyledUserCard>
          <img src={user.avatarUrl} alt={user.username} width="200" />
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
        </StyledUserCard>

        <ButtonContainer>
          {displayFollowing ? (
            <>
              <HeaderButton onClick={toggleFollowing}>Following</HeaderButton>
              <UnselectedHeaderButton onClick={toggleReading}>Reading List</UnselectedHeaderButton>
            </>
          ) : (
            <>
              <UnselectedHeaderButton onClick={toggleFollowing}>Following</UnselectedHeaderButton>
              <HeaderButton onClick={toggleReading}>Reading List</HeaderButton>
            </>
          )}
        </ButtonContainer>

        {displayFollowing ? <FollowedTopics /> : null}
        {displayReadingList ? <ReadingList /> : null}
      </StyledUserProfile>
    </>
  );
};

export default UserProfile;
