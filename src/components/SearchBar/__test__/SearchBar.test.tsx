import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import SearchBar from "../SearchBar";

afterEach(cleanup);

it("renders search form correctly", () => {
  const onSearchSubmit = jest.fn();
  const { getByTestId } = render(<SearchBar onSearchSubmit={onSearchSubmit} />);
  const form = getByTestId("search-form");
  expect(form).toBeInTheDocument();
});

it("renders search form correctly", () => {
  const onSearchSubmit = jest.fn();
  const { getByTestId } = render(<SearchBar onSearchSubmit={onSearchSubmit} />);
  const form = getByTestId("search-form");
  expect(form).toBeInTheDocument();
});
