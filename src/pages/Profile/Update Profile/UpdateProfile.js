import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
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
} from "./UpdateComponents";
import { loadUser } from "../../../redux/action/authAction";
import { useSelector, useDispatch } from "react-redux";
import { clearError, updateProfile } from "../../../redux/action/userAction";
import { toast, ToastContainer } from "react-toastify";
import { UPDATE_PROFILE_RESET } from "../../../redux/constant/userConstant";

export const UpdateProfile = ({ profile, setProfile }) => {
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();

  const modalRef = useRef();
  const dispatch = useDispatch();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: profile ? 1 : 0,
    transform: profile ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setProfile(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && profile) {
        setProfile(false);
        console.log("I pressed");
      }
    },
    [setProfile, profile]
  );

  const updateHandler = (e) => {
    e.preventDefault();

    const userData = new FormData();
    userData.set("name", name);
    userData.set("username", username);
    userData.set("phone", phone);

    dispatch(updateProfile(userData));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setPhone(user.phone);
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (isUpdated) {
      dispatch(loadUser());

      dispatch({ type: UPDATE_PROFILE_RESET });
      toast.success("Profil diperbarui");
    }
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress, dispatch, error, user, isUpdated]);

  return (
    <>
      {profile ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper profile={profile}>
              <ModalBody>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setProfile((prev) => !prev)}
                />
                <FormContainer onSubmit={updateHandler}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="username"
                      value={username || ""}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone</Label>
                    <Input
                      type="number"
                      name="phone"
                      value={phone || ""}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup>

                  <ButtonContainer>
                    <Button disabled={loading ? true : false}>Ganti</Button>
                  </ButtonContainer>
                </FormContainer>
              </ModalBody>
            </ModalWrapper>
          </animated.div>
          <ToastContainer autoClose={3000} />
        </Background>
      ) : null}
    </>
  );
};
