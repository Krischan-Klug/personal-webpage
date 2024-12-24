import styled, { keyframes } from "styled-components";
import useDarkMode from "./useDarkMode";

// Keyframes
const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
//Styling
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const StyledThemeIcon = styled.p`
  position: relative;
  left: 10px;
  bottom: 5px;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    scale: 1.2;
    animation: ${shake} 0.5s ease-in-out;
  }
`;

export default function Footer() {
  const { theme, toggleTheme } = useDarkMode();
  const currentYear = new Date().getFullYear();

  console.log(theme);
  return (
    <StyledFooter>
      <p>KK Software © {currentYear}</p>
      <StyledThemeIcon onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
      </StyledThemeIcon>
    </StyledFooter>
  );
}
