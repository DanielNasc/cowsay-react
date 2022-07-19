import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.5rem;

  /* margin-top: 1.5rem; */

  gap: 0.5rem;

  img {
    width: 3rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;
