import React, { FC, useState } from "react";
import { CountryCardInfo } from "../../models/countryCardInfo";
import MapModal from "../Modal/MapModal";
import { CardWrapper, Header, Information, Link } from "./CountryStyles";

interface IProps {
  country: CountryCardInfo;
}

const CountryCard: FC<IProps> = ({ country }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <MapModal
          closeModal={() => setShowModal(false)}
          location={country.location}
        />
      )}
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
            <b>Population:</b> {country.population}
          </p>
          <Link onClick={() => setShowModal(true)}>
            Take a look at it on maps
          </Link>
        </Information>
      </CardWrapper>
    </>
  );
};

export default CountryCard;
