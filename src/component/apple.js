import react from "react"
import Sam from "./sam";



const check = {
    name: "panneer",
    age: 33
}
class Apple extends react.Component {
    render() {
        const { appleInfo } = this.props;
        return (
            <div>
                <h1>Class Component (Apple)</h1>
                <h1>Product Type : {appleInfo.type}</h1>
                <h1>Product Color : {appleInfo.color}</h1>
                <h1>----------------------------------</h1>
                <Sam details={check} />
            </div>
        )
    }
}

export default Apple