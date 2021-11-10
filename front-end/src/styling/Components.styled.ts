import styled from 'styled-components';

export const Container = styled.div`
  width: 18%;
  margin: 0 auto;
  height: 100vh;
  position: sticky;
`;

export const Button = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
`;

export const SingleContentCard = styled.li`
  // border: 3px solid;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 5px;
  display: grid;
  grid-template-columns: 18% 72%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    'topic blank bookmark'
    'image content content'
    'blank blank learn';
  img {
    margin: 30px 30px 30px 30px;
    float: left;
  }
`;
