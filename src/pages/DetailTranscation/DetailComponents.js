import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { mobile } from "../../component/responsive";

export const Background = styled.div`
  font-size: smaller;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  ${mobile({ width: "400px" })}
`;

export const ModalBody = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const Header = styled.div`
  height: 60px;
  width: 100%;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.p`
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Right = styled.div`
  height: 100%;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const DetailUser = styled.div`
  margin: 10px 10px;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const Seller = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Buyer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const Row = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Items = styled.div`
  border-bottom: 1px dotted black;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 95%;
  display: flex;
`;

export const NameProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
`;

export const Qty = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 10%;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 20%;
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 20%;
`;

export const Total = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 95%;
`;

export const DetailPrice = styled.div`
  width: 50%;
`;

export const TotalItems = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Shipment = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalAmount = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Payment = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Print = styled.div`
  height: 40px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 2rem;
`;

export const Btn = styled.button`
  padding: 10px 15px;
  margin-right: 15px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #03ac0e;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #42855b;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
