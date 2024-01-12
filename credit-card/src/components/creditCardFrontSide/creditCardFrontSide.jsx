import React from "react";
import { styled } from "styled-components";
import "../../App.css";
import MasterCardLogo from "../../statiс/svg/mastercard-logo.svg";
import { cardHeight, cardWidth } from "../../utils/constants";
import { calculateCoefficientFromWidth } from "../../utils/calculateCoefficientFromWidth";
import { calculateCoefficientFromHeight } from "../../utils/calculateCoefficientFromHeight";

const FrontSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const FrontSideRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const FrontSideBalanceText = styled.div`
  opacity: 0.54;
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(14)});
  font-weight: 500;
  margin-top: calc(${cardHeight} * ${calculateCoefficientFromHeight(5)});
`

const FrontSideBalanceNumber = styled.div`
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(28)});
  font-weight: 500;
`

const FrontSideLogo = styled.img`
  width: calc(${cardWidth} * ${calculateCoefficientFromWidth(45)});
  height: calc(${cardHeight} * ${calculateCoefficientFromHeight(36)});
`

const FrontSideCardInfo= styled.p`
  font-size: calc(${cardWidth} * ${calculateCoefficientFromWidth(14)});
`

export function CreditCardFrontSide(props) {

  return (
    <FrontSideWrapper>
      <FrontSideRowWrapper>
        <div>
          <FrontSideBalanceText>
            Current Balance
          </FrontSideBalanceText>
          <FrontSideBalanceNumber>
            $5,750,20
          </FrontSideBalanceNumber>
        </div>
        <FrontSideLogo className={"front-side__card-logo"} src={MasterCardLogo} alt={"Логотип мастеркард"}/>
      </FrontSideRowWrapper>
      <FrontSideRowWrapper>
        <FrontSideCardInfo>
          5282 3456 7890 1289
        </FrontSideCardInfo>
        <FrontSideCardInfo>
          09/25
        </FrontSideCardInfo>
      </FrontSideRowWrapper>
    </FrontSideWrapper>
  );
}
