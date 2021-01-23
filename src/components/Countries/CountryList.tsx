import React, { FC } from "react";
import { CountryCardInfo } from "../../models/countryCardInfo";
import CountryCard from "./CountryCard";
import { ListWrapper } from "./CountryStyles";

interface IProps {
  countries: CountryCardInfo[];
}

const CountryList: FC<IProps> = ({ countries }) => {
  return (
    <ListWrapper>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </ListWrapper>
  );
};

export default CountryList;
