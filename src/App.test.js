import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

//App.js is mounted to DOM
test("renders App without crashing", () => {
  render(<App />);
});