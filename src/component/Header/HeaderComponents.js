import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { small, mobile, tablet } from "../responsive";
import { Button } from "@mui/material";

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #fff;
  -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  z-index: 10;

  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}

  ${small({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

export const NavContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}

  ${small({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({ display: "none" })}

  ${small({ display: "none" })}
`;

export const LeftContent = styled(LinkR)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
`;

export const Brand = styled.h1`
  color: #03ac0e;
  font-weight: bold;
`;

export const Small = styled.small`
  color: #03ac0e;
  font-size: small;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  margin: 0 1rem;
  width: 500px;
  &:focus {
    outline: none;
  }

  ${tablet({ width: "250px", marginLeft: "2rem" })}

  ${mobile({ width: "100px" })}

  ${small({ width: "100px" })}
`;

export const MobileMenu = styled.div`
  display: none;

  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1.5rem",
  })}

  ${small({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1.5rem",
  })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  ${mobile({ display: "none" })}

  ${small({ display: "none" })}
`;

export const NavItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
`;

export const NavBtnLog = styled(LinkR)`
  border-radius: 10px;
  border: 1px solid #03ac0e;
  text-decoration: none;
  padding: 10px 22px;
  color: #03ac0e;
  font-weight: bold;

  &:hover {
    background-color: #03ac0e;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavBtnReg = styled(LinkR)`
  border-radius: 10px;
  border: 1px solid #03ac0e;
  text-decoration: none;
  padding: 10px 22px;
  background-color: #03ac0e;
  color: #fff;

  font-weight: bold;

  &:hover {
    color: #03ac0e;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavBadge = styled(LinkR)`
  color: #03ac0e;
  cursor: pointer;
  margin-right: 15px;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const UserSide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const UserDropDown = styled(Button)`
  color: #03ac0e;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  height: 80%;
  width: 80%;
  object-fit: cover;
`;

export const NameContainer = styled.div`
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 5px;

  ${tablet({ display: "none" })}

  ${mobile({ display: "none" })}
`;

export const Name = styled.p`
  color: #03ac0e;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuLinkR = styled(LinkR)`
  color: #000;
  text-decoration: none;
`;
