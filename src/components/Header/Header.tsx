import React, { FC } from "react";
import worldIcon from "../../images/world-icon.png";
import { WELCOME_MESSAGE } from "../../messages/messages";
import { HeaderIcon, Text } from "./HeaderStyles";

const Header: FC = () => {
  return (
    <>
      <HeaderIcon data-testid="header-icon" src={worldIcon} />
      <Text data-testid="header-text">{WELCOME_MESSAGE}</Text>
    </>
  );
};

export default Header;
