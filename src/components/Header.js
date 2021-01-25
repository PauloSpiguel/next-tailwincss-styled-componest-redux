import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  color: red;
`;

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
