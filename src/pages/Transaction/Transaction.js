import React, { useEffect, useState } from "react";
import Header from "../../component/Header/";
import Footer from "../../component/Footer";
import {
  Block,
  Buy,
  Container,
  Detail,
  DetailOrder,
  Image,
  ImageContainer,
  Info,
  Item,
  ItemDetail,
  Name,
  Orders,
  Price,
  Resi,
  Status,
  StatusColor,
  StatusPayment,
  Title,
  Total,
  TotalEnd,
  TotalProduct,
  Transactions,
  TransContainer,
} from "./TransCamponents";
import { DetailTrans } from "../DetailTranscation/DetailTrans";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  getOrderDetails,
  myOrders,
  updatePayment,
} from "../../redux/action/orderAction";
import { toast, ToastContainer } from "react-toastify";
import { UPDATE_PAYMENT_RESET } from "../../redux/constant/orderConstant";
import MetaData from "../MetaData";
import Loading from "../../component/Loading/Loading";

const Transaction = () => {
  const { orders, error, loading } = useSelector((state) => state.myOrder);
  const { isUpdatedPayment } = useSelector((state) => state.payment);

  const dispatch = useDispatch();

  const [orderId, setOrderId] = useState("");

  // handling detail using modal
  // start
  const [detail, setDetail] = useState(false);

  const detailHandler = (event, id) => {
    event.preventDefault();

    setDetail((prev) => !prev);

    setOrderId(id);
  };
  // end

  // Update Payment Status
  const getUpdatePayment = async (id) => {
    const data = await fetch(`/api/payment/status/${id}`);
    const result = await data.json();

    const status = result.response.transaction_status;

    const orderId = orders.map((order) => order._id);

    const updateStat = new FormData();
    updateStat.set("status", status);

    dispatch(updatePayment(orderId, updateStat));
  };

  useEffect(() => {
    if (!orderId) {
      dispatch(myOrders());

      if (error) {
        toast.error(error);
        dispatch(clearError());
      }
    } else {
      dispatch(getOrderDetails(orderId));
    }

    if (isUpdatedPayment) {
      toast.success("Pembayaran berhasil diperbarui");

      setTimeout(() => {
        dispatch({ type: UPDATE_PAYMENT_RESET });
      }, 3000);
    }
  }, [dispatch, error, orderId, isUpdatedPayment]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <MetaData title={"Daftar Pesanan"} />
          <DetailTrans detail={detail} setDetail={setDetail} />
          <Header />
          <TransContainer>
            <Transactions>
              <Title>Data Transaksi</Title>
              <Block>
                {orders &&
                  orders.map((order) => (
                    <Orders key={order._id}>
                      <Detail>
                        <Buy>
                          <Status>
                            Status:
                            <StatusColor status={order.orderStatus}>
                              {order.orderStatus}
                            </StatusColor>
                          </Status>
                          <Status>
                            Pembayaran:
                            <StatusPayment
                              status={order && order.payment.status}
                            >
                              {order && order.payment.status}
                            </StatusPayment>
                          </Status>

                          <Resi>Resi: {order && order.resi}</Resi>
                        </Buy>
                        {order.orderItems.map((item) => (
                          <Item key={item.product}>
                            <ImageContainer>
                              <Image src={item.img} alt={item.name} />
                            </ImageContainer>
                            <ItemDetail>
                              <Name>{item.name}</Name>
                              <Price>
                                {item.quantity} Barang x{" "}
                                {`Rp ${parseFloat(
                                  item.price
                                ).toLocaleString()}`}
                              </Price>
                            </ItemDetail>
                            <Total>
                              <p style={{ marginRight: "10px" }}>Total :</p>
                              <p>
                                <strong>
                                  {`Rp ${parseFloat(
                                    item.quantity * item.price
                                  ).toLocaleString()}`}
                                </strong>
                              </p>
                            </Total>
                          </Item>
                        ))}
                        <TotalProduct>
                          <TotalEnd>
                            <p style={{ marginRight: "10px" }}>
                              Total Belanja :
                            </p>
                            <p>
                              <strong>{`Rp ${parseFloat(
                                order.totalProduct
                              ).toLocaleString()}`}</strong>
                            </p>
                          </TotalEnd>
                        </TotalProduct>
                        <Info>
                          <DetailOrder
                            onClick={(event) => detailHandler(event, order._id)}
                          >
                            Detail
                          </DetailOrder>
                          <DetailOrder
                            onClick={() =>
                              getUpdatePayment(
                                order && order.payment && order.payment.order_id
                              )
                            }
                          >
                            Update
                          </DetailOrder>
                        </Info>
                      </Detail>
                    </Orders>
                  ))}
              </Block>
            </Transactions>
          </TransContainer>
          <Footer />
          <ToastContainer autoClose={3000} />
        </Container>
      )}
    </>
  );
};

export default Transaction;
