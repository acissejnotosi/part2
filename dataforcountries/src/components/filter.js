import React from "react";
import CountryView from "./countryView";

const shortid = require("shortid");

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

  if (showFilter.length > 10) {
    return <div> Too many maches, specify another filter</div>;
  }

  if (showFilter.length > 1 && showFilter.length <= 10) {
    return showFilter.map((x) => (
      <div key={shortid.generate()}>
        {x.name}
        <button value={x.name} onClick={handleClick} type="button">
          Show
        </button>
      </div>
    ));
  }

  if (showFilter.length === 1) {
    return <CountryView country={showFilter[0]} />;
  }

  return null;
};

export default Filter;
