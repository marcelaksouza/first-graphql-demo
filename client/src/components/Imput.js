import React from "react"

const Imput = (props) => {
    return (
        <input type="text" value={props.value} onChange={props.inputHandler} />
    )
}
export default Imput