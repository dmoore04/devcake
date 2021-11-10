import { useContext, useEffect, useState } from 'react';
import { addTopics, fetchTopics } from '../utils/api';
import UserContext from '../contexts/UserContext';
import ITopicData from '../interfaces/topic.interface';
import {
  Follow,
  Followed,
  Avatar,
  SuggestionContainer,
  ButtonTitle,
  Suggestions,
  SuggestionTitle,
} from '../styling/TopicSuggestion_elements';

const TopicSuggestion: React.FC = () => {
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
      const suggested = topics.filter((topic) => !user.topics.includes(topic.slug));
      setTopics(suggested.slice(0, 5));
    });
  }, [user.topics]);

  return (
    <Suggestions>
      <SuggestionTitle>You might like...</SuggestionTitle>
      <ul>
        {topics.map((topic) => (
          <SuggestionContainer key={topic.slug}>
            <ButtonTitle>
              <span>
                <Avatar src={topic.imgUrl} height="20px" />
              </span>
              {topic.name}
            </ButtonTitle>
            {!user.topics.includes(topic.slug) ? (
              <Follow onClick={() => followTopic(topic.slug)}>Follow</Follow>
            ) : (
              <Followed onClick={() => unfollowTopic(topic.slug)}>Followed</Followed>
            )}
          </SuggestionContainer>
        ))}
      </ul>
    </Suggestions>
  );
};

export default TopicSuggestion;
