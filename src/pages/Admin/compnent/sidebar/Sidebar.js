import React from "react";
import {
  Black,
  Bottom,
  Center,
  Container,
  Dashboard,
  DashIcon,
  Home,
  Li,
  LinkR,
  List,
  ListContainer,
  LiTitle,
  Logo,
  Logout,
  NotifIcon,
  OrderIocn,
  Profile,
  ProIcon,
  ServiceContainer,
  Setting,
  StatIcon,
  Top,
  UsefulContainer,
  UserContainer,
  UserIcon,
  White,
  Wrapper,
} from "./sidebarComponent";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Logo>Administrator</Logo>
        </Top>

        <Center>
          <Dashboard>
            <List>
              <LiTitle>Main</LiTitle>
              <Li>
                <DashIcon />
                <LinkR to="/admin/dashboard">Dashboard</LinkR>
              </Li>
              <Li>
                <Home /> <LinkR to="/">Home</LinkR>
              </Li>
            </List>
          </Dashboard>
          <ListContainer>
            <List>
              <LiTitle>Lists</LiTitle>
              <Li>
                <UserIcon />
                <LinkR to="/admin/users">User</LinkR>
              </Li>
              <Li>
                <ProIcon />
                <LinkR to="/admin/products">Produk</LinkR>
              </Li>
              <Li>
                <OrderIocn />
                <LinkR to="/admin/orders">Pesanan</LinkR>
              </Li>
            </List>
          </ListContainer>
          <UsefulContainer>
            <List>
              <LiTitle>Useful</LiTitle>
              <Li>
                <StatIcon />
                Status
              </Li>
              <Li>
                <NotifIcon />
                Notifikasi
              </Li>
            </List>
          </UsefulContainer>
          <ServiceContainer>
            <List>
              <LiTitle>Service</LiTitle>
              <Li>
                <Setting />
                System
              </Li>
              <Li>
                <Setting />
                Log
              </Li>
              <Li>
                <Setting />
                Setting
              </Li>
            </List>
          </ServiceContainer>
          <UserContainer>
            <List>
              <LiTitle>User</LiTitle>
              <Li>
                <Profile />
                Profile
              </Li>
              <Li>
                <Logout />
                Logout
              </Li>
            </List>
          </UserContainer>
        </Center>
        <Bottom>
          <White></White>
          <Black></Black>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
