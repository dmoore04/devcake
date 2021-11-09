import { useContext, useEffect, useState } from 'react';
import { patchSaved, fetchSingleContent } from '../utils/api';
import UserContext from '../contexts/UserContext';
import IContent from '../interfaces/contentsData.interface';
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
  const [readingList, setReadingList] = useState<IContent[]>([]);

  async function addToList(contentID: string) {
    if (!user.saved.includes(contentID)) {
      user.saved.push(contentID);
      const newUser = await patchSaved(user._id, user.saved);
      setUser(newUser);
      localStorage.setItem('devCakeUser', JSON.stringify(newUser));
    }
  }

  async function removeFromList(contentID: string) {
    const index = user.saved.indexOf(contentID);
    if (index > -1) user.saved.splice(index, 1);
    const newUser = await patchSaved(user._id, user.saved);
    setUser(newUser);
    localStorage.setItem('devCakeUser', JSON.stringify(newUser));
  }

  useEffect(() => {
    const savedItems: string[] = user.saved;
    const bookmarked: IContent[] = [];
    savedItems.forEach((item) => {
      console.log(item);
      fetchSingleContent(item).then((result) => {
        bookmarked.push(result);
      });
    });
    setReadingList(bookmarked);
  }, [user.saved]);

  console.log(user.saved);

  return (
    <div>
      <p>this is the reading list</p>
      <ul>
        {readingList.map((item) => (
          <Following>
            <FollowedContainer>
              <ButtonTitle>
                <span>
                  <Avatar src={item.imgUrl} height="50px" />
                </span>
                {!user.saved.includes(item._id) ? (
                  <Follow onClick={() => addToList(item._id)}>Add to Reading List</Follow>
                ) : (
                  <Followed onClick={() => removeFromList(item._id)}>
                    Added to Reading List
                  </Followed>
                )}
              </ButtonTitle>
              <h3> {item.title}</h3>
              <h4>{item.type}</h4>
              <p> {item.desc}</p>
            </FollowedContainer>
          </Following>
        ))}
      </ul>
    </div>
  );
};

export default FollowedTopics;
