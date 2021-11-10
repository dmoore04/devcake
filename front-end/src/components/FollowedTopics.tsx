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
} from '../styling/Profile_elements';

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
  }, [user.topics]);

  return (
    <div>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Following>
              <FollowedContainer>
                <ButtonTitle>
                  <span>
                    <Avatar src={topic.imgUrl} height="50px" />
                  </span>
                  {!user.topics.includes(topic.slug) ? (
                    <Follow onClick={() => followTopic(topic.slug)}>Follow</Follow>
                  ) : (
                    <Followed onClick={() => unfollowTopic(topic.slug)}>Followed</Followed>
                  )}
                </ButtonTitle>
                <h3> {topic.name}</h3>
                <p> {topic.desc}</p>
              </FollowedContainer>
            </Following>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowedTopics;
