import React, { FC } from "react";
import { Filter } from "../../../models/filter";
import { Select } from "./FilterItemStyles";

interface IProps {
  options: any[];
  selectedFilter?: Filter;
  setSelectedFilter: (filter?: Filter) => void;
  type: string;
}

const FilterItem: FC<IProps> = ({
  options,
  selectedFilter,
  setSelectedFilter,
  type,
}) => {
  return (
    <Select
      value={selectedFilter?.type === type ? selectedFilter.id : "0"}
      onChange={(event) =>
        setSelectedFilter({
          type,
          id: event.target.value,
        })
      }
      data-testid="filter-item"
    >
      <option key="0" value={undefined}>
        {type}
      </option>
      {options.map((option: any) => (
        <option key={option._id} value={option._id} data-testid="filter-option">
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default FilterItem;
