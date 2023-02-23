import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { GoListUnordered } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";

export const UserContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OrderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlockWrapper = styled.div`
  border-radius: 5px;
  height: 85%;
  width: 290px;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Label = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Name = styled.h3`
  color: #b2b2b2;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
`;

export const Percent = styled.h4`
  color: green;
`;

export const Number = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
`;

export const Detail = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  height: 25px;
  width: 25px;
  background-color: #0081c9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled(BiUser)`
  color: #fff;
`;

export const Product = styled(BiShoppingBag)`
  color: #fff;
`;

export const Order = styled(GoListUnordered)`
  color: #fff;
`;
export const Money = styled(GiReceiveMoney)`
  color: #fff;
`;

export const LinkR = styled(Link)`
  color: #000;
`;
