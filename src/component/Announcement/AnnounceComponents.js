import styled from "styled-components";
import { small } from "../responsive";

export const Container = styled.div`
  height: 30px;
  background-color: #f3f4f5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  font-weight: bold;
  color: gray;
  letter-spacing: 1.5px;

  ${small({ fontSize: "10px" })}
`;
