
const Total = ({parts}) => {
    const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)
    return (
        <p>
            <strong>
                total of {total} exercises
            </strong>
        </p>
    )
}

export default Total