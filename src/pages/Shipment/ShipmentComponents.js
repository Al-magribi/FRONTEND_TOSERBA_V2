import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, small, tablet } from "../../component/responsive";

export const Container = styled.div`
  height: max-content;
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #fff;
  -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
`;

export const Brand = styled(Link)`
  margin-left: 4rem;
  font-size: 2rem;
  color: #03ac0e;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const CheckOut = styled.div`
  height: auto;
  position: relative;
  margin: 2rem 2rem;
`;

export const ShipmentContainer = styled.div`
  margin-top: 1rem;
`;

export const ShipInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  ${tablet({ flexDirection: "column" })}
`;

export const Left = styled.div`
  width: 13%;
`;

export const Right = styled.div`
  width: 87%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

export const Adress = styled.div`
  display: flex;
  flex: 1;

  ${tablet({ flexDirection: "column", alignItems: "flex-start" })}
`;

export const ColLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const ColRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProvinceBox = styled.div`
  margin: 10px 0;

  ${tablet({ margin: "1rem 0" })}
`;

export const CitiesBox = styled.div`
  margin: 10px 0;

  ${tablet({ margin: "1rem 0" })}
`;

export const CourierBox = styled.div`
  margin: 10px 0;

  ${tablet({ margin: "1rem 0" })}
`;

export const DetailAdress = styled.div`
  flex: 1;

  ${tablet({ marginLeft: "0", marginTop: "0" })}

  ${mobile({ width: "20rem" })}

  ${small({ width: "20rem" })}
`;

export const EntryAddress = styled.textarea`
  height: 7rem;
  width: 18rem;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  border-radius: 5px;
  height: 30px;
  width: 18rem;

  &:focus {
    outline: none;
  }

  ${tablet({ width: "20rem" })}
`;
export const Option = styled.option``;

export const Input = styled.input`
  height: 37px;
  width: 600px;
  border: none;
  margin-left: 1rem;

  &:focus {
    outline: none;
  }

  ${mobile({ width: "20rem" })}
`;

export const CartContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  display: flex;
  justify-content: start;

  ${tablet({ flexDirection: "column" })}
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
  height: 100px;
  width: 150px;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
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

export const Detail = styled.div`
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
  font-weight: bold;
  margin: 5px 0;
`;

export const StockCounter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: start;
  margin-right: 15px;
  font-style: 10px;
`;

export const Calculate = styled.p`
  font-size: 14px;
  color: gray;
`;

export const SummaryContainer = styled.div`
  width: 35%;
  height: 300px;
  margin-left: 10px;
  display: flex;
  justify-content: center;

  ${tablet({ width: "100%", height: "270px" })}
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

  ${tablet({ width: "100%" })}
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
  margin: 2rem 0;
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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 0;
  width: 100%;
  height: 60px;
`;

export const Note = styled.p`
  font-size: 1rem;
`;
