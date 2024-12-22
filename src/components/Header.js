import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <p>LOGO</p>
      </div>
      <MenuWrapper>
        <p>About Me</p>
        <p>Projects</p>
        <p>Menu</p>
      </MenuWrapper>
    </StyledHeader>
  );
}
