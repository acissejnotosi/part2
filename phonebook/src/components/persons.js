import React from "react";

const Persons = ({ persons, filterName, deleteNumber }) => {
  const namesToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().includes(filterName.toUpperCase())
        );

  return (
    <ul>
      {namesToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteNumber(person)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
