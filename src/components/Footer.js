import styled from "styled-components";
import useDarkMode from "./useDarkMode";

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
