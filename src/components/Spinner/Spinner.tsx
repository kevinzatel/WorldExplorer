import React, { FC } from "react";
import { StyledSpinner, Text } from "./SpinnerStyles";

interface IProps {
  text?: String;
}

const Spinner: FC<IProps> = ({ text }) => (
  <>
    <StyledSpinner viewBox="0 0 50 50" data-testid="spinner">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
    <Text data-testid="spinner-text">{text}</Text>
  </>
);

export default Spinner;
