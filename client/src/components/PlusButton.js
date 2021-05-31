import React from "react"

const PlusButton = (props) => {
   

    return (
        <div className="flex justify-start">
            <button className="bg-red-400 rounded-2xl h-8 w-8 "onClick={props.clickHandler}>+</button>
        </div>
        
    )
}

export default PlusButton