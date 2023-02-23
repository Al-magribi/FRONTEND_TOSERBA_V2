import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {
  Adress,
  Brand,
  CheckOut,
  CitiesBox,
  Container,
  DetailAdress,
  Navbar,
  ProvinceBox,
  ShipInfo,
  ShipmentContainer,
  Buy,
  BuyContainer,
  CartContainer,
  Desc,
  DescPrice,
  Detail,
  Image,
  ImageContainer,
  Item,
  ItemDetail,
  Name,
  Price,
  StockCounter,
  Summary,
  SummaryContainer,
  Title,
  Total,
  TotalPrice,
  Footer,
  Note,
  Select,
  Option,
  CourierBox,
  Calculate,
  Left,
  Right,
  ColLeft,
  ColRight,
  EntryAddress,
  LoadingContainer,
} from "./ShipmentComponents";
import Loading from "../../component/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { createOrder } from "../../redux/action/orderAction";
import { clearCart } from "../../redux/action/cartAction";
import MetaData from "../MetaData";
import { useNavigate } from "react-router-dom";

const year = new Date().getFullYear();

const Shipment = () => {
  const { items } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAdress] = useState("");

  // TODOS => API RAJA ONGKIR BELUM ADA
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityId, setCityId] = useState();
  const [services, setServices] = useState([]);
  const [shipCost, setShipCost] = useState(0);

  // Get All Provinces
  const getProvinces = async () => {
    const data = await fetch("/api/shipment/province");
    const value = await data.json();
    const provinces = value.rajaongkir.results;

    setProvinces(provinces);
  };

  // Get All Cities
  const getProvinceId = async (id) => {
    const data = await fetch(`/api/shipment/city/${id}`);
    const values = await data.json();
    const cities = values.rajaongkir.results;

    setCities(cities.sort());
  };

  const getCityId = (id) => {
    setCityId(id);
  };

  const getServices = async (courier) => {
    const origin = "78";
    const destination = cityId;
    const weight = items.reduce(
      (acc, item) => acc + Number(item.weight) * item.quantity,
      0
    );

    if (
      origin !== "" &&
      destination !== "" &&
      weight !== "" &&
      courier !== ""
    ) {
      const data = await fetch(
        `/api/shipment/cost/${origin}/${destination}/${weight}/${courier}`
      );
      const values = await data.json();
      const estOngkir = values.rajaongkir.results[0].costs;

      setServices(estOngkir);
    }
  };

  const totalBarang = items.reduce(
    (quantity, item) => quantity + Number(item.quantity),
    0
  );

  const totalProduct = items.reduce(
    (quantity, item) => quantity + item.quantity * item.price,
    0
  );

  const amount = Number(totalProduct) + Number(shipCost);

  const order = {
    shipment: {
      user: user && user._id,
      name: user && user.name,
      address: address,
      phone: user && user.phone,
    },
    orderItems: items,
    totalProduct: totalProduct,
    shipCost: shipCost,
    amount: amount,
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (address && shipCost) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      // Creating unique order Id
      const usedOrderIds = new Set();

      const generateOrderId = () => {
        const characters =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let orderId = "";

        do {
          orderId = "";
          for (let i = 0; i < 8; i++) {
            const index = Math.floor(Math.random() * characters.length);
            orderId += characters[index];
          }
        } while (usedOrderIds.has(orderId));

        usedOrderIds.add(orderId);
        return orderId;
      };

      const data = {
        order_id: generateOrderId(),
        payment: amount,
        name: user.name,
        email: user.username,
        phone: user.phone,
      };

      const response = await axios.post(
        "/api/payment/transaction",
        data,
        config
      );
      const token = response.data.token;

      window.snap.pay(token, {
        onSuccess: function(result) {
          order.payment = {
            order_id: result.order_id,
            id: result && result.transaction_id,
            status: result.transaction_status,
          };

          dispatch(createOrder(order));
          dispatch(clearCart(items));

          navigate("/payment/status");
        },
        onPending: function(result) {
          // /* You may add your own implementation here */
          order.payment = {
            order_id: result.order_id,
            id: result && result.transaction_id,
            status: result.transaction_status,
          };

          dispatch(createOrder(order));
          dispatch(clearCart(items));

          navigate("/payment/status");
        },
        onError: function(result) {
          /* You may add your own implementation here */
          toast.error(result);
        },
        onClose: function() {
          /* You may add your own implementation here */
          toast.error("you closed the popup without finishing the payment");
        },
      });
    } else {
      toast.error("Pastikan alamat sudah terisi");
    }
  };

  useEffect(() => {
    getProvinces();

    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-RGHlGALHJ5YF5uma";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute(
      "SB-Mid-client-RGHlGALHJ5YF5uma",
      myMidtransClientKey
    );

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Fragment>
          <MetaData title={"Data Transaksi "} />
          <Navbar>
            <Brand to="/">TOSERBA</Brand>
          </Navbar>
          <CheckOut>
            <h2>Checkout</h2>
            <ShipmentContainer>
              <ShipInfo>
                <Left>
                  <p>
                    <strong>Data Penerima</strong>
                  </p>
                  <br />
                  <div>
                    <p>
                      Nama : <strong>{user.name}</strong>
                    </p>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <p>
                      Phone : <strong>{user && user.phone}</strong>
                    </p>
                  </div>
                </Left>
                <Right>
                  <Adress>
                    <ColLeft>
                      <ProvinceBox>
                        <Select
                          defaultValue=""
                          onChange={(e) => getProvinceId(e.target.value)}
                        >
                          <Option>--Pilih Provinsi--</Option>
                          {provinces.map((data) => (
                            <Option
                              key={data.province_id}
                              value={data.province_id}
                            >
                              {data.province}
                            </Option>
                          ))}
                        </Select>
                      </ProvinceBox>
                      <CitiesBox>
                        <Select
                          defaultValue=""
                          onChange={(e) => getCityId(e.target.value)}
                        >
                          <Option>--Pilih Kota--</Option>
                          {cities.map((data) => (
                            <Option key={data.city_id} value={data.city_id}>
                              {data.type} {data.city_name}
                            </Option>
                          ))}
                        </Select>
                      </CitiesBox>
                      <CitiesBox>
                        <Select
                          defaultValue=""
                          onChange={(e) => console.log(e.target.value)}
                        >
                          <Option>--Pilih Kecamatan--</Option>
                          <Option value={"Kab Bogor"}>Cimandala</Option>
                          <Option value={"Kab Bogor"}>Cibinong</Option>
                          <Option value={"Kab Bogor"}>Cisarua</Option>
                        </Select>
                      </CitiesBox>
                    </ColLeft>
                    <ColRight>
                      <CourierBox>
                        <Select
                          defaultValue=""
                          onChange={(e) => getServices(e.target.value)}
                        >
                          <Option>--Pilih Kurir--</Option>
                          <Option value={"jne"}>JNE</Option>
                          <Option value={"tiki"}>TIKI</Option>
                          <Option value={"pos"}>POS</Option>
                        </Select>
                      </CourierBox>
                      <CourierBox>
                        <Select
                          defaultValue=""
                          onChange={(e) => setShipCost(e.target.value)}
                        >
                          <Option>--Pilih Layanan--</Option>
                          {services.map((data) => (
                            <Option
                              key={data.service}
                              value={data.cost[0].value}
                            >
                              {data.service} Estimasi: {data.cost[0].etd}{" "}
                              Ongkir: Rp {data.cost[0].value}
                            </Option>
                          ))}
                        </Select>
                      </CourierBox>
                    </ColRight>
                  </Adress>
                  <DetailAdress>
                    <EntryAddress
                      placeholder="Masukan Alamat Lengkap"
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </DetailAdress>
                </Right>
              </ShipInfo>
            </ShipmentContainer>
            <CartContainer>
              <Item>
                {items &&
                  items.map((item) => (
                    <ItemDetail key={item.product}>
                      <ImageContainer>
                        <Image src={item.img} alt="fruits" />
                      </ImageContainer>
                      <Detail>
                        <Name>{item.name}</Name>
                        <Price>{`Rp ${parseFloat(
                          item.price
                        ).toLocaleString()}`}</Price>
                        <StockCounter>
                          <Calculate>
                            {item.quantity} Barang x{" "}
                            {`Rp ${parseFloat(item.price).toLocaleString()}`} ={" "}
                            {`Rp ${parseFloat(
                              item.quantity * item.price
                            ).toLocaleString()}`}
                          </Calculate>
                          <p>berat: {item.quantity * item.weight} gr</p>
                        </StockCounter>
                      </Detail>
                    </ItemDetail>
                  ))}
              </Item>
              <SummaryContainer>
                <Summary>
                  <Title>Ringkasan Belanja</Title>
                  <Total>
                    <Desc>Total {totalBarang} Barang</Desc>
                    <DescPrice>
                      : {`Rp ${parseFloat(totalProduct).toLocaleString()}`}
                    </DescPrice>
                  </Total>
                  <Total>
                    <Desc>Ongkir</Desc>
                    <DescPrice>
                      : {`Rp ${parseFloat(shipCost).toLocaleString()}`}
                    </DescPrice>
                  </Total>
                  <TotalPrice>
                    <Desc>
                      <strong>Total Harga</strong>
                    </Desc>
                    <DescPrice>
                      :{" "}
                      <strong>{`Rp ${parseFloat(
                        amount
                      ).toLocaleString()}`}</strong>
                    </DescPrice>
                  </TotalPrice>
                  <BuyContainer>
                    <Buy onClick={paymentHandler}>Selesaikan Pembayaran</Buy>
                  </BuyContainer>
                </Summary>
              </SummaryContainer>
            </CartContainer>
            <ToastContainer autoClose={3000} />
          </CheckOut>
          <Footer>
            <Note>&copy; TOSERBA {year}</Note>
          </Footer>
        </Fragment>
      )}
    </Container>
  );
};

export default Shipment;
