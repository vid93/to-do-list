import React from "react";

const ToDoItem = ({text, remove, num}) => {

   
    return (
        <div className="todoitem" onClick={remove} num={num}>
            {text}
        </div>
    )
}

export default ToDoItem;