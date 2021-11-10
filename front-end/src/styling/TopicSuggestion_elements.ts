import styled from 'styled-components';
export const Suggestions = styled.section`
  width: 270px;
  float: right;
  right: 0;
  background-color: #f9f2f2;
  padding-top: 2em;
  height: 100%;
  background: var(--color-white);
  margin: 0 auto;
`;

export const SuggestionTitle = styled.h4`
  padding: 1em;
  font-size: 1.3rem;
`;

export const Follow = styled.button`
  border-radius: 100px;
  height: 2em;
  width: 75px;
  background: #c4c4c4;
  color: black;
  font-weight: 600;
  border: none;
  box-shadow: 1px 1px 2px 0px black;
  cursor: pointer;
`;

export const Followed = styled.button`
  border-radius: 100px;
  height: 2em;
  width: 75px;
  background: #007922;
  color: white;
  font-weight: 600;
  border: none;
  box-shadow: -1px -1px 2px 0px black;
  cursor: pointer;
`;

export const Avatar = styled.img`
  margin-right: 0.5em;
`;

export const ButtonTitle = styled.p`
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const SuggestionContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding-left: 1em;
`;
