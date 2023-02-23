import styled, { css } from "styled-components";
import { mobile, tablet } from "../../component/responsive";

export const Container = styled.div``;

export const TransContainer = styled.div``;

export const Transactions = styled.div`
  margin: 3% 7%;
  height: 30%;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Block = styled.div`
  margin-top: 10px;
  border: 1px dotted #59ce8f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Orders = styled.div`
  border-radius: 5px;
  margin: 1rem 1rem;
  height: auto;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
`;

export const Detail = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${tablet({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  })}
`;

export const Time = styled.div`
  margin-right: 3rem;
`;

export const Status = styled.div`
  margin-right: 3rem;
  display: flex;
`;

export const StatusColor = styled.p`
  margin-left: 5px;
  font-weight: bold;
  width: 10rem;
  /* Style the button based on the "status" prop */
  ${(props) =>
    props.status === "Menunggu Konfirmasi" &&
    css`
      color: red;
    `}
  ${(props) =>
    props.status === "Diproses" &&
    css`
      color: red;
    `}
  ${(props) =>
    props.status === "Dikirim" &&
    css`
      color: orange;
    `}
    ${(props) =>
      props.status === "Diterima" &&
      css`
        color: green;
      `}
`;

export const StatusPayment = styled.p`
  margin-left: 5px;
  font-weight: bold;
  width: 4rem;
  /* Style the button based on the "status" prop */
  ${(props) =>
    props.status === "pending" &&
    css`
      color: red;
    `}
  ${(props) =>
    props.status === "settlement" &&
    css`
      color: green;
    `}
`;

export const Resi = styled.div`
  margin-right: 2rem;
`;

export const Item = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 220px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 4px 4px -1px rgba(0, 0, 0, 0.59);
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 15px;
  width: 100%;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const Total = styled.div`
  display: flex;
  width: 350px;
  justify-content: end;
  margin-right: 0.5rem;

  ${mobile({ display: "none" })}
`;

export const TotalProduct = styled.div`
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const TotalEnd = styled.div`
  display: flex;
  width: 213px;
  justify-content: end;
  margin-right: 0.5rem;
`;

export const Info = styled.div`
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const DetailOrder = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const Completed = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #03ac0e;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #42855b;
  }
`;
