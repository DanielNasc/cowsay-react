import styled from "styled-components";

export const SpeechContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: calc(100vh - 4.5rem);

  padding: 0 2rem;

  gap: 1rem;
`;

export const SpeechContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme["gray-800"]};

  max-width: 32rem;
  padding: 2rem;

  gap: 1rem;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    /* break word only when it is necessary */
    word-break: break-word;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["pink-600"]};
    font-size: 1.35rem;
  }
`;

export const WhyDoYouPutTheseParams = styled.div`
  background: ${({ theme }) => theme["gray-600"]};

  margin-top: 0.5rem;
  text-align: left;
  padding: 0.75rem;

  p {
    word-break: break-all;
  }
`;
