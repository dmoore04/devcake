import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  margin: 10px 20px;
  background: #007922;
  color: white;
  border: none;
  box-shadow: -1px -1px 2px 0px black;
`;

export const ToggledButton = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  margin: 10px 20px;
  background: white;
  color: #007922;
  border: none;
  box-shadow: -1px -1px 2px 0px black;
`;

export const ChoiceContainer = styled.div`
  grid-area: main;
  text-align: center;
`;
