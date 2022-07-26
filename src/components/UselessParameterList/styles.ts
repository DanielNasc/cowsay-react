import styled from "styled-components";

export const UselessParameterListStyles = styled.div``;

export const WhyDoYouPutTheseParams = styled.div`
  background: ${({ theme }) => theme["gray-600"]};

  margin-top: 0.5rem;
  text-align: left;
  padding: 0.75rem;

  p {
    word-break: break-all;
  }
`;
