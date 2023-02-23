import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Link } from "react-router-dom";
import {
  Brand,
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./FooterComponents";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Brand>TOSERBA</Brand>
        </Link>
        <Desc>
          Sebuah Project sederhana mengintegrasikan API jasa Ongkir untuk
          menghitung Ongkir dan Midtrans sebagai pembayaran. untuk mendapatkan
          source code ini silahkan menghubungi email atau whatsapp yang tertera.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaIcons.FaFacebookSquare />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaIcons.FaInstagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaIcons.FaLocationArrow
            style={{ marginRight: "10px", color: "#03ac0e" }}
          />{" "}
          622 Dixie Bogor, Jawa Barat
        </ContactItem>
        <ContactItem>
          <FaIcons.FaWhatsapp
            style={{ marginRight: "10px", color: "#03ac0e" }}
          />{" "}
          0877 2077 6871
        </ContactItem>
        <ContactItem>
          <SiIcons.SiGmail style={{ marginRight: "10px", color: "#03ac0e" }} />{" "}
          almagribi.appdev@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
