import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Header from './header/';
import AddTodo from './todo/addTodo/AddToDo';
import TodoItem from './todo/todoitem/TodoItem';

function ToDo( ) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(data);
    }, [])
    
    const toggleComplete = (id) => {
        const update = todos.map(todo => todo.id == id
            ? { ...todo, complete: !todo.complete }
            : todo)
        console.log(update)
        setTodos(update)
    }

    const deleteTodo = (id) => {
        const delTodo = todos.filter(todo => todo.id !== id)
        setTodos(delTodo)
    }

    
    return (
        <div >
            <Header />
            <AddTodo todos={todos} setTodos={setTodos }/>
            {todos.map(el => <TodoItem
                toggleComplete={toggleComplete}
                todos={todos}
                setTodos={setTodos }
                deleteTodo={deleteTodo }
                todos={todos}
                setTodos={setTodos}
                key={el.id}
                id={el.id }
                el={el} />)}

        </div>
            );
}

 export default ToDo;
