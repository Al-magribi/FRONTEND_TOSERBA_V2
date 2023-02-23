import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import {
  Arrows,
  Button,
  Container,
  Desc,
  Img,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./SliderComponents";
import { sliderItems } from "../../data ";

const Slider = () => {
  const [slider, setSlider] = useState();

  const handleSlider = (direction) => {
    if (direction === "left") {
      setSlider(slider > 0 ? slider - 1 : 3);
    } else {
      setSlider(slider < 3 ? slider + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrows direction="left" onClick={() => handleSlider("left")}>
        <FaIcons.FaArrowLeft />
      </Arrows>
      <Wrapper slideIndex={slider}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Img src={item.img} alt={item.id} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button to="/products">Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrows direction="right" onClick={() => handleSlider("right")}>
        <FaIcons.FaArrowRight />
      </Arrows>
    </Container>
  );
};

export default Slider;
