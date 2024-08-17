const PersonInfo = ({name, number, onRemove}) => (
    <div>{name} {number} <button onClick={onRemove}>delete</button></div>
)

export default PersonInfo
