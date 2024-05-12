import UserToDo from "../UserToDo";
import Todo from "./GrandChildComponents/Todo";

function Todos(props){

    const DefaultToDo = props.DefaultToDoItems ;

    return(
        <div>
            <ul>
               {DefaultToDo.map((item, index) => (
                <Todo key={index} childTodo={item}/>
               ))}
            </ul>
            <UserToDo />
        </div>
    )
}
export default Todos;