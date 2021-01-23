import React from "react";
import { cleanup, render } from "@testing-library/react";
import { FilterTypes } from "../../../../models/filterTypesEnum";
import { FilterTypeWithOptions } from "../../../../models/filterTypeWithOptions";
import FilterList from "../FilterList";

afterEach(cleanup);

const filterTypeWithOptionsList: FilterTypeWithOptions[] = [
  {
    type: FilterTypes.Language,
    options: [
      {
        _id: 1,
        name: "Enlgish",
      },
      {
        _id: 2,
        name: "Spanish",
      },
    ],
  },
  {
    type: FilterTypes.Currency,
    options: [
      {
        _id: 1,
        name: "Dolar",
      },
      {
        _id: 2,
        name: "Euro",
      },
    ],
  },
];

it("renders filter item correctly", () => {
  const setSelectedFilter = jest.fn();
  const { getAllByTestId } = render(
    <FilterList
      filterTypeWithOptionsList={filterTypeWithOptionsList}
      setSelectedFilter={setSelectedFilter}
    />
  );
  const filters = getAllByTestId("filter-item");
  filters.forEach((filter) => expect(filter).toBeInTheDocument());
});

it("renders the correct amount of filters", () => {
  const setSelectedFilter = jest.fn();
  const { getAllByTestId } = render(
    <FilterList
      filterTypeWithOptionsList={filterTypeWithOptionsList}
      setSelectedFilter={setSelectedFilter}
    />
  );
  const filters = getAllByTestId("filter-item");
  expect(filters.length.toString()).toMatch(
    filterTypeWithOptionsList.length.toString()
  );
});
