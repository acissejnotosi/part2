import React from "react";

const Filter = ({ filterName, handleChange }) => (
  <div>
    filter shown with <input value={filterName} onChange={handleChange} />
  </div>
);

export default Filter;
