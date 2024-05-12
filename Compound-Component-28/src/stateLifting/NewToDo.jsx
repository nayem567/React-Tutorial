import React from "react";

const NewToDo = (props) => {
    props.onHandleNewToDo({title:"I am New ToDo Title"});
    return(
        <div>
            <h2>New ToDo</h2>
        </div>
    )
}

export default NewToDo;