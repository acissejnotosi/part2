import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1 , name: "Arto Hellas", phone: "040-1234567"}]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addName = (event) => {
    event.preventDefault();

    if (!persons.find((x) => x.name.localeCompare(newName) === 0)) {
      const nameObject = {
        name: newName,
        phone: newPhone != undefined ? newPhone : "" ,
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <div key={person.id} >{person.name} {person.phone}</div>
      ))}
    </div>
  );
};

export default App;
