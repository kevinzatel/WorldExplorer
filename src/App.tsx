import React from "react";
import { Router } from "react-router";
import { Container } from "./AppStyles";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/routes/Routes";
import FilterProvider from "./contexts/FilterContext";
import history from "./history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <FilterProvider>
          <Container>
            <Routes />
          </Container>
        </FilterProvider>
      </Router>
    </>
  );
};

export default App;
