import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Person from './components/Person'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  function isIn (persons) {
    return persons.name === newName
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(isIn)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
    }
  
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={newFilter} change={handleFilterChange}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}> 
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(personToShow =>
        <Person key={personToShow.id} name={personToShow.name} number={personToShow.number}/>
      )}
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
