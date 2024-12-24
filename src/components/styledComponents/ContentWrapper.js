import styled from "styled-components";

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export default function ContentWrapper({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
