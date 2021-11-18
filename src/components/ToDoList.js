import React, { useEffect } from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = ({inputText, setInputText, todo, setTodo}) => {

    const handleDelete = (id) => {
        const list = todo.filter((el) => el.id !== id)
        setTodo(list)
        console.log(todo);
    }

    const handleChange = (e) => {
        
        setInputText(e.target.value)
    }
    const handleClick = (e) => {
    
        e.preventDefault()
        if(inputText !== ""){
            setTodo([
            ...todo, {text: inputText, id: Math.floor(Math.random()*1000)}
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
            <div>
                <ol>
                    {todo.map((todo) => (
                    <ToDoItem 
                    key={todo.id}
                    text={todo.text} 
                    todo={todo}
                    setTodo={setTodo}
                    remove={handleDelete}
                    /> 
                    ))}
                </ol>
            </div>                
        </div>
    )
}

export default ToDoList;