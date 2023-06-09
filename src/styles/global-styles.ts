import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --blue-9: #0d47a1;
    --blue-8: #1565c0;
    --blue-7: #1976d2;
    --blue-6: #1e88e5;
    --blue-5: #2196f3;
    --blue-4: #42a5f5;
    --blue-3: #64b5f6;
    --blue-2: #90caf9;
    --blue-1: #bbdefb;


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

  input {
    padding-left:  30px !important; 
  }
`;
