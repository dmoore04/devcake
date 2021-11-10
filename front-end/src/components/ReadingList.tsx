import { useContext, useEffect, useState } from 'react';
import { patchSaved, fetchSavedContent } from '../utils/api';
import UserContext from '../contexts/UserContext';
import IContent from '../interfaces/contentsData.interface';
import {
  Bookmarks,
  Bookmark,
  Bookmarked,
  Image,
  BookmarkContainer,
  ButtonTitle,
} from '../styling/Profile_elements';

const ReadingList: React.FC = () => {
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
    fetchSavedContent(user._id).then((savedContent) => {
      setReadingList(savedContent);
    });
  }, []);

  return readingList ? (
    <ul>
      {readingList.map((content) => (
        <li>
          <Bookmarks>
            <BookmarkContainer>
              <ButtonTitle>
                <span>
                  <Image src={content.imgUrl} height="200px" />
                </span>
                {!user.saved.includes(content._id) ? (
                  <Bookmark onClick={() => addToList(content._id)}>Bookmark</Bookmark>
                ) : (
                  <Bookmarked onClick={() => removeFromList(content._id)}>Bookmarked</Bookmarked>
                )}
              </ButtonTitle>
              <h3> {content.title}</h3>
              <h4>{content.type}</h4>
              <p> {content.desc}</p>
            </BookmarkContainer>
          </Bookmarks>
        </li>
      ))}
    </ul>
  ) : (
    <p> Your reading list is empty</p>
  );
};

export default ReadingList;
