import React, { FC, useContext } from "react";
import {
  SelectedFilterContext,
  SetSelectedFilterContext,
} from "../../../contexts/FilterContext";
import { Select } from "./FilterItemStyles";

interface IProps {
  options: any[];
  type: string;
}

const FilterItem: FC<IProps> = ({ options, type }) => {
  const setSelectedFilter = useContext(SetSelectedFilterContext);
  const selectedFilter = useContext(SelectedFilterContext);

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
