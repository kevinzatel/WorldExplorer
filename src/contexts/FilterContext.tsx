import React, {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useCurrency } from "../hooks/useCurrency";
import { useLanguage } from "../hooks/useLanguage";
import { useRegion } from "../hooks/useRegion";
import { Filter } from "../models/filter";
import { FilterTypes } from "../models/filterTypesEnum";
import { FilterTypeWithOptions } from "../models/filterTypeWithOptions";

export const FilterTypesWithOptionsContext = React.createContext<
  FilterTypeWithOptions[]
>([]);
export const SetSelectedFilterContext = React.createContext<
  Dispatch<SetStateAction<Filter | undefined>>
>(() => {});
export const SelectedFilterContext = React.createContext<Filter | undefined>(
  undefined
);

interface IProps {
  children: ReactElement;
}

const FilterProvider: FC<IProps> = ({ children }) => {
  const { languageData } = useLanguage();
  const { currencyData } = useCurrency();
  const { regionData } = useRegion();
  const [filterTypesWithOptions, setFilterTypesWithOptions] = useState<
    FilterTypeWithOptions[]
  >([]);
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    undefined
  );

  useEffect(() => {
    let filterTypesWithOptionsList = [];
    if (languageData) {
      const languageFilter: FilterTypeWithOptions = {
        type: FilterTypes.Language,
        options: languageData.Language,
      };
      filterTypesWithOptionsList.push(languageFilter);
    }
    if (currencyData) {
      const currencyFilter: FilterTypeWithOptions = {
        type: FilterTypes.Currency,
        options: currencyData.Currency,
      };
      filterTypesWithOptionsList.push(currencyFilter);
    }
    if (regionData) {
      const regionFilter: FilterTypeWithOptions = {
        type: FilterTypes.Region,
        options: regionData.Region,
      };
      filterTypesWithOptionsList.push(regionFilter);
    }
    setFilterTypesWithOptions(filterTypesWithOptionsList);
  }, [languageData, currencyData, regionData]);

  return (
    <div>
      <FilterTypesWithOptionsContext.Provider value={filterTypesWithOptions}>
        <SetSelectedFilterContext.Provider value={setSelectedFilter}>
          <SelectedFilterContext.Provider value={selectedFilter!}>
            {children}
          </SelectedFilterContext.Provider>
        </SetSelectedFilterContext.Provider>
      </FilterTypesWithOptionsContext.Provider>
    </div>
  );
};

export default FilterProvider;
