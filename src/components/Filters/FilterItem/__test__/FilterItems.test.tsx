import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Language } from "../../../../models/languaje";
import FilterItem from "../FilterItem";
import { FilterTypes } from "../../../../models/filterTypesEnum";

afterEach(cleanup);

const languageOptions: Language[] = [
  {
    _id: "1",
    name: "English",
  },
  {
    _id: "2",
    name: "Spanish",
  },
];

it("renders filter item correctly", () => {
  const { getByTestId } = render(
    <FilterItem
      options={languageOptions}
      type={FilterTypes.Language}
      setSelectedFilter={() => {}}
    />
  );
  const filter = getByTestId("filter-item");
  expect(filter).toBeInTheDocument();
});

it("renders the correct amount of options", () => {
  const { getAllByTestId } = render(
    <FilterItem
      options={languageOptions}
      type={FilterTypes.Language}
      setSelectedFilter={() => {}}
    />
  );
  const options = getAllByTestId("filter-option");
  expect(options.length.toString()).toMatch(languageOptions.length.toString());
});

it("checks setSelectedFilter to have been called when option changes", () => {
  const setSelectedFilter = jest.fn();
  const { getByTestId } = render(
    <FilterItem
      options={languageOptions}
      type={FilterTypes.Language}
      setSelectedFilter={setSelectedFilter}
    />
  );
  const filter = getByTestId("filter-item");
  fireEvent.change(filter);
  expect(setSelectedFilter).toHaveBeenCalled();
});
