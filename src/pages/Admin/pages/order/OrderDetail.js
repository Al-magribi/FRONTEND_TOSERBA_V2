import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../../../redux/action/orderAction";
import MetaData from "../../../MetaData";
import Header from "../../compnent/Header/Header";

const OrderDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    dispatch(getOrderDetails(orderId));

    setOrderId(params);

    console.log(orderId);
  }, [dispatch]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wv",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MetaData title={`Detail Pesanan`} />
      <Box>
        <Header />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default OrderDetail;
