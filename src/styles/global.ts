import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --purple-background: #3a0ca3;
    --black-background: #23231A;
    --input-background: #e7e9ee;
    --red: #e52e4d;
    --blue: #4cabe6;
    --green: #33CC95;
    --white: #F0F2F5;

    --purple-light: #8338ec;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Dekstop)

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 2000ms;
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.3rem;
  }

  .close-button-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

  }
  
` 