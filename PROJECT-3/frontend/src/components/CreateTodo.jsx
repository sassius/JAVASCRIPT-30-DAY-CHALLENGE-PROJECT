import { useState } from "react";

export function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: '10px',
        maxWidth: '300px',
        margin: '10px',
        padding: '20px'
    }}>
        <input type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}style={{
            padding:10,
            margin:10
        }}  />
        <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}style={{
            padding:10,
            margin:10
        }}  />
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos" , {
                method : "POST",
                body :JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "Content-type":"application/json"
                }
            })
                .then(async function(res){
                    const json = res.json();
                    alert("Todo Added")
                })
        }}>Add a To-Do</button>
    </div>
}