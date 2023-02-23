import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  Amount,
  Background,
  Btn,
  Buyer,
  CloseModalButton,
  DetailPrice,
  DetailUser,
  Header,
  Items,
  Left,
  ModalBody,
  ModalWrapper,
  NameProduct,
  Price,
  Print,
  Qty,
  Right,
  Row,
  Seller,
  Shipment,
  Total,
  TotalAmount,
  TotalItems,
} from "./DetailComponents";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_ORDERS_RESET } from "../../redux/constant/orderConstant";
import { toast, ToastContainer } from "react-toastify";

// handling date and time
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "Asia/Jakarta",
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("id-ID", options).replace(/\./g, ":");
};

export const DetailTrans = ({ detail, setDetail }) => {
  const dispatch = useDispatch();

  const { order, payment, orderItems } = useSelector(
    (state) => state.orderDetail
  );

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.orderUpDel
  );

  const { user } = useSelector((state) => state.auth);
  // Print Hander
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Modal Handler
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: detail ? 1 : 0,
    transform: detail ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setDetail(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && detail) {
        setDetail(false);
        console.log("I pressed");
      }
    },
    [setDetail, detail]
  );

  useEffect(() => {
    if (updateError) {
      toast.error("Gagal diperbarui");
    }

    if (isUpdated) {
      toast.success("Berhasil diperbarui");
      dispatch({ type: UPDATE_ORDERS_RESET });
    }

    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress, dispatch, isUpdated, updateError]);

  return (
    <>
      {detail ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper detail={detail}>
              <ModalBody ref={componentRef}>
                <Header>
                  <Left>TOSERBA</Left>
                  <Right>
                    <p>order# {order && order._id}</p>
                    <p>Kode Pembayaran# {payment && payment.order_id}</p>
                  </Right>
                  <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => setDetail((prev) => !prev)}
                  />
                </Header>
                <DetailUser>
                  <Seller>
                    <strong>DITERBITKAN ATAS NAMA</strong>
                    <p>PENJUAL: TOSERBA</p>
                  </Seller>
                  <Buyer>
                    <p>Untuk</p>
                    <p>
                      Pembeli: <strong>{user.name}</strong>
                    </p>
                    <p>
                      Tanggal Pembelian:{" "}
                      <strong>{formatDate(order && order.paidAt)}</strong>
                    </p>
                    <p>
                      Pengiriman:{" "}
                      <strong>
                        {order && order.shipment && order.shipment.address}
                      </strong>
                    </p>
                    <p>
                      Resi : <strong>{order && order.resi}</strong>
                    </p>
                  </Buyer>
                </DetailUser>
                <Row>
                  <NameProduct>
                    <strong>Info Produk</strong>
                  </NameProduct>
                  <Qty>Jumlah</Qty>
                  <Price>Harga Satuan</Price>
                  <Amount>Total Harga</Amount>
                </Row>
                {order &&
                  order.orderItems &&
                  order.orderItems.map((item) => (
                    <Items key={item._id}>
                      <NameProduct>
                        <strong
                          style={{
                            color: "green",
                          }}
                        >
                          {item.name}
                        </strong>
                      </NameProduct>
                      <Qty>{item.quantity}</Qty>
                      <Price>{`Rp ${parseFloat(
                        item.price
                      ).toLocaleString()}`}</Price>
                      <Amount>{`Rp ${parseFloat(
                        item.quantity * item.price
                      ).toLocaleString()}`}</Amount>
                    </Items>
                  ))}
                <Total>
                  <DetailPrice>
                    <TotalItems>
                      <strong>
                        Total Harga{" "}
                        {orderItems &&
                          orderItems.reduce(
                            (quantity, item) =>
                              quantity + Number(item.quantity),
                            0
                          )}{" "}
                        Barang
                      </strong>
                      <strong>{`Rp ${parseFloat(
                        order && order.totalProduct
                      ).toLocaleString()}`}</strong>
                    </TotalItems>
                    <Shipment>
                      <p>
                        Total Ongkir{" "}
                        {orderItems &&
                          orderItems.reduce(
                            (acc, item) =>
                              acc + Number(item.weight) * item.quantity,
                            0
                          )}{" "}
                        gr
                      </p>
                      <p>{`Rp ${parseFloat(
                        order && order.shipCost
                      ).toLocaleString()}`}</p>
                    </Shipment>
                    <TotalAmount>
                      <strong>Total Tagihan</strong>
                      <strong>{`Rp ${parseFloat(
                        order && order.amount
                      ).toLocaleString()}`}</strong>
                    </TotalAmount>
                  </DetailPrice>
                </Total>
              </ModalBody>
              <Print>
                <Btn onClick={handlePrint}>Print / Download</Btn>
              </Print>
            </ModalWrapper>
          </animated.div>
          <ToastContainer autoClose={3000} />
        </Background>
      ) : null}
    </>
  );
};
