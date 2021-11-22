import React, { useEffect } from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = ({inputText, setInputText, todo, setTodo}) => {

    const handleDelete = (e) => {
       
        const id = e.target.getAttribute('num')

        const list = todo.filter(el => el !== todo[id])

        setTodo(list)

    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
    
        if(inputText !== ""){
            setTodo([
                ...todo, {text: inputText}
            ])
        } 
        alert("Enter a Task")
        setInputText("");
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(todo))
    }, [todo])


    return (
        <div>
            <form className="field">
                <input className="text-area" onChange={handleChange} value={inputText} type='text' placeholder="Add Task"/>
                <button onClick={handleClick} className="submit-btn">Add</button>
            </form>
                <div className="list">
                    {todo.map((todoitem, index) => (
                    <ToDoItem 
                    remove={handleDelete}
                    key={index}
                    num={index}
                    text={todoitem.text} 
                    todo={todoitem}
                    setTodo={setTodo}
                    /> 
                    ))}
                </div>                
        </div>
    )
}

export default ToDoList;