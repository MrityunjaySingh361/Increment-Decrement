import React, { useState } from "react";
import "./App.css"
function App(){
  const [data , setData]= useState(0)
  return (
  <div className="meradiv">
    <h2>My first project here</h2>
    <h1>{data}</h1>
 <button onClick={()=>setData (data+1)} >increment </button>
 <button  onClick={()=>setData (data-1)}>decrement</button>
  </div>
  )
}
export default App;