import React from "react";
import Card from "./Card";
import Data from "../data.json";

export default function TodoMap() {
  let items = [];

  items = Data.map((item, index) => (
    <Card key={index} todoTitle={item.title} todoDesc={item.description} />
  ));

  return (
    <div>
      <h1 className="headingStyle">To Do App</h1>
      {/* using a Card Component */}
      <Card todoTitle="Call Mother" todoDesc="Description 1" />
      <Card todoTitle="Call Father" todoDesc="Description 2" />
      <Card todoTitle="Call Wife" todoDesc="Description 3" />

      {/* using json data */}

      {items}
    </div>
  );
}


