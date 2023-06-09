import { styled } from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  > button {
    height: 4rem;
  }

  small {
    color: red;
    font-size: 0.8rem;
  }
`;
