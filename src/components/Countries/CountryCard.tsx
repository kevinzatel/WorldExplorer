import React, { FC } from "react";
import { CountryCardInfo } from "../../models/countryCardInfo";
import { CardWrapper, Header, Information } from "./CountryStyles";

interface IProps {
  country: CountryCardInfo;
}

const CountryCard: FC<IProps> = ({ country }) => (
  <CardWrapper data-testid="country-card">
    <Header>
      {country.flag} {country.name}
    </Header>
    <Information>
      <p>
        <b>Subregion:</b> {country.subRegion}
      </p>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Pupulation:</b> {country.population}
      </p>
    </Information>
  </CardWrapper>
);

export default CountryCard;
