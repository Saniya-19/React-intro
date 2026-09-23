import React, {useState} from "react";

const FunctionComponents = (props)=>{
   const [count, setCount] = useState(0);
   const reduceCount = ()=>{ 
      setCount(count-1)
   }


   return(
      <div>
        <p>This is functional Components</p>
        <button onClick = {()=>setCount(count+1)}>Click me to increment/add by 1 </button>
        <button onClick = {reduceCount}>Click here to decrement </button>
        <h2>{count}</h2>
        <h4>My Company is: {props.name} it is of {props.age} years old and the author would be {props.author} </h4>

      </div>

   );
}
export default FunctionComponents;
//props:{ 
      //name:"Devtown",
      //age: "20",
      //author: "rk"
      //
