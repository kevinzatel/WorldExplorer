import React, { FC } from "react";
import { Logo, Nav, Title, RightItems, LogoAndTitle } from "./NavBarStyles";
import { CgProfile } from "react-icons/cg";
import worldIcon from "../../images/world-icon.png";

export const NAV_BAR_HEIGHT: number = 40;

const NavBar: FC = (props, ref) => (
  <Nav height={NAV_BAR_HEIGHT}>
    <LogoAndTitle>
      <Logo height={NAV_BAR_HEIGHT} src={worldIcon} />
      <Title>World Explorer</Title>
    </LogoAndTitle>
    <RightItems>
      <CgProfile size="25" color="grey" cursor="pointer" />
    </RightItems>
  </Nav>
);

export default NavBar;
