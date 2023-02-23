import React, { useState } from "react";
import Announce from "../../component/Announcement";
import Header from "../../component/Header";
import Products from "../../component/Product";
import Footer from "../../component/Footer";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  ProdcutContainer,
  Select,
  Title,
} from "./ProListComp";
import { useLocation } from "react-router-dom";
import MetaData from "../MetaData";
import axios from "axios";

const ProductsList = () => {
  const [filterBycategory, setFilterBycategory] = useState();
  const [categories, setCategories] = useState([]);

  const location = useLocation();

  const categoryPage = location.pathname.split("/")[2];

  const filterHandler = (e) => {
    setFilterBycategory(e.target.value);
  };

  const categotyList = async () => {
    const data = await axios.get("/api/products");
    const res = data.data.products;

    const categories = [...new Set(res.map((product) => product.category))];

    setCategories(categories);
  };

  return (
    <div>
      <Container>
        <MetaData title={"TOSERBA-Produk"} />
        <Header />
        <Announce />
        <Title>Ambil barang yang kamu suka</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter :</FilterText>
            <Select
              name="category"
              onChange={filterHandler}
              onClick={categotyList}
              disabled={categoryPage ? true : false}
            >
              <Option>--Pilih Kategori--</Option>
              <Option>Semua Produk</Option>
              {categories.map((categories) => (
                <Option key={categories} value={categories}>
                  {categories}
                </Option>
              ))}
            </Select>
          </Filter>
        </FilterContainer>
        <ProdcutContainer>
          <Products categoryPage={categoryPage} category={filterBycategory} />
        </ProdcutContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductsList;
