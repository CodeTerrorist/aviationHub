import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Link } from "react-router-dom";

const LinksContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any; isActive?: boolean }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-bold
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  a {
    ${tw`text-black`};
  }

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
      `};
    `};
`;

export function NavItems() {
  const eMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (eMobile) {
    return (
      <Menu right styles={menuStyles}>
        <LinksContainer>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Aeronaves</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Mass & Balance</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Metereologia</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Briefing de voo</a>
          </NavItem>
        </LinksContainer>
      </Menu>
    );
  }

  return (
    <LinksContainer>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/Aeronaves">Aeronaves</Link>
      </NavItem>
      <NavItem>
        <Link to="/MassBalance">Mass &amp; Balance</Link>
      </NavItem>
      <NavItem>
        <Link to="/Metereologia">Metereologia</Link>
      </NavItem>
    </LinksContainer>
  );
}
