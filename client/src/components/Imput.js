import React from "react"

const Imput = (props) => {
    return (
        <input className="p-2 border border-red-200 shadow focus:outline-none focus:ring-2 hover:border-pink-500 focus:ring-pink-500 focus:border-transparent focus:shadow" type="text" value={props.value} onChange={props.inputHandler} />
    )
}
export default Imput