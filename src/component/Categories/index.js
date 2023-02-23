import React from "react";
import { categories } from "../../data ";
import CategoriesItems from "./Categories";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${tablet({ flexDirection: "column" })}

  ${mobile({ flexDirection: "column" })}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Category;
