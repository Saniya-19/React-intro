import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionComponents from './components/FunctionComponents';
import {useState} from "react";

function App() {
  const author = "RK";

  const [name, setname] = useState("DT");
  return (
    <div className="App">
      
     <p>Class Component</p>
     <ClassComponent />

      <p>Function Components</p>
        <FunctionComponents name='Devtown'age={20} author={author}/>

     
    </div>
  );
}

export default App;
