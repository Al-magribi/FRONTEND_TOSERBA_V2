import React, { useEffect, useState } from "react";
import Announce from "../../component/Announcement";
import Footer from "../../component/Footer";
import Navbar from "../../component/Header";
import { getProductDetail } from "../../redux/action/productAction";
import {
  Amount,
  Button,
  ButtonContainer,
  ButtonCounter,
  Card,
  Container,
  Counter,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Message,
  NoteContainer,
  NoteTitle,
  Price,
  Rating,
  ReviewContainer,
  Stock,
  StockContainer,
  StockCounter,
  SubContainer,
  Subtotal,
  Title,
  TotalPrice,
  UserName,
  Wrapper,
} from "./ProComponents";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/action/cartAction";
import MetaData from "../MetaData";

// HTML
const createMarkup = (theExactHtmlWithTag) => {
  return { __html: theExactHtmlWithTag };
};

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { product } = useSelector((state) => state.productDetail);

  const [quantity, setQuantity] = useState(1);

  // tombol -
  const decrease = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber <= 1) {
      return;
    } else {
      const qty = count.valueAsNumber - 1;
      setQuantity(qty);
    }
  };

  // tombol +
  const increase = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber >= product.stock) {
      return;
    } else {
      const qty = count.valueAsNumber + 1;
      setQuantity(qty);
    }
  };

  const subTotal = quantity * product.price;

  const toCart = () => {
    dispatch(addToCart(params.id, quantity));
  };

  useEffect(() => {
    dispatch(getProductDetail(params.id));
  }, [dispatch, params.id]);

  return (
    <Container>
      <MetaData title={product.name} />
      <Navbar />
      <Announce />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.name} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>

          <Price>{`Rp ${parseFloat(product.price).toLocaleString()}`}</Price>
          <Desc>
            <div dangerouslySetInnerHTML={createMarkup(product.desc)} />
          </Desc>
        </InfoContainer>
        <NoteContainer>
          <Card>
            <NoteTitle>Atur Jumlah</NoteTitle>
            <StockContainer>
              <StockCounter>
                <Counter>
                  <ButtonCounter onClick={decrease}>-</ButtonCounter>
                  <Amount
                    type="number"
                    className="count"
                    value={quantity}
                    readOnly
                  />
                  <ButtonCounter onClick={increase}>+</ButtonCounter>
                </Counter>
              </StockCounter>
              <Stock>Stok : {product.stock}</Stock>
            </StockContainer>
            <SubContainer>
              <Subtotal>Subtotal</Subtotal>
              <TotalPrice>
                : {`Rp ${parseFloat(subTotal).toLocaleString()}`}
              </TotalPrice>
            </SubContainer>
            <ButtonContainer>
              <Button onClick={toCart}>+ Keranjang</Button>
            </ButtonContainer>
          </Card>
        </NoteContainer>
      </Wrapper>

      <ReviewContainer>
        <UserName>John Doe</UserName>
        <Rating>4</Rating>
        <Message>This is awesome</Message>
      </ReviewContainer>
      <Footer />
    </Container>
  );
};

export default ProductDetail;
