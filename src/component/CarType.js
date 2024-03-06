
// function CarType(props) {
//     const { CType, color } = props;
//     const type = `This is ${CType} Car`;
//     return (
//         <div>
//             <h2>{type}</h2>
//             <h2>This is {color} color {CType} car</h2>
//         </div>
//     )
// }

// export default CarType;

//---------------------------------------------------------------------------------------


function CarType(props) {
    const { CarInfo } = props
    const { CType, color } = CarInfo;
    const type = `This is ${CType} Car`;
    return (
        <div>
            <h2>-------------</h2>
            <h2>{type}</h2>
            <h2>This is {color} color {CType} car</h2>
            <h2>This is {CarInfo.color} color {CarInfo.CType} car</h2>
            <h2>-------------</h2>
        </div>
    )
}

export default CarType;