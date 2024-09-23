import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProviderComponent from "./context/context";

// Get the root element from the DOM
const container = document.getElementById("root");
// Create a root using createRoot method
const root = createRoot(container);

// Render the app within the context provider
root.render(
  <ContextProviderComponent>
    <App />
  </ContextProviderComponent>
);
