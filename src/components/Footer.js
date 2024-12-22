import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>KK Software © {currentYear}</p>
    </StyledFooter>
  );
}
