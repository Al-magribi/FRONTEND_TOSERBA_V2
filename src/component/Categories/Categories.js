import React from "react";
import { Button, Image, Info, Title, Wrapper } from "./CategoryComponents";

const CategoriesItems = ({ item }) => {
  return (
    <Wrapper>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button to={`/products/${item.page}`}>GRAB IT</Button>
      </Info>
    </Wrapper>
  );
};

export default CategoriesItems;
