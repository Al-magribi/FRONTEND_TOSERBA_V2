import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";

export const Wrapper = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  ${tablet({ height: "40vh" })}
  ${mobile({ height: "20vh" })}
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
`;
