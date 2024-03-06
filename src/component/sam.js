function Sam(props) {
    const { details } = props
    return (
        <div>
            <h1>sample</h1>
            <h1>{details.name} </h1>
            <h1>{details.age} </h1>
        </div>
    )
}

export default Sam;