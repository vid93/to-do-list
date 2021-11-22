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
        setInputText("");
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(todo))
    }, [todo])


    return (
        <div>
            <form>
                <input onChange={handleChange} value={inputText} type='text'/>
                <button onClick={handleClick} >Add</button>
            </form>
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
    )
}

export default ToDoList;