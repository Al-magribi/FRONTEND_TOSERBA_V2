import React from "react";
import {
  Bottom,
  Center,
  Container,
  Icon,
  IconRoute,
  Image,
  Info,
  ProdInfo,
  ProdName,
  Top,
} from "./ProductComponents";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";
import { toast, ToastContainer } from "react-toastify";

const ProductsData = ({ item }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const toCart = () => {
    if (user) {
      dispatch(addToCart(item._id, 1));
    } else {
      toast.error("Login terlebih dahulu");
    }
  };

  const shortenString = (sentence) => {
    if (typeof sentence !== "string") {
      return "Input is not a string";
    }
    if (sentence.length > 28) {
      return sentence.substring(0, 23) + "...";
    }
    return sentence;
  };

  return (
    <Container key={item._id}>
      <ProdInfo>
        <Top>
          <ProdName>{shortenString(item.name)}</ProdName>
        </Top>
        <Center>
          <Image src={item.img} alt={item.id} />
        </Center>
        <Bottom>{`Rp ${parseFloat(item.price).toLocaleString()}`}</Bottom>
      </ProdInfo>
      <Info>
        <Icon>
          <HiIcons.HiOutlineShoppingCart onClick={toCart} />
        </Icon>
        <IconRoute to={`/detail/${item._id}`}>
          <BiIcons.BiSearch />
        </IconRoute>
        <Icon>
          <FaIcons.FaHeart style={{ color: "red" }} />
        </Icon>
      </Info>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default ProductsData;
