import React from "react";
import "./App.css";
import Event_Handler from "./Event_Handler_Class/Event_Handler";
import UseState from "./useState_hook/useState_hook";
import Event_bubbling_control from "./Event_Bubbling/Event_Bubbling";


function App() {
  return (
    <>
      <div>
        <Event_Handler />

        {/* 4th May, 2024 */}
        {/* React Hook - useState */}
        <UseState />
        <Event_bubbling_control />

      </div>
    </>
  );
}

export default App;
