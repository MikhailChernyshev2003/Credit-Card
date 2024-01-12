import { config } from "@react-spring/web";
import React, {useState} from "react";
import './App.css';
import { CreditCardBackSide } from "./components/creditCardBackSide/creditCardBackSide";
import { CreditCardFrontSide } from "./components/creditCardFrontSide/creditCardFrontSide";
import {useSpring, animated} from "@react-spring/web";
import { styled } from "styled-components";
import { calculateCoefficientFromWidth } from "./utils/calculateCoefficientFromWidth";
import { cardHeight, cardWidth } from "./utils/constants";

const FlipButton = styled.button`
  margin-top: 60vh;
  background: transparent;
  border: 0;
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(28)});;
  cursor: pointer;
`

function App() {

  const [flipped, setFlipped] = useState(false);

  const {opacity, transform} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 700, friction: 80 },
  });

  return (
    <div className="App">
      <animated.div style={{
        opacity: opacity.interpolate(o => 1 - o),
        transform
      }} className={"credit-card__wrapper"}>
        <CreditCardFrontSide/>
      </animated.div>
      <animated.div style={{
        opacity,
        transform: transform.interpolate(t => `${t} rotateX(180deg)`)
      }} className={"credit-card__wrapper"}>
        <CreditCardBackSide/>
      </animated.div>
      <FlipButton onClick={() => setFlipped(!flipped)}>
        Перевернуть карту
      </FlipButton>
    </div>
  );
}

export default App;
