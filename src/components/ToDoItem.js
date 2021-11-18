import React from "react";

const ToDoItem = ({text, remove}) => {

   
    return (
        <div onClick={remove}>
            {text}
        </div>
    )
}

export default ToDoItem;