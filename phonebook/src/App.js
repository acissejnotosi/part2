import React, { useState, useEffect } from "react";
import phoneNumberService from "./services/phoneNumberService";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import Filter from "./components/filter";

const shortid = require("shortid");

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    phoneNumberService.getAll().then((numbers) => {
      setPersons(numbers);
    });
  }, []);

  const deleteNumber = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneNumberService
        .deleteNumber(person.id)
        .then(() => {
          setPersons(persons.filter((item) => item.id !== person.id));
          window.alert(`Person ${person.name} added with success!`);
        })
        .catch((error) => {
          window.alert(
            `Error detected! The name ${person.name} and number ${person.number} was already deleted from server.`
          );
        });
      phoneNumberService
        .getAll()
        .then((persons) => setPersons(persons))
        .catch((error) => `The following error was detected: ${error}`);
    }
  };

  const updateNumber = (person, newNumber) => {
    const updatedPerson = {
      name: person.name,
      number: newNumber,
      id: person.id,
    };
    if (
      window.confirm(
        ` ${person.name} is already added in the phonebook, replace de older number with a new one?`
      )
    ) {
      phoneNumberService
        .updateNumber(person.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((item) =>
              item.id !== person.id ? item : returnedPerson
            )
          );
          window.alert(`Person ${person.name} was successfully updated!`);
        })
        .catch((error) => {
          window.alert(
            `Error detected! The name ${person.name} and number ${person.number} was already deleted from server.`
          );
        });
      phoneNumberService
        .getAll()
        .then((persons) => setPersons(persons))
        .catch((error) => `The following error was detected: ${error}`);
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (
      !persons.find(
        (x) => x.name.trim().toUpperCase() === newName.trim().toUpperCase()
      )
    ) {
      const nameObject = {
        name: newName,
        number: newNumber !== undefined ? newNumber : "",
        id: shortid.generate(),
      };
      phoneNumberService.createNumber(nameObject).then((newPersons) => {
        setPersons(persons.concat(newPersons));
      });
    } else if (
      persons.find(
        (item) =>
          item.name.trim().toUpperCase() === newName.trim().toUpperCase()
      )
    ) {
      updateNumber(
        persons.filter(
          (item) =>
            item.name.trim().toUpperCase() === newName.trim().toUpperCase()
        )[0],
        newNumber
      );
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
      <Persons
        persons={persons}
        filterName={filterName}
        deleteNumber={deleteNumber}
      />
    </div>
  );
};

export default App;
