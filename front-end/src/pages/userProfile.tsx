import React, { useEffect, useContext, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';
import UserContext from '../contexts/UserContext';

import TopicSuggestion from '../components/TopicSuggestion';
import FollowedTopics from '../components/FollowedTopics';
import ReadingList from '../components/ReadingList';

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
      <NavBar />
      <TopicSuggestion />
      <section id="userInfo">
        <h3>this is where the User Info will go</h3>
        <img src={user.avatarUrl} alt={user.username} width="200" />
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
      </section>
      <p>
        <button onClick={toggleFollowing}>Following</button>{' '}
        <button onClick={toggleReading}>Reading List</button>
      </p>
      {displayFollowing ? <FollowedTopics /> : null}
      {displayReadingList ? <ReadingList /> : null}
    </>
  );
};

export default UserProfile;
