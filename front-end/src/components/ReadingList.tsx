import { useContext, useEffect, useState } from 'react';
import { patchSaved, fetchSavedContent } from '../utils/api';
import UserContext from '../contexts/UserContext';
import IContent from '../interfaces/contentsData.interface';
import { SingleContentCard } from '../styling/Components.styled';
import {
  Bookmarks,
  Bookmark,
  Bookmarked,
  Image,
  BookmarkContainer,
  ButtonTitle,
  List,
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
    <List>
      {readingList.map((content) => (
        <li>
          <SingleContentCard className="singleContent">
            <Bookmarks>
              <BookmarkContainer>
                <ButtonTitle>
                  <span>
                    <Image src={content.imgUrl} height="200px" />
                  </span>
                  {!user.saved.includes(content._id) ? (
                    <Bookmark className="btn btn-primary" onClick={() => addToList(content._id)}>
                      Bookmark
                    </Bookmark>
                  ) : (
                    <Bookmarked
                      className="btn btn-primary"
                      onClick={() => removeFromList(content._id)}
                    >
                      Bookmarked
                    </Bookmarked>
                  )}
                </ButtonTitle>
                <h3> {content.title}</h3>
                <p className="content-metadata">
                  {content.provider} ◼︎ {content.type}
                </p>
                <p className="content-desc"> {content.desc}</p>
              </BookmarkContainer>
            </Bookmarks>
          </SingleContentCard>
        </li>
      ))}
    </List>
  ) : (
    <p> Your reading list is empty</p>
  );
};

export default ReadingList;
