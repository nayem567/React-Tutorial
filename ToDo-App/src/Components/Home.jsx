import Todos from "./ChildComponents/Todos";
import UserToDo from "./UserToDo";

// 9th May, 2024

function HomeTodos() {
  const DefaultToDoItems = ["Item 1", "Item 2"];

  return (
    <div>
      <Todos DefaultToDoItems={DefaultToDoItems} />
      {/* <UserToDo /> */}

    </div>
  );
}

export default HomeTodos;
