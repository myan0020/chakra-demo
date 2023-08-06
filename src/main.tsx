import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ColorModeScript } from "@chakra-ui/react";
import { chakraCustomTheme as theme } from './chakra-ui.custom-theme.ts'

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  const nonce = Math.random().toString(36).substring(2); // Generate a random nonce value
  root.render(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} nonce={nonce} />
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("The root container not found !")
}

