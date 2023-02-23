import React from "react";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ScaleLoader
        color={"#01fe2b"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

export default Loading;
