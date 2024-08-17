import PersonInfo from "./PersonInfo"
import personService from "../services/persons"

const PersonList = ({setPersons, persons, search, showNotification}) => {
    const filterFunction = (person) => {
        return search === '' || person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    }

    const removePerson = ({name, id}) => () => {
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .remove(id)
                .then(returnedPerson => {
                    setPersons(persons.filter(person => person.id !== returnedPerson.id))
                    showNotification(`${returnedPerson.name} deleted`)
                })
                .catch(_error => {
                    showNotification(`Information of ${name} has already been removed`, true)
                }) 
        }
    }

    return (
        <>
            {persons.filter(filterFunction).map(person => (
                <PersonInfo key={person.id} onRemove={removePerson(person)} name={person.name} number={person.number} />
            ))}
        </>
    )
}

export default PersonList
