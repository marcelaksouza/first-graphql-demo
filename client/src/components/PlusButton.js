import React from "react"

const PlusButton = (props) => {
   

    return (
        <div className="flex justify-start">
            <button className="text-2xl bg-red-400 text-white rounded-2xl h-8 w-8 hover:text-black"onClick={props.clickHandler}>+</button>
        </div>
        
    )
}

export default PlusButton