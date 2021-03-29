import React from "react";
import LandingPage from "./components/LandingPage";
import FilterProvider from "./contexts/FilterContext";

const App = () => (
  <FilterProvider>
    <LandingPage />
  </FilterProvider>
);

export default App;
