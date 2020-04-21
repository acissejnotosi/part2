import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    if (!persons.find((x) => x.name.localeCompare(newName) === 0)) {
      const nameObject = {
        name: newName,
        phone: newPhone != undefined ? newPhone : "",
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObject));
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewPhone("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const namesToShow =
    filterName == ""
      ? persons
      : persons.filter(
          (person) => person.name.toUpperCase() === filterName.toUpperCase()
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={filterName} onChange={handleFilterNameChange} />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  );
};

export default App;
