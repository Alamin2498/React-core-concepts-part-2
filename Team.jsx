import { useState } from "react"

export default function Team(){

    const [team, setTeam]= useState(11);


    const handleAdd=()=>{
        const newTeam =team+1;
        setTeam(newTeam);

    }

    const reduceTeam= ()=>{
        const newTeam = team-1;
        setTeam(newTeam);
    }

    const teamStyle ={
        border :'2px  solid purple',
        margin : '15px',
        padding: '20px',
        borderRedius : '20px'
    }
    
    return(
<div style={teamStyle}>
    <h3>Players: {team} </h3>
    <button onClick={handleAdd}>Add</button>
    <button onClick={reduceTeam}>ReduceTeam</button>
</div>
    )
}