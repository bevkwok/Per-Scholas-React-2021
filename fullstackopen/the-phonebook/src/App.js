
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterWord, setfilterWord ] = useState('')
  const [ filteredList, setfilteredList ] = useState([...persons])




  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterWord = (e) => {
    setfilterWord(e.target.value)
    setfilteredList(persons.filter(person => person.name !== e.target.value))
  }

  // const filterList = (e) => {
  //   console.log('before filterWord - ', filterWord);
  //   setfilterWord(e.target.value)
  //   console.log('After filterWord - ',filterWord);
  //   setfilteredList(persons.filter(person => person.name === filterWord))
  // }


  const addPerson = (e) => {

    const personNameArray = persons.map(person => person.name.toLowerCase());
    const nameExist = personNameArray.includes(newName.toLowerCase())
    console.log(nameExist);

    if (nameExist === false) {

      e.preventDefault()
      const newPerons = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerons))
    } else {
      alert(`${newName} is already added to phonebook`)
      e.preventDefault()
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h1>Exercises 2.6.-2.10.</h1>
      <h2>Phonebook</h2>
      <div>Debug: {newName}</div>
      <div>
        Filter shown with <input value={filterWord} onChange={handleFilterWord}/>
      </div>
      <div>Filtered List: 
        {
          filteredList.map(person => 
            <p>{person.name} - {person.number}</p>
          )
        }
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>List: {persons.map(person => 
        <p>{person.name} - {person.number}</p>)}
      </div>
    </div>
  )
}

export default App;
