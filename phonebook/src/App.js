import React, { useState } from "react";

const Filter = ({ filterName, handleChange }) => (
  <div>
    filter shown with <input value={filterName} onChange={handleChange} />
  </div>
);

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons, filterName }) => {
  const namesToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().startsWith(filterName.toUpperCase())
        );

  return (
    <>
      {namesToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!persons.find((x) => x.name.toUpperCase() === newName.toUpperCase())) {
      const nameObject = {
        name: newName,
        number: newNumber !== undefined ? newNumber : "",
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObject));
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleChange={handleFilterNameChange} />
      <h3>Add a new</h3>
      <PersonForm
        addName={handleSubmitForm}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
