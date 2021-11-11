import React from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

import { patchSaved } from '../utils/api';

type ComponentProps = {
  content_id: string;
};

const AddToBookmarks: React.FC<ComponentProps> = (props: any) => {
  const { user, setUser } = useContext(UserContext);

  const { content_id } = props;

  async function addToSaved(content_id: string) {
    console.log(content_id);
    if (!user.saved.includes(content_id)) {
      user.saved.push(content_id);
      const newUser = await patchSaved(user._id, user.saved);
      setUser(newUser);
      localStorage.setItem('devCakeUser', JSON.stringify(newUser));
    }
  }

  async function removeFromSaved(content_id: string) {
    const index = user.saved.indexOf(content_id);
    if (index > -1) user.saved.splice(index, 1);
    const newUser = await patchSaved(user._id, user.saved);
    setUser(newUser);
    localStorage.setItem('devCakeUser', JSON.stringify(newUser));
  }

  return (
    <>
      {!user.saved.includes(content_id) ? (
        <button className="bookmark__before" onClick={() => addToSaved(content_id)}>
          <i className="far fa-bookmark bookmark"></i>
        </button>
      ) : (
        <button className="bookmark__after" onClick={() => removeFromSaved(content_id)}>
          <i className="fas fa-bookmark bookmark"></i>
        </button>
      )}
    </>
  );
};

export default AddToBookmarks;
