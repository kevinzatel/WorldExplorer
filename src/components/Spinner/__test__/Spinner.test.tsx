import React from "react";
import { cleanup, render } from "@testing-library/react";
import Spinner from "../Spinner";

afterEach(cleanup);

it("renders text correctly", () => {
  const { getByTestId } = render(<Spinner />);
  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

it("renders text correctly", () => {
  const { getByTestId } = render(<Spinner />);
  const spinnerText = getByTestId("spinner-text");
  expect(spinnerText).toBeInTheDocument();
});

it("text matches with prop", () => {
  const { getByTestId } = render(<Spinner text="Hello world!" />);
  const spinnerText = getByTestId("spinner-text");
  expect(spinnerText).toHaveTextContent(/^Hello world!$/);
});
