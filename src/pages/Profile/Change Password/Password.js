import React, { useRef, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";
import { logout } from "../../../redux/action/authAction";
import { clearError, updatePassword } from "../../../redux/action/userAction";
import {
  Background,
  Button,
  ButtonContainer,
  CloseModalButton,
  FormContainer,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalWrapper,
} from "./PassComponent";

export const ChangePassword = ({ pass, setPass }) => {
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = user;

  const [username, setUsername] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const modalRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: pass ? 1 : 0,
    transform: pass ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setPass(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && pass) {
        setPass(false);
        console.log("I pressed");
      }
    },
    [setPass, pass]
  );

  const updateHandler = (e) => {
    e.preventDefault();

    const userData = new FormData();
    userData.set("username", username);
    userData.set("oldPassword", oldPassword);
    userData.set("newPassword", newPassword);

    dispatch(updatePassword(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (isUpdated) {
      dispatch(logout());
      navigate("/login");
    }

    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress, dispatch, error, navigate, isUpdated]);

  return (
    <>
      {pass ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper pass={pass}>
              <ModalBody>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setPass((prev) => !prev)}
                />
                <FormContainer onSubmit={updateHandler}>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Password Lama</Label>
                    <Input
                      placeholder="*******"
                      type="password"
                      name="oldPassword"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Password Baru</Label>
                    <Input
                      placeholder="*******"
                      type="password"
                      name="newPassword"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </FormGroup>

                  <ButtonContainer>
                    <Button disabled={loading ? true : false}>Ganti</Button>
                  </ButtonContainer>
                </FormContainer>
              </ModalBody>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
