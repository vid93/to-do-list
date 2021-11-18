import React, {useState} from 'react';

import ToDoList from './components/ToDoList';

const App = () => {

    const [inputText, setInputText] = useState("");
    const [todo, setTodo] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });


   return (
       <div className="app">
           <ToDoList
            inputText={inputText}
            todo={todo}
            setTodo={setTodo}
            setInputText={setInputText}
           />
       </div>
   )
}

export default App;
