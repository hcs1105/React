import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
  display:flex;
`;

const Button = styled.button`
  padding:2rem 1rem;
  border:2px solid #3c5b69;
  border-radius:3px;
  margin:1rem 0;
  background:#ccc;
  color:#000;
  ${(props) =>
    props.primary &&
    css`
      background:#009cd5;
      color:#fff;
    `
  };
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button type="button">Normal Button</Button>
      <Button type="button" primary>Primary Button</Button>
    </Container>  
  );
}