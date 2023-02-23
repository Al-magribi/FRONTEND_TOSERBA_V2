import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #fff;
  -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
`;

export const Brand = styled(Link)`
  margin-left: 4rem;
  font-size: 2rem;
  color: #03ac0e;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const StatusBox = styled.div`
  height: 79vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Desc = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Back = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000;
`;

export const Footer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Note = styled.p`
  font-size: 1rem;
`;
