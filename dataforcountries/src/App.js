import React, { useState, useEffect } from "react";
import axios from "axios";

const shortid = require("shortid");

const CountryView = ({ country }) => {
  return (
    <>
      {country.map((x) => (
        <div key={shortid.generate()}>
          <h2>{x.name}</h2>
          <div>capital {x.capital}</div>
          <div>population {x.population}</div>
          <h3>languages</h3>
          <ul>
            {x.languages.map((x) => (
              <li key={shortid.generate()}> {x.name} </li>
            ))}
          </ul>
          <img src={x.flag} height="100" width="100" />
        </div>
      ))}
    </>
  );
};

const Filter = (props) => {
  const showFilter =
    props.filterCountry === ""
      ? []
      : props.countries.filter((x) =>
          x.name.toUpperCase().includes(props.filterCountry.toUpperCase())
        );

  const handleClick = (event) => {
    props.setFilterCountry(event.target.value);
  };

  if (showFilter !== []) {
    if (showFilter.length > 1 && showFilter.length <= 10) {
      return showFilter.map((x) => (
        <div key={shortid.generate()}>
          {x.name}
          <button value={x.name} onClick={handleClick} type="button">
            Show
          </button>
        </div>
      ));
    } else if (showFilter.length === 1) {
      return <CountryView country={showFilter} />;
    } else if (showFilter.length > 10) {
      return <div> Too many maches, specify another filter</div>;
    }
  }
  return null;
};

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
      <Filter countries={countries} filterCountry={filterCountry} setFilterCountry={setFilterCountry}/>
    </div>
  );
};

export default App;
