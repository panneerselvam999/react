// import CarType from "./CarType";

// function Car() {
//     const bmw = "BMW"
//     const clr = "black"

//     return (
//         <div>
//             <h1>Car Component</h1>
//             <CarType CType={bmw} color={clr} />
//         </div >
//     )
// }

// export default Car;

//-----------------------------------------------------------------------------------

import CarType from "./CarType";
import Apple from "./apple";

const CarInfo = {
    CType: "BMW",
    color: "Black"
}
// const CarInfo = {}
const appleInfo = {
    type: "mobile",
    color: "blue"
}

const CarInfoFun = CarInfo.CType !== undefined && CarInfo.color !== undefined

const IsDoorInfo = false;

function Car() {

    return (
        <div>
            <h2>-------------</h2>
            <h1>Car Component</h1>
            {/* {CarInfo.CType !== undefined && CarInfo.color !== undefined ?
                <CarType CarInfo={CarInfo} /> : null} */}
            {CarInfoFun ? <CarType CarInfo={CarInfo} /> : null}

                {IsDoorInfo ? <p>Door is Open</p> : <p>Door is closed</p> }

            <h2>-------------</h2>
            <Apple appleInfo={appleInfo} />
            <h2>-------------</h2>

        </div >
    )
}

export default Car;