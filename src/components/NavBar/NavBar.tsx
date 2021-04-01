import React, { FC } from "react";
import { Logo, Nav, Title, RightItems, LogoAndTitle } from "./NavBarStyles";
import { CgProfile } from "react-icons/cg";
import worldIcon from "../../images/world-icon.png";
import { Link } from "react-router-dom";

export const NAV_BAR_HEIGHT: number = 40;

const NavBar: FC = () => (
  <Nav height={NAV_BAR_HEIGHT}>
    <Link to="/" style={{ textDecoration: "none" }}>
      <LogoAndTitle>
        <Logo height={NAV_BAR_HEIGHT} src={worldIcon} />
        <Title>World Explorer</Title>
      </LogoAndTitle>
    </Link>
    <RightItems>
      <Link to="/profile">
        <CgProfile size="25" color="grey" cursor="pointer" />
      </Link>
    </RightItems>
  </Nav>
);

export default NavBar;
