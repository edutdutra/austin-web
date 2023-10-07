import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px;
    }
    
    body {
      background: ${props => props.theme['gray-800']};
      color: ${props => props.theme['black']};
      -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button, span {
      font: 400 1rem Roboto, sans-serif;
    }
`