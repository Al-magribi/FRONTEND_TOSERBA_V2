import React, { useState } from "react";
import {
  Avatar,
  AvatarBlock,
  BackImg,
  Brand,
  Btn,
  BtnContainer,
  Container,
  Email,
  Footer,
  Img,
  Info,
  Name,
  Navbar,
  Note,
  Phone,
  ProfileBox,
  UserInfo,
  UserProfile,
} from "./ProfileComponents";
import { ChangePassword } from "./Change Password/Password";
import { UpdateProfile } from "./Update Profile/UpdateProfile";
import { useSelector } from "react-redux";
import MetaData from "../MetaData";

const Profile = () => {
  const year = new Date().getFullYear();
  const { user, loading } = useSelector((state) => state.auth);

  const [pass, setPass] = useState(false);
  const [profile, setProfile] = useState(false);

  const updatePass = () => {
    setPass((prev) => !prev);
  };

  const updateProfile = () => {
    setProfile((prev) => !prev);
  };

  return (
    <div>
      {loading ? (
        <h2>Loading dulu</h2>
      ) : (
        <Container>
          <MetaData title={"Profile"} />
          <UpdateProfile profile={profile} setProfile={setProfile} />
          <ChangePassword pass={pass} setPass={setPass} />
          <Navbar>
            <Brand to="/">TOSERBA</Brand>
          </Navbar>

          <ProfileBox>
            <UserProfile>
              <BackImg>
                <Img
                  src="https://images.unsplash.com/photo-1664319744952-fc688e23c988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="back"
                />
              </BackImg>
              <AvatarBlock>
                <Avatar src={user.avatar} alt="avatar" />
              </AvatarBlock>
              <UserInfo>
                <Info>
                  <Name>{user.name}</Name>
                  <Email>{user.username}</Email>
                  <Phone>{user.phone}</Phone>
                </Info>
                <BtnContainer>
                  <Btn>Ganti Avatar</Btn>
                  <Btn onClick={updatePass}>Ganti Password</Btn>
                  <Btn onClick={updateProfile}>Ganti Profile</Btn>
                </BtnContainer>
              </UserInfo>
            </UserProfile>
          </ProfileBox>
          <Footer>
            <Note>&copy; TOSERBA {year}</Note>
          </Footer>
        </Container>
      )}
    </div>
  );
};

export default Profile;
