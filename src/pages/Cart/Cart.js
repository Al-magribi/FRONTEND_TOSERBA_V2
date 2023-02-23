import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import {
  Amount,
  ButtonCounter,
  Buy,
  BuyContainer,
  CartContainer,
  CartDetail,
  Container,
  Counter,
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
  Trash,
} from "./CartComponents";
import * as VscIcons from "react-icons/vsc";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../redux/action/cartAction";
import MetaData from "../MetaData";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // tombol -
  const decrease = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty < 0) {
      return;
    } else {
      dispatch(addToCart(id, newQty));
    }
  };

  // tombol +
  const increase = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) {
      return;
    } else {
      dispatch(addToCart(id, newQty));
    }
  };

  const totalBarang = items.reduce(
    (quantity, item) => quantity + Number(item.quantity),
    0
  );

  const totalHarga = items.reduce(
    (quantity, item) => quantity + item.quantity * item.price,
    0
  );

  const removeHandler = (id) => {
    dispatch(removeItem(id));
  };

  const buyHandler = () => {
    navigate("/cart/shipment");
  };
  return (
    <Container>
      <MetaData title={"Keranjang"} />
      <Header />
      <CartContainer>
        <CartDetail>
          <Item>
            {items.map((item) => (
              <ItemDetail key={item.product}>
                <ImageContainer>
                  <Image src={item.img} alt="fruits" />
                </ImageContainer>
                <Detail>
                  <Name to={`/detail/${item.product}`}>{item.name}</Name>
                  <Price>{`Rp ${parseFloat(
                    item.price
                  ).toLocaleString()}`}</Price>
                  <StockCounter>
                    <Counter>
                      <ButtonCounter
                        onClick={() => decrease(item.product, item.quantity)}
                      >
                        -
                      </ButtonCounter>
                      <Amount
                        type="number"
                        className="count"
                        value={item.quantity}
                        readOnly
                      />
                      <ButtonCounter
                        onClick={() =>
                          increase(item.product, item.quantity, item.stock)
                        }
                      >
                        +
                      </ButtonCounter>
                    </Counter>
                    <Trash onClick={() => removeHandler(item.product)}>
                      <IconContext.Provider value={{ size: 25 }}>
                        <VscIcons.VscTrash />
                      </IconContext.Provider>
                    </Trash>
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
                  :{`Rp ${parseFloat(totalHarga).toLocaleString()}`}
                </DescPrice>
              </Total>
              <TotalPrice>
                <Desc>
                  <strong>Total Harga</strong>
                </Desc>
                <DescPrice>
                  :
                  <strong>{`Rp ${parseFloat(
                    totalHarga
                  ).toLocaleString()}`}</strong>
                </DescPrice>
              </TotalPrice>
              <BuyContainer>
                <Buy onClick={buyHandler}>Beli (1)</Buy>
              </BuyContainer>
            </Summary>
          </SummaryContainer>
        </CartDetail>
      </CartContainer>
      <Footer />
    </Container>
  );
};

export default Cart;
