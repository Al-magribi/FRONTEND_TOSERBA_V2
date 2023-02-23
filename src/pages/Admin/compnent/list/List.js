import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  AmountContainer,
  BlockWrapper,
  Detail,
  Icons,
  Label,
  Left,
  LinkR,
  Money,
  Name,
  Number,
  Order,
  OrderContainer,
  Percent,
  Product,
  ProductContainer,
  Right,
  User,
  UserContainer,
} from "./listComponent";

const Rp = (price) => {
  return new Intl.NumberFormat("id-Id", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);
};

const List = () => {
  const { loading: ordersLoading, orders, totalAmount } = useSelector(
    (state) => state.allOrders
  );
  const { loading, users } = useSelector((state) => state.users);
  const { loading: productsLoading, products } = useSelector(
    (state) => state.products
  );

  const totalUser = users.length;
  const totalOrder = orders && orders.length;
  const totalProduct = products && products.length;

  return (
    <Fragment>
      <UserContainer>
        <BlockWrapper>
          <Label>
            <Left>
              <Name>USER</Name>
            </Left>
            <Right>
              <Percent>5%</Percent>
            </Right>
          </Label>
          <Number>{loading ? `....` : totalUser}</Number>
          <Detail>
            <Left>
              <LinkR to="/admin/users">Lihat User</LinkR>
            </Left>
            <Right>
              <Icons>
                <User />
              </Icons>
            </Right>
          </Detail>
        </BlockWrapper>
      </UserContainer>
      <ProductContainer>
        <BlockWrapper>
          <Label>
            <Left>
              <Name>PRODUK</Name>
            </Left>
            <Right>
              <Percent>5%</Percent>
            </Right>
          </Label>
          <Number>{productsLoading ? "..." : totalProduct}</Number>
          <Detail>
            <Left>
              <LinkR to="/admin/products">Lihat Produk</LinkR>
            </Left>
            <Right>
              <Icons>
                <Product />
              </Icons>
            </Right>
          </Detail>
        </BlockWrapper>
      </ProductContainer>
      <OrderContainer>
        <BlockWrapper>
          <Label>
            <Left>
              <Name>PESANAN</Name>
            </Left>
            <Right>
              <Percent>5%</Percent>
            </Right>
          </Label>
          <Number>{ordersLoading ? "..." : totalOrder}</Number>
          <Detail>
            <Left>
              <LinkR to="/admin/orders">Lihat Pesanan</LinkR>
            </Left>
            <Right>
              <Icons>
                <Order />
              </Icons>
            </Right>
          </Detail>
        </BlockWrapper>
      </OrderContainer>
      <AmountContainer>
        <BlockWrapper>
          <Label>
            <Left>
              <Name>PENDAPATAN</Name>
            </Left>
            <Right>
              <Percent>5%</Percent>
            </Right>
          </Label>
          <Number>{loading ? "..." : Rp(totalAmount)}</Number>
          <Detail>
            <Left>
              <LinkR>Lihat Transaksi</LinkR>
            </Left>
            <Right>
              <Icons>
                <Money />
              </Icons>
            </Right>
          </Detail>
        </BlockWrapper>
      </AmountContainer>
    </Fragment>
  );
};

export default List;
