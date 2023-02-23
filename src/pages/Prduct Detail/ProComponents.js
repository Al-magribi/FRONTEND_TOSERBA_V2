import styled from "styled-components";
import { mobile, tablet } from "../../component/responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${tablet({
    flexDirection: "column",
  })}

  ${mobile({
    flexDirection: "column",
  })}
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ height: "300px", width: "auto" })}

  ${mobile({ height: "100px", width: "auto" })}
`;

export const Image = styled.img`
  height: 90%;
  width: 90%;
  transition: all 0.3s ease-in-out;
  object-fit: contain;

  &:hover {
    transform: scale(1.2);
  }

  ${tablet({ height: "350px", width: "350px" })}
`;

export const InfoContainer = styled.div`
  flex: 1;

  ${tablet({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Ratings = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const Stars = styled.div`
  display: flex;
`;

export const Star = styled.div`
  width: 20px;
  height: 20px;
  background-color: yellow;
  border-radius: 50%;
  margin: 5px;
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
`;

export const Price = styled.h3`
  margin: 10px 0px;
`;

export const Desc = styled.div`
  ${tablet({ margin: "20px 10px" })}

  ${mobile({ margin: "20px 10px" })}
`;

export const NoteContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 350px;
  border: 1px solid #5fd068;
  border-radius: 10px;
`;

export const NoteTitle = styled.h3`
  margin: 20px 15px;
`;

export const StockContainer = styled.div`
  align-items: center;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
`;

export const StockCounter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
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

export const Stock = styled.p`
  flex: 1;
`;

export const SubContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Subtotal = styled.p`
  flex: 1;
`;

export const TotalPrice = styled.p`
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Button = styled.button`
  background-color: #03ac0e;
  color: #fff;
  width: 90%;
  padding: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #42855b;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 75%;
  margin: 2rem 5rem;
`;

export const UserName = styled.h4``;

export const Rating = styled.div``;

export const Message = styled.p``;
