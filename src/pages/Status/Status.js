import React from "react";
import {
  Back,
  Brand,
  Container,
  Desc,
  Footer,
  Navbar,
  Note,
  StatusBox,
} from "./StatusComponents";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
import MetaData from "../MetaData";

const Status = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <MetaData title={"Status pesanan"} />
      <Navbar>
        <Brand to="/">TOSERBA</Brand>
      </Navbar>
      <StatusBox>
        <IconContext.Provider value={{ size: 200, color: "#03ac0e" }}>
          <BsIcons.BsCheckCircle />
        </IconContext.Provider>
        <Desc>
          <p>Pesanan Berhasil dibuat</p>
          <Back to="/">
            <BsIcons.BsFillCaretLeftFill />
            Kembali
          </Back>
        </Desc>
      </StatusBox>
      <Footer>
        <Note>&copy; TOSERBA {year}</Note>
      </Footer>
    </Container>
  );
};

export default Status;
