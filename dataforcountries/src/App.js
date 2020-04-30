import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/filter"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag"
      )
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleFilterCountry = (event) => {
    setFilterCountry(event.target.value);
  };

  return (
    <div>
      find countries
      <input value={filterCountry} onChange={handleFilterCountry}></input>
      <Filter
        countries={countries}
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
      />
    </div>
  );
};

export default App;
