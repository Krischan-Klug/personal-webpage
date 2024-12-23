import styled from "styled-components";

const StyledContentWrapper = styled.div`
  margin-left: 25vw;
  margin-right: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 20vw;
    margin-right: 20vw;
  }
`;

export default function ContentWrapper({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
