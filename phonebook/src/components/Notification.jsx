const Notification = ({ notification }) => {
    if (notification === null) {
        return null
    }

    return (
        <div className={`notification ${notification.isError ? 'error' : ''}`}>
            {notification.message}
        </div>
    )
}

export default Notification