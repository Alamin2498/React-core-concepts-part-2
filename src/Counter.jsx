import { useState } from "react"

export default function Counter(){
    let [count ,setCount] = useState(0);

    let handleAdd= ()=>{
        let newCount = count+1;
        return setCount(newCount)
    }

    const handleRedure =()=>{
       const newCount =count-1;
       setCount(newCount); 
    }
    
    return(
        <div style={{border:"2px solid yellow"}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Click for ADD</button>
            <button onClick={handleRedure}> Reduce</button>
        </div>
    )
}