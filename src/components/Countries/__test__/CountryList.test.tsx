import React from "react";
import { cleanup, render } from "@testing-library/react";
import CountryList from "../CountryList";
import { CountryCardInfo } from "../../../models/countryCardInfo";

afterEach(cleanup);

const countries: CountryCardInfo[] = [
  {
    name: "Argentina",
    capital: "Buenos Aires",
    population: "40000000",
    subRegion: "South America",
    flag: "ar",
  },
  {
    name: "Afghanistan",
    capital: "Kabul",
    population: "27657145",
    subRegion: "Southern Asia",
    flag: "af",
  },
];

it("renders cards correctly", () => {
  const { getAllByTestId } = render(<CountryList countries={countries} />);
  const cards = getAllByTestId("country-card");
  cards.map((card) => expect(card).toBeInTheDocument());
});

it("renders the correct amount of cards", () => {
  const { getAllByTestId } = render(<CountryList countries={countries} />);
  const cards = getAllByTestId("country-card");
  expect(cards.length.toString()).toMatch(countries.length.toString());
});
