import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(135deg, #1a1a1a 0%, #323334 50%, #1a1a1a 100%);
    color: white;
    min-height: 100vh;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff4343;
    border-radius: 4px;

    &:hover {
      background: #f22f2f;
    }
  }

  button {
    transition: all 0.3s ease;
  }

  input {
    transition: all 0.3s ease;
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
};
