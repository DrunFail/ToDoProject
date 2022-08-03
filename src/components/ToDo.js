import { useState, useEffect } from 'react';
import data from '../data/data.json';
import TodoItem from './todo/todoitem';

function ToDo() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(data);
    }, [])
    
    console.log(todos)
    return (
        <div >
            <input
                type='text'
                autoComplete='off'
            />
            <button>add</button>
            {todos.map(el => <TodoItem key={el.id} el={el }/>) }

        </div>
            );
}

            export default ToDo;
