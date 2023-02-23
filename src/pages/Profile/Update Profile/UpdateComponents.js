import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  font-size: smaller;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalWrapper = styled.div`
  top: 0;
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  position: relative;
  z-index: 99;
  border-radius: 10px;
`;

export const ModalBody = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color: black;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #000;
  transition: all 0.5s ease-in-out;
`;

export const Input = styled.input`
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  height: 20px;
  padding: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #111;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled.button`
  background-color: #6eccaf;
  border: none;
  color: white;
  width: 30%;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: white;
    color: #000;
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
  z-index: 99;
`;
