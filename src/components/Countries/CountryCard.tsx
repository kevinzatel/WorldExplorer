import React, { FC, useState } from "react";
import { CountryCardInfo } from "../../models/countryCardInfo";
import MapModal from "../Modal/MapModal";
import {
  CardWrapper,
  Header,
  Information,
  Footer,
  Icon,
} from "./CountryStyles";
import { IoLocationSharp } from "react-icons/io5";
import ReactTooltip from "react-tooltip";

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
        </Information>
        <Footer>
          <Icon data-tip="React-tooltip" onClick={() => setShowModal(true)}>
            <IoLocationSharp size={30} color="#898989" />
          </Icon>
          <ReactTooltip
            backgroundColor="grey"
            place="bottom"
            type="dark"
            effect="solid"
          >
            <span>See location</span>
          </ReactTooltip>
        </Footer>
      </CardWrapper>
    </>
  );
};

export default CountryCard;
