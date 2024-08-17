import axios from 'axios'
import personService from '../services/persons'

const PersonForm = ({
    persons,
    setPersons,
    newName, 
    setNewName, 
    newNumber, 
    setNewNumber
}) => {
    const createPerson = (personObjet) => {
        personService
            .create(personObjet)
            .then(returnedPerson => {
                setPersons([
                    ...persons,
                    returnedPerson
                ])
                setNewName('')
                setNewNumber('')
            })
    }

    const updatePerson = (personObject) => {
        personService
            .update(personObject.id, personObject)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newName === '' || newNumber === '') {
            alert("Name and Number are mandatory fields")

            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }

        const personWithSameName = persons.find(person => person.name === newName)

        if (personWithSameName) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personObject.id = personWithSameName.id
                updatePerson(personObject)
            }

            return
        }

        createPerson(personObject)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            name: <input onChange={(e) => setNewName(e.target.value)} value={newName} />
            </div>
            <div>
            number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm
