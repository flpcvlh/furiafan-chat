// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

// Estilos globais da aplicação
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0a0a0a;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Importação da fonte Inter do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  /* Estilos para links */
  a {
    color: #FF5722;
    text-decoration: none;
  }
  
  /* Estilos para botões */
  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    outline: none;
  }
  
  /* Estilos para impedir seleção de texto em elementos interativos */
  button, a {
    user-select: none;
  }
  
  /* Estilos para scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #151515;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #FF5722;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #E64A19;
  }
`;

export default GlobalStyle;