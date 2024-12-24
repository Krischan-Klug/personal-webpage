import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25vw;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  backdrop-filter: blur(32px);
  opacity: 0.98;
  border-bottom: 1px solid transparent;
  height: 50px;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;

  &:hover {
    color: gray;
    scale: 1.02;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.p`
  font-size: 20px;

  &:hover {
    color: gray;
    scale: 1.02;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  backdrop-filter: blur(8px);
  overflow: hidden;
  max-height: ${({ open }) => (open ? "100vh" : "0")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: max-height 1.5s ease, opacity 0.3s ease;
  margin: 0;
  padding: 0;
`;

const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  transition: opacity 0.3s ease;
  z-index: 99;
`;

const DropdownLink = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  text-align: center;
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <Logo onClick={() => setMenuOpen(false)}>KK Software © </Logo>
        </Link>
        <MenuWrapper>
          <Link href="/about">
            <StyledLink>About Me</StyledLink>
          </Link>
          <Link href="/projects">
            <StyledLink>Projects</StyledLink>
          </Link>
          <Link href="/inquiry">
            <StyledLink>Inquiry</StyledLink>
          </Link>
        </MenuWrapper>
        <BurgerMenu onClick={toggleMenu}>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </BurgerMenu>
      </StyledHeader>

      {menuOpen && <BackgroundBlur onClick={toggleMenu} />}

      <DropdownMenu open={menuOpen}>
        <Link onClick={toggleMenu} href="/about">
          <DropdownLink>About Me</DropdownLink>
        </Link>
        <Link onClick={toggleMenu} href="/projects">
          <DropdownLink>Projects</DropdownLink>
        </Link>
        <Link onClick={toggleMenu} href="/inquiry">
          <DropdownLink>Inquiry</DropdownLink>
        </Link>
      </DropdownMenu>
    </>
  );
}
