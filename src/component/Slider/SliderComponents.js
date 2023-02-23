import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet, small } from "../responsive";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({ height: "50vh" })}

  ${small({ height: "50vh" })}
`;

export const Arrows = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.2;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  ${tablet({ flexDirection: "column" })}
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ height: "20%", width: "40%" })}

  ${mobile({ display: "none" })}

  ${small({ display: "none" })}
`;

export const Img = styled.img`
  max-height: 80%;
  max-width: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;

  ${mobile({ fontSize: "40px" })}

  ${small({ fontSize: "20px" })}
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled(Link)`
  background-color: transparent;
  border: 0.5px solid #03ac0e;
  border-radius: 10px;
  color: #03ac0e;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: #03ac0e;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;
