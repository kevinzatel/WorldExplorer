import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Container } from "./AppStyles";
import { useLanguage } from "./hooks/useLanguage";
import CountryList from "./components/Countries/CountryList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useCountries } from "./hooks/useCountries";
import { CountryCardInfo } from "./models/countryCardInfo";
import { Language } from "./models/languaje";
import { CountryTotalInfo } from "./models/countryTotalInfo";
import { useCurrency } from "./hooks/useCurrency";
import { Filter } from "./models/filter";
import { useRegion } from "./hooks/useRegion";
import { Region, SubRegion } from "./models/region";
import Spinner from "./components/Spinner/Spinner";
import Header from "./components/Header/Header";
import {
  FETCH_COUNTRIES_ERROR,
  LOADING_COUNTRIES_MESSAGE,
  NO_COUNTRY_FOUND_MESSAGE,
} from "./messages/messages";
import FilterList from "./components/Filters/FilterList/FilterList";
import { FilterTypeWithOptions } from "./models/filterTypeWithOptions";
import { FilterTypes } from "./models/filterTypesEnum";
import Error from "./components/Error/Error";

const App = () => {
  const { countryData, countryLoading, countryError } = useCountries();
  const { languageData } = useLanguage();
  const { currencyData } = useCurrency();
  const { regionData } = useRegion();

  const [countryList, setCountryList] = useState<CountryTotalInfo[]>([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState<
    CountryCardInfo[]
  >([]);
  const [filterTypesWithOptions, setFilterTypesWithOptions] = useState<
    FilterTypeWithOptions[]
  >([]);
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    undefined
  );
  const [noCountryFound, setShowNoCountryFound] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (countryData) setCountryList(countryData.Country);
  }, [countryData]);

  useEffect(() => {
    if (countriesToDisplay.length > 0 && searchBarRef.current)
      searchBarRef!.current!.scrollIntoView({ behavior: "smooth" });
  }, [countriesToDisplay]);

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

  useEffect(() => {
    const displayCountriesByLanguage = () => {
      const countries: CountryTotalInfo[] = countryList.filter(
        (country: CountryTotalInfo) => {
          return country.officialLanguages.find(
            (language: Language) => language._id === selectedFilter!.id
          );
        }
      );
      fillCountriesToDisplay(countries);
    };

    const displayCountriesByCurrency = () => {
      const countries: CountryTotalInfo[] = countryList.filter(
        (country: CountryTotalInfo) => {
          return country.currencies.find(
            (currency) => currency._id === selectedFilter!.id
          );
        }
      );
      fillCountriesToDisplay(countries);
    };

    const displayCountriesByRegion = () => {
      const regionList = filterTypesWithOptions.find(
        (filter: FilterTypeWithOptions) => filter.type === FilterTypes.Region
      )?.options;
      if (!regionList) return;
      const selectedRegion: Region | undefined = regionList.find(
        (region: Region) => region._id === selectedFilter!.id
      );
      let countries: CountryTotalInfo[] = [];
      if (selectedRegion) {
        const selectedSubRegions: SubRegion[] = selectedRegion!.subregions;
        countries = countryList.filter((country: CountryTotalInfo) => {
          return selectedSubRegions.find(
            (subRegion: SubRegion) =>
              country.subregion && subRegion._id === country.subregion._id
          );
        });
      }
      fillCountriesToDisplay(countries);
    };
    if (selectedFilter) {
      setShowNoCountryFound(false);
      switch (selectedFilter.type) {
        case FilterTypes.Language:
          displayCountriesByLanguage();
          break;
        case FilterTypes.Currency:
          displayCountriesByCurrency();
          break;
        case FilterTypes.Region:
          displayCountriesByRegion();
          break;
        default:
          break;
      }
    }
  }, [selectedFilter, countryList, filterTypesWithOptions]);

  const fillCountriesToDisplay = (countries: CountryTotalInfo[]) => {
    const countriesToDisplay: CountryCardInfo[] = [];
    countries.forEach((country: CountryTotalInfo) => {
      countriesToDisplay.push({
        name: country.name,
        flag: country.flag.emoji,
        subRegion: country.subregion.name,
        capital: country.capital,
        population: country.population,
        location: {
          latitude: country.location.latitude,
          longitude: country.location.longitude,
        },
      });
    });
    setCountriesToDisplay(countriesToDisplay);
  };

  const onSearchSubmit = (searchTerm: string) => {
    const countries: CountryTotalInfo[] = countryList.filter(
      (country: CountryTotalInfo) => {
        return (
          country.name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase() ||
          country.alpha2Code.toLocaleLowerCase() ===
            searchTerm.toLocaleLowerCase()
        );
      }
    );
    setSelectedFilter(undefined);
    fillCountriesToDisplay(countries);
    setShowNoCountryFound(countries.length === 0 ? true : false);
  };

  return (
    <Container>
      {countryLoading && <Spinner text={LOADING_COUNTRIES_MESSAGE} />}
      {countryError && <Error text={FETCH_COUNTRIES_ERROR} />}
      {!countryLoading && !countryError && (
        <>
          {<Header />}
          <div ref={searchBarRef} style={{ padding: "5px" }} />
          <SearchBar onSearchSubmit={onSearchSubmit} />
          <FilterList
            filterTypeWithOptionsList={filterTypesWithOptions}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
          {noCountryFound && <h2>{NO_COUNTRY_FOUND_MESSAGE}</h2>}
          {countriesToDisplay.length > 0 && (
            <CountryList countries={countriesToDisplay} />
          )}
        </>
      )}
    </Container>
  );
};

export default App;
