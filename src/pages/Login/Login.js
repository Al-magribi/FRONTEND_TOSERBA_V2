import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  FormContainer,
  FormGroup,
  Image,
  Info,
  InfoContainer,
  Left,
  LoginWrapper,
  Right,
} from "./LoginComponents";
import * as BiIocns from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../MetaData";
import { TextField } from "@mui/material";

const Login = () => {
  const { authUser, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }

    if (error) {
      if (error === "Login first to access this page") {
        return;
      }
      toast.error(error);
      dispatch(clearError());
    }
  }, [authUser, dispatch, error, navigate]);

  const LoginHandler = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  };
  return (
    <div>
      <MetaData title={"Login"} />
      <Container>
        <LoginWrapper>
          <Left>
            <Image
              src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="login"
            />
          </Left>
          <Right>
            <FormContainer onSubmit={LoginHandler}>
              <FormGroup>
                <TextField
                  id="outlined-basic1"
                  label="Email"
                  variant="outlined"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <ButtonContainer>
                <InfoContainer>
                  <Info to="/">
                    <BiIocns.BiLeftArrowAlt /> Kembali
                  </Info>
                </InfoContainer>

                <Button>Masuk</Button>
              </ButtonContainer>
            </FormContainer>
          </Right>
        </LoginWrapper>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </div>
  );
};

export default Login;
