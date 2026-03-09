import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(135deg, #1a1a1a 0%, #323334 50%, #1a1a1a 100%);
    color: white;
    min-height: 100vh;
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(26, 26, 26, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(255, 67, 67, 0.3);

    &:hover {
      background: linear-gradient(135deg, #f22f2f 0%, #ff4343 100%);
      box-shadow: 0 0 15px rgba(255, 67, 67, 0.5);
    }
  }

  /* Smooth transitions for interactive elements */
  button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  input,
  textarea,
  select {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Selection styling */
  ::selection {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    color: white;
  }

  ::-moz-selection {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    color: white;
  }

  /* Link styling */
  a {
    text-decoration: none;
    transition: all 0.3s ease;

    &:active {
      opacity: 0.8;
    }
  }

  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const colors = {
  primary: "#ff4343",
  primaryHover: "#f22f2f",
  background: "#323334",
  backgroundLight: "#1a1a1a",
  text: "#ffffff",
  textSecondary: "#cccccc",
  border: "#ff4343",
  success: "#4CAF50",
  warning: "#ff9800",
  error: "#ff4343",
};
