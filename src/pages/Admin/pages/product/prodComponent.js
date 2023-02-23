import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
`;

export const Wrapper = styled.div`
  flex: 6;
  margin-right: 5px;
  margin-top: 5px;
`;

export const Block1 = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Block2 = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Function = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const Input = styled.input`
  margin-left: 1rem;
  height: 30px;
  width: 50%;
  border: none;
  border-bottom: 1px solid rgb(230, 227, 227);
  font-family: "Nunito", sans-serif;

  &:focus {
    outline: none;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Table = styled.div`
  margin-top: 5px;
  height: 93%;
  width: 100%;
`;

export const ProdListItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ProdListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 5px;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
