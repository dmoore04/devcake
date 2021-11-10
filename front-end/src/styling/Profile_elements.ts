import styled from 'styled-components';
export const Following = styled.section`
  display: block;
  width: 60vw;
  background-color: #f9f2f2;
  padding-top: 2em;
  height: 100%;
`;

export const Follow = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  align-self: center;
  background-color: green;
`;

export const Followed = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  align-self: center;
  background-color: white;
  color: var(--color-primary);
  border: 0.5px solid var(--color-primary);
`;

export const Avatar = styled.img`
  margin-right: 0.5em;
`;

export const ButtonTitle = styled.p`
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const FollowedContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding-left: 1em;
`;

export const Bookmarks = styled.section`
  display: block;
  width: 60vw;
  background-color: #f9f2f2;
  padding-top: 2em;
  height: 100%;
`;

export const Image = styled.img`
  margin-right: 0.5em;
`;

export const BookmarkContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding-left: 1em;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 18vw 1fr 20vw;
  grid-column-gap: 1rem;
  column-gap: 1rem;
  position: relative;
  grid-template-areas: 'nav main right';
`;

export const StyledUserProfile = styled.div`
  grid-area: main;
  padding: 0px;
`;

export const StyledUserCard = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'picture name'
    'picture username';
  img {
    width: 200px;
    grid-area: picture;
  }
`;
export const ButtonContainer = styled.p`
  display: flex;
  margin: 10 0;
`;
export const HeaderButton = styled.button`
  height: 2em;
  width: 50%;
  background: #007922;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  /* margin-right: 10px;
  margin-left: 10px; */
  padding: 0;
`;
export const UnselectedHeaderButton = styled.button`
  height: 2em;
  width: 50%;
  background: white;
  color: #007922;
  font-weight: 600;
  border: none;
  cursor: pointer;
  /* margin-right: 10px;
  margin-left: 10px; */
  padding: 0;
`;
export const Bookmark = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  align-self: center;
  background-color: var(--color-primary);
`;

export const Bookmarked = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  align-self: center;
  background-color: white;
  color: var(--color-primary);
  border: 0.5px solid var(--color-primary);
`;
