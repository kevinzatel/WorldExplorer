import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from "../Header";
import { WELCOME_MESSAGE } from "../../../messages/messages";

afterEach(cleanup);

it("renders icon correctly", () => {
  const { getByTestId } = render(<Header />);
  const icon = getByTestId("header-icon");
  expect(icon).toBeInTheDocument();
});

it("renders text correctly", () => {
  const { getByTestId } = render(<Header />);
  const text = getByTestId("header-text");
  expect(text).toBeInTheDocument();
  expect(text).toHaveTextContent(WELCOME_MESSAGE);
});
