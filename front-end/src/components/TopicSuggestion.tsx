import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const TopicSuggestion: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  return <section></section>;
};

export default TopicSuggestion;
