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
  text-transform: capitalize;
`;

export const NextButton = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  cursor: pointer;
  transition: all 300ms ease;
  margin: 10px 20px;
  border: none;
  text-transform: uppercase;
  background: none;
  color: var(--color-dark);
  font-weight: 500 !important;
  font-size: 1.2em !important;
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
  border: 2px solid #007922;
  text-transform: capitalize;
`;

export const ChoiceContainer = styled.div`
  grid-area: main;
  text-align: center;
`;
