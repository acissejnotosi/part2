import React from "react";
import Weather from "./weather";

const shortid = require("shortid");

const CountryView = ({ country }) => {
  return (
    <>
      <div>
        <h2>{country.name}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <ul>
          {country.languages.map((x) => (
            <li key={shortid.generate()}> {x.name} </li>
          ))}
        </ul>
        <img src={country.flag} height="100" width="100" />
        <Weather capital={country.capital} />
      </div>
    </>
  );
};

export default CountryView;
