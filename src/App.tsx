import React from "react";
import { Container } from "./AppStyles";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import FilterProvider from "./contexts/FilterContext";

const App = () => {
  return (
    <>
      <NavBar />
      <FilterProvider>
        <Container>
          <LandingPage />
        </Container>
      </FilterProvider>
    </>
  );
};

export default App;
