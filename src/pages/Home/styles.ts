import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - 4.5rem);

  padding: 1.5rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme["gray-800"]};

  max-width: 32rem;
  height: 32rem;

  padding: 2rem;

  flex: 1;

  gap: 1rem;

  label {
    margin: 0;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;

    border: none;
    border-radius: 0.5rem;

    background: ${({ theme }) => theme["gray-700"]};
    color: ${({ theme }) => theme["gray-100"]};
  }

  button {
    background: ${({ theme }) => theme["pink-600"]};
    color: ${({ theme }) => theme["gray-100"]};

    /* max-width: 10rem;
    height: 2.5rem; */
    width: 35%;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      filter: brightness(1.1);
      box-shadow: 0 0 0.75rem ${({ theme }) => theme["pink-600"]};
    }
  }
`;
