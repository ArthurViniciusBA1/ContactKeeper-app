import { styled } from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 1rem;

  h1 {
    cursor: pointer;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;

    height: 10rem;

    background-color: var(--blue-9);
  }

  > header > button {
    height: 100%;
    width: 50px;
    background-color: transparent;
    border: none;
  }

  path {
    height: 30px;
  }

  > main {
    padding: 1rem;
  }
`;

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 80vh;
  overflow-y: auto;
`;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: center;

  height: 12rem;
  padding: 1rem;
  gap: 2rem;

  background-color: var(--gray-8);

  border-radius: 0.5rem;

  h3 {
    font-size: 2.75rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 30rem;

    cursor: url("./pencil.png"), default;
  }

  .contact-info > div {
    display: flex;
    gap: 1.25rem;
    width: 100%;
  }

  .contact-actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  button {
    background-color: var(--gray-6);
    width: 5rem;
    border-radius: 5rem;
    height: 100%;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    height: auto;

    .contact-actions {
      flex-direction: row;
      justify-content: space-around;
    }

    button {
      height: 5rem;
      width: 10rem;
    }
  }
`;
