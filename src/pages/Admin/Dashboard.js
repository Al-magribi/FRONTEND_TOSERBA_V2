import React, { useEffect } from "react";
import Main from "./compnent/main/Main";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getOrders } from "../../redux/action/orderAction";
import { getUsers } from "../../redux/action/userAction";
import { getAllProducts } from "../../redux/action/productAction";
import { useLocation } from "react-router-dom";
import MetaData from "../MetaData";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageName = location.pathname.split("/")[2].toUpperCase();

  useEffect(() => {
    dispatch(getUsers());

    dispatch(getAllProducts());

    const interval = setInterval(() => {
      dispatch(getOrders());
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <Container>
      <MetaData title={`ADMIN - ${pageName}`} />
      <Main />
    </Container>
  );
};

export default Dashboard;
