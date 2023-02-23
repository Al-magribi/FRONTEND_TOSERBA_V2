import React from "react";
import Slider from "../component/Slider";
import Announce from "../component/Announcement";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Category from "../component/Categories";
import Products from "../component/Product";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../component/responsive";
import MetaData from "./MetaData";

const LinkProducts = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const P = styled.h1`
  margin-left: 2rem;
  color: black;

  ${mobile({ fontSize: "1rem" })}
`;

const Home = () => {
  return (
    <div>
      <MetaData title={"UMKM INDONESIA"} />
      <Announce />
      <Header />
      <Slider />
      <Category />
      <LinkProducts to={"/products"}>
        <P>Tampilkan Semua Produk</P>
      </LinkProducts>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
