import styled from "styled-components";
import { Link as IconR } from "react-router-dom";
import { mobile, small, tablet } from "../responsive";

export const Wrapper = styled.div`
  display: flex;
`;

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
  margin: 5px;
  width: 283px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CFFDE1;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  ${tablet({ height: "270px", width: "200px" })}

  ${mobile({ height: "250px", width: "180px" })}

  ${small({ height: "180px", width: "160px" })}
`;

export const ProdInfo = styled.div`
  width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #3D5656;

  ${tablet({ height: "270px", width: "200px" })}

  ${mobile({ height: "250px", width: "180px" })}

  ${small({ height: "180px", width: "150px" })}
`;

export const Top = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProdName = styled.h3`
  ${mobile({ fontSize: "12px" })}

  ${small({ fontSize: "12px" })}
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
`;

export const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

export const Bottom = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ fontSize: "1rem" })}

  ${small({ fontSize: "0.6rem" })}
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e4efe7;
    transform: scale(1.3);
  }
`;

export const IconRoute = styled(IconR)`
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e4efe7;
    transform: scale(1.3);
  }
`;
