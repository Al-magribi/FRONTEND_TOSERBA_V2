import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllProducts } from "../../redux/action/productAction";
import ProductsData from "./ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  display: flex;
  margin-bottom: 50px;
`;

const AllProduct = styled.div`
  display: flex;
  align-items: center;
`;

const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  margin: 1rem 1rem;
`;

const Products = ({ categoryPage, category }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const allProducts = location.pathname.split("/")[1];

  const { products } = useSelector((state) => state.products);

  const name = "";

  useEffect(() => {
    if (categoryPage) {
      dispatch(getAllProducts(categoryPage, name));
    } else if (category === "Semua Produk") {
      navigate("/products");
      dispatch(getAllProducts());
    } else if (category) {
      dispatch(getAllProducts(category, name));
    } else {
      dispatch(getAllProducts());
    }
  }, [dispatch, category]);

  return (
    <Container>
      <AllProduct>
        <ProductsBox>
          {allProducts
            ? products.map((item) => (
                <ProductsData key={item._id} item={item} />
              ))
            : products
                .slice(0, 10)
                .map((item) => <ProductsData key={item._id} item={item} />)}
        </ProductsBox>
      </AllProduct>
    </Container>
  );
};

export default Products;
