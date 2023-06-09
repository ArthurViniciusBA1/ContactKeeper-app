import { styled } from "styled-components";

export const StyledRegister = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100vh;

  background-image: url("./background.png");
  background-size: cover;
  background-repeat: no-repeat;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    gap: 2rem;

    background-color: var(--gray-7);
    border-radius: 0.5rem;

    width: 90%;
    max-width: 500px;
  }

  div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: var(--blue-2);
  }
`;
