import { FC } from "react";
import { FilterTypeWithOptions } from "../../../models/filterTypeWithOptions";
import FilterItem from "../FilterItem/FilterItem";

interface IProps {
  filterTypeWithOptionsList: FilterTypeWithOptions[];
}

const FilterList: FC<IProps> = ({ filterTypeWithOptionsList }) => {
  return (
    <>
      {filterTypeWithOptionsList.map(
        (filterTypeWithOptions: FilterTypeWithOptions, index: number) => {
          return (
            <FilterItem
              key={index}
              type={filterTypeWithOptions.type}
              options={filterTypeWithOptions.options}
              data-testid="filter-item"
            />
          );
        }
      )}
    </>
  );
};

export default FilterList;
