import React, { useEffect, useState } from "react";
import "../../App.css";
import { styled } from "styled-components";
import BackSideLogoImage from "../../statiс/svg/back-side-logo.svg";
import ChipImage from "../../statiс/svg/chip.svg";
import { cardHeight, cardWidth } from "../../utils/constants";
import { calculateCoefficientFromWidth } from "../../utils/calculateCoefficientFromWidth";
import { calculateCoefficientFromHeight } from "../../utils/calculateCoefficientFromHeight";

const BackSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const BackSideLogo = styled.img`
  width: calc(${cardWidth} * ${calculateCoefficientFromWidth(45)});
`

const BackSideInfoWrapper = styled.div`
  display: flex;
  margin-top: calc(${cardHeight} * ${calculateCoefficientFromHeight(5)});
`

const BackSideInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: calc(${cardWidth} * ${calculateCoefficientFromWidth(25)});
`

const BackSideInfoText = styled.div`
  opacity: 0.5;
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(12)});
  font-weight: 500;
`

const BackSideInfoNumber = styled.div`
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(11)});
  font-weight: 500;
  margin-top: calc(${cardHeight} * ${calculateCoefficientFromHeight(12)});
`

const BackSideInfoCVV = styled.input`
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(11)});
  font-weight: 500;
  margin-top: calc(${cardHeight} * ${calculateCoefficientFromHeight(12)});
  border: 0;
  background: transparent;
  color: white;
  outline: none;
  caret-color: transparent;
  &:hover{
    cursor: pointer;
  }
`

const BackSideChip = styled.img`
  width: calc(${cardWidth} * ${calculateCoefficientFromWidth(35)});
`

export function CreditCardBackSide(props) {

  const [cvvVisible, setCvvVisible] = useState(false);
  const [inputType, setInputType] = useState("password")

  useEffect(() => {
    cvvVisible && setInputType("text");
    !cvvVisible && setInputType("password");
  }, [cvvVisible])

  return (
    <BackSideWrapper>
      <BackSideLogo src={BackSideLogoImage}/>
      <BackSideInfoWrapper>
        <BackSideInfoBlock>
          <BackSideInfoText>
            Date
          </BackSideInfoText>
          <BackSideInfoNumber>
            09/25
          </BackSideInfoNumber>
        </BackSideInfoBlock>
        <BackSideInfoBlock>
          <BackSideInfoText>
            CVV
          </BackSideInfoText>
          <BackSideInfoCVV value={"1289"} onClick={() => setCvvVisible(!cvvVisible)} type={inputType}>
          </BackSideInfoCVV>
        </BackSideInfoBlock>
      </BackSideInfoWrapper>
      <BackSideChip src={ChipImage}/>
    </BackSideWrapper>
  );
}
