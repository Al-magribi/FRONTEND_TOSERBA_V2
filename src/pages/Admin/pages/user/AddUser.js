import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MetaData from "../../../MetaData";
import Navbar from "../../compnent/navbar/Navbar";
import Sidebar from "../../compnent/sidebar/Sidebar";
import { FaCloudUploadAlt, FaFileUpload } from "react-icons/fa";
import { RiFolderForbidFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { mobile } from "../../../../component/responsive";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { clearError, register } from "../../../../redux/action/authAction";

const Container = styled.div`
  display: flex;
  background-color: white;
`;

const Wrapper = styled.div`
  flex: 6;
  margin-right: 5px;
  margin-top: 5px;
`;

const Block1 = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Block2 = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Function = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

const Column1 = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Column2 = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 5px;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const AddUser = () => {
  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    password: "",
  });

  const { name, username, phone, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    console.log("first");

    const userData = new FormData();
    userData.set("name", name);
    userData.set("username", username);
    userData.set("phone", phone);
    userData.set("password", password);

    dispatch(register(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, navigate]);

  return (
    <Container>
      <MetaData title={`ADMIN - User`} />
      <Sidebar />
      <Wrapper>
        <Block1>
          <Navbar />
        </Block1>
        <Block2>
          <Function>
            <Right>
              <Link to="/admin/user/add">
                <Button color="#30E3DF">
                  <FaCloudUploadAlt />
                </Button>
              </Link>

              <Button color="#D61355">
                <RiFolderForbidFill />
              </Button>

              <Button color="#F94A29">
                <FaFileUpload />
              </Button>
            </Right>
          </Function>
          <LoginWrapper>
            <Column1>
              <Image
                src="https://plus.unsplash.com/premium_photo-1670462145719-38949458c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Register"
              />
            </Column1>
            <Column2>
              <FormContainer onSubmit={registerHandler}>
                <FormGroup>
                  <TextField
                    label="Nama Lengkap"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="email"
                    type="email"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="No Tlp"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </FormGroup>

                <ButtonContainer>
                  <Button color="#30E3DF">Daftar</Button>
                </ButtonContainer>
              </FormContainer>
            </Column2>
          </LoginWrapper>
        </Block2>
      </Wrapper>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default AddUser;
