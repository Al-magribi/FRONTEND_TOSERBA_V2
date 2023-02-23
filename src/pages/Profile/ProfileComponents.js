import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../component/responsive";

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

export const ProfileBox = styled.div`
  height: 79vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserProfile = styled.div`
  border-radius: 10px;
  height: 500px;
  width: 550px;
  position: relative;
  box-shadow: 1px 2px 17px 0px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 1px 2px 17px 0px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 1px 2px 17px 0px rgba(0, 0, 0, 0.39);

  ${mobile({ width: "350px" })}
`;

export const BackImg = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 40%;
`;

export const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const AvatarBlock = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 9rem;
  left: 14rem;
  z-index: 0;

  ${mobile({ left: "8rem" })}
`;

export const Avatar = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
`;

export const UserInfo = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Name = styled.p``;

export const Email = styled.p``;

export const Phone = styled.p``;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 15%;
  width: 80%;
`;

export const Btn = styled.button`
  background-color: #03ac0e;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #42855b;
  }

  ${mobile({ margin: "0 0.5rem" })}
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
