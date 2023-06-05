import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --green-9: #1b5e20;
    --green-8: #2e7d32;
    --green-7: #388e3c;
    --green-6: #43a047;
    --green-5: #4caf50;
    --green-4: #66bb6a;
    --green-3: #81c784;
    --green-2: #a5d6a7;
    --green-1: #c8e6c9;

    --gray-9: #151515;
    --gray-8: #252525;
    --gray-7: #616161;
    --gray-6: #757575;
    --gray-5: #9e9e9e;
    --gray-4: #bdbdbd;
    --gray-3: #e0e0e0;
    --gray-2: #eeeeee;
    --gray-1: #f5f5f5;

    font-size: 60%;   
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body,html{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: var(--gray-9);
    color: var(--gray-3);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
