const Filter = ({ search, setNewSearch }) => (
    <div>
        filter shown with: <input onChange={(e) => setNewSearch(e.target.value)} value={search} />
    </div>
)

export default Filter
