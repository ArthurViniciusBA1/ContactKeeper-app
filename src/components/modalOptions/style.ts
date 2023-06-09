import { styled } from "styled-components";

export const StyledModalEditContact = styled.div`
  background-color: var(--gray-8);
  padding: 2rem;
  border-radius: 0.5rem;

  > form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input {
    color: var(--gray-1);
    border-color: var(--gray-1);
  }

  small {
    color: red;
    font-size: 0.8rem;
  }
`;
