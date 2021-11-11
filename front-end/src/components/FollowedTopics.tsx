import { useContext, useEffect, useState } from 'react';
import { addTopics, fetchTopics } from '../utils/api';
import UserContext from '../contexts/UserContext';
import ITopicData from '../interfaces/topic.interface';
import {
  Follow,
  Followed,
  Avatar,
  FollowedContainer,
  ButtonTitle,
  Following,
  List,
} from '../styling/Profile_elements';
import { SingleContentCard } from '../styling/Components.styled';

const FollowedTopics: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [topics, setTopics] = useState<ITopicData[]>([]);

  async function followTopic(topicSlug: string) {
    if (!user.topics.includes(topicSlug)) {
      user.topics.push(topicSlug);
      const newUser = await addTopics(user._id, user.topics);
      setUser(newUser);
      localStorage.setItem('devCakeUser', JSON.stringify(newUser));
    }
  }

  async function unfollowTopic(topicSlug: string) {
    const index = user.topics.indexOf(topicSlug);
    if (index > -1) user.topics.splice(index, 1);
    const newUser = await addTopics(user._id, user.topics);
    setUser(newUser);
    localStorage.setItem('devCakeUser', JSON.stringify(newUser));
  }

  useEffect(() => {
    fetchTopics().then((topics: ITopicData[]) => {
      const followed = topics.filter((topic) => user.topics.includes(topic.slug));
      setTopics(followed);
    });
  }, []);

  return (
    <List>
      {topics.map((topic) => (
        <SingleContentCard className="singleContent">
          <li key={topic.slug}>
            <Following>
              <FollowedContainer>
                <ButtonTitle>
                  <span>
                    <Avatar src={topic.imgUrl} height="50px" />
                  </span>
                  {!user.topics.includes(topic.slug) ? (
                    <Follow className="btn btn-primary" onClick={() => followTopic(topic.slug)}>
                      Follow
                    </Follow>
                  ) : (
                    <Followed className="btn btn-primary" onClick={() => unfollowTopic(topic.slug)}>
                      Followed
                    </Followed>
                  )}
                </ButtonTitle>
                <h3> {topic.name}</h3>
                <p> {topic.desc}</p>
              </FollowedContainer>
            </Following>
          </li>
        </SingleContentCard>
      ))}
    </List>
  );
};

export default FollowedTopics;
