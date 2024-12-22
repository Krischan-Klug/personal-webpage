import styled from "styled-components";

const StyledTextWrapper = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TextWrapper({ children }) {
  return <StyledTextWrapper>{children}</StyledTextWrapper>;
}
