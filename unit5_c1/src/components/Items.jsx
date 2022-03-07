import { useState } from "react";

export function Things(props)
{
    const [counter, setCounter] = useState(props.value)

    const changeOperaters = (operater) =>{
        setCounter(counter + operater)
    }

    return (
        <div className = "items">
            <span>{props.name}:</span>
            <button className = {props.add} onClick = {() => changeOperaters(1)}>Add Book</button>
            <button className = {props.rem} onClick = {() => {
                if(counter >= 1) {
                    changeOperaters(-1)
                }
            }}>Remove Book</button>
            <span className = {props.total}>{counter} </span>
            
        </div>
    )
}