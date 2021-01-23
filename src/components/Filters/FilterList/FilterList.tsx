import React, { FC } from "react";
import { Filter } from "../../../models/filter";
import { FilterTypeWithOptions } from "../../../models/filterTypeWithOptions";
import FilterItem from "../FilterItem/FilterItem";

interface IProps {
  filterTypeWithOptionsList: FilterTypeWithOptions[];
  selectedFilter?: Filter;
  setSelectedFilter: (filter?: Filter) => void;
}

const FilterList: FC<IProps> = ({
  filterTypeWithOptionsList,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <>
      {filterTypeWithOptionsList.map(
        (filterTypeWithOptions: FilterTypeWithOptions, index: number) => {
          return (
            <FilterItem
              key={index}
              type={filterTypeWithOptions.type}
              options={filterTypeWithOptions.options}
              setSelectedFilter={setSelectedFilter}
              selectedFilter={selectedFilter}
              data-testid="filter-item"
            />
          );
        }
      )}
    </>
  );
};

export default FilterList;
