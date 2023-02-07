const Persons = ({ persons, filtered, newFilter, handlePersonDelete }) => {

  const personsToShow = filtered
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  return (
    personsToShow.map(person =>
      <p key={person.id}>{person.name} {person.number} <button onClick={() => handlePersonDelete(person.id, person.name)}>delete</button>
      </p>
    )
  )
}

export default Persons