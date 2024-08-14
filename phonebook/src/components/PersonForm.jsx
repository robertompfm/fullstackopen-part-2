const PersonForm = ({
    persons,
    setPersons,
    newName, 
    setNewName, 
    newNumber, 
    setNewNumber
}) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        if (newName === '' || newNumber === '') {
            alert("Name and Number are mandatory fields")

            return
        }

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)

            return
        }

        setPersons([
            ...persons,
            { name: newName, number: newNumber, id: persons.length + 1 }
        ])

        setNewName('')
        setNewNumber('')
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
