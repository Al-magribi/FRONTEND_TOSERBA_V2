import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { mobile } from "../../../../component/responsive";

const Container = styled.div`
  height: 100%;
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ display: "none" })}
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 15rem;
  font-family: "Nunito", sans-serif;
`;

const Navbar = () => {
  const { user, loading } = useSelector((state) => state.auth);

  const location = useLocation();
  const pageName = location.pathname.split("/")[2].toUpperCase();

  return (
    <Container>
      <Left>
        <Name>{pageName}</Name>
      </Left>
      <Right>
        <Name>Selamat datang {loading ? <Loading /> : user.name}</Name>
      </Right>
    </Container>
  );
};

export default Navbar;
