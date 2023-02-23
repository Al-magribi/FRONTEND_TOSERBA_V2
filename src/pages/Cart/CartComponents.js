import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { tablet } from "../../component/responsive";

export const Container = styled.div``;

export const CartContainer = styled.div`
  height: 45vh;
  padding: 3% 10%;
`;

export const CartDetail = styled.div`
  display: flex;
  justify-content: start;

  ${tablet({ display: "flex", flexDirection: "column" })}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  width: 65%;

  ${tablet({ width: "100%" })}
`;

export const ItemDetail = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
`;

export const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
  margin-left: 15px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 15px;
  width: 100%;
`;
export const Name = styled(LinkR)`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

export const StockCounter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
  margin-right: 15px;
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ButtonCounter = styled.button`
  width: 30px;
  height: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #03ac0e;
`;

export const Amount = styled.input`
  width: 30px;
  height: 25px;
  text-align: center;

  border: none;
`;

export const Trash = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: red;
`;

export const SummaryContainer = styled.div`
  width: 35%;
  margin-left: 10px;
  display: flex;
  justify-content: center;

  ${tablet({ width: "100%" })}
`;

export const Summary = styled.div`
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  width: 80%;
  height: auto;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);

  ${tablet({ width: "100%", height: "60%" })}
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 15px;
`;

export const Total = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-left: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid whitesmoke;
`;

export const Desc = styled.p`
  flex: 1;
`;

export const DescPrice = styled.p`
  flex: 1;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 5px;
`;

export const BuyContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Buy = styled.button`
  margin: 1rem 0;
  width: 70%;
  padding: 7px 0;
  border-radius: 5px;
  background-color: #03ac0e;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  color: white;

  &:hover {
    background-color: #42855b;
  }
`;
