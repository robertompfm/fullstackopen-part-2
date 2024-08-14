import PersonInfo from "./PersonInfo"

const PersonList = ({persons, search}) => {
    const filterFunction = (person) => {
        return search === '' || person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    }

    return (
        <>
            {persons.filter(filterFunction).map(person => (
                <PersonInfo key={person.id} name={person.name} number={person.number} />
            ))}
        </>
    )
}

export default PersonList
