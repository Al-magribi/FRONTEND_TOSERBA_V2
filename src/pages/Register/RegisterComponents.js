import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, small } from "../../component/responsive";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

export const LoginWrapper = styled.div`
  height: 450px;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ${mobile({ width: "350px" })}
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${mobile({ display: "none" })}

  ${small({ display: "none" })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.figure`
  display: inline-block;
  margin-bottom: 0;
  margin-right: 10px;
  height: 3rem;
  width: 3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
`;

export const InputAvatar = styled.input``;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: gray;
  padding: 5px 0px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #000;
  }
`;

export const Button = styled.button`
  background-color: #6eccaf;
  border: none;
  color: white;
  width: 30%;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #000;
  }
`;
