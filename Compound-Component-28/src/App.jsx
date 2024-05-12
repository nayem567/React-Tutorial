
// 5th May, 2024
//28 : Controlled component 
import "./App.css";

// import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import ChildComponent from "./stateLifting/childComponent";
import Todo from "./stateLifting/ToDoChild";
import NewToDo from "./stateLifting/NewToDo";

function App() {

  const noIdeaData = "I am a Parent Data - App.jsx ";

  const handleChildData = (passingParentToChild) =>{
    console.log("App " + passingParentToChild)
  };

  // making a function for passing Parent to Child Data - App > NewToDo
  const handleNewToDo = (NewToDoData) =>{
    console.log(NewToDoData);
    
  }

  return (
    <div>
      {/* <Form /> */}
      <Form2 />
      {/* child component */}
      <ChildComponent data={noIdeaData} onChildData={handleChildData}/>

      <Todo title="Learn React.js"/>

      <NewToDo onHandleNewToDo={handleNewToDo}/>
   


    </div>
  )
}

export default App
