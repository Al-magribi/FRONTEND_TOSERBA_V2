import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  ButtonContainer,
  Container,
  FormContainer,
  FormGroup,
  Image,
  Info,
  InfoContainer,
  InputAvatar,
  Left,
  LoginWrapper,
  Right,
} from "./RegisterComponents";
import * as BiIocns from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clearError, register } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MetaData from "../MetaData";
import { TextField } from "@mui/material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { v4 } from "uuid";

const Register = () => {
  const { authUser, error, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(
    "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setPreview([]);
    setAvatar(e.target.files[0]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreview((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const fileName = avatar.name + v4();
    const storage = getStorage(app);
    const storageRef = ref(storage, `avatar/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, avatar);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.success(`progress ${progress} % done`);

        switch (snapshot.state) {
          case "paused":
            toast.success(" Prosess");

            break;
          case "running":
            toast.success("Done");

            break;

          default:
        }
      },
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const userData = new FormData();
          userData.set("name", name);
          userData.set("username", username);
          userData.set("phone", phone);
          userData.set("password", password);
          userData.set("avatar", url);

          dispatch(register(userData));
        });
      }
    );
  };

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [authUser, dispatch, error, navigate]);

  return (
    <Container>
      <MetaData title={"Register"} />
      <LoginWrapper>
        <Left>
          <Image
            src="https://plus.unsplash.com/premium_photo-1670462145719-38949458c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Register"
          />
        </Left>
        <Right>
          <FormContainer onSubmit={registerHandler}>
            <FormGroup>
              <TextField
                label="Nama Lengkap"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                label="email"
                type="email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                label="No Tlp"
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <AvatarGroup>
              <Avatar>
                <img
                  src={preview}
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Avatar>
              <InputAvatar
                type="file"
                name="avatar"
                accept="images/*"
                onChange={onChange}
              />
            </AvatarGroup>

            <ButtonContainer>
              <InfoContainer>
                <Info to="/login">Sudah Punya Akun?</Info>
                <Info to="/">
                  <BiIocns.BiLeftArrowAlt /> Kembali
                </Info>
              </InfoContainer>

              <Button disabled={loading ? true : false}>Daftar</Button>
            </ButtonContainer>
          </FormContainer>
        </Right>
      </LoginWrapper>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default Register;
