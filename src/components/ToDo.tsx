import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Header from './header/Header';
import AddTodo from './todo/addTodo/AddTodo';
import TodoItem from './todo/todoItem/TodoItem';

export default function ToDo( ) {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos(data);
    }, [])
    
    const toggleComplete = (id: number) => {
        const updatedTodos = todos.map(todo => todo.id == id
            ? { ...todo, complete: !todo.complete }
            : todo)
        setTodos(updatedTodos)
    }

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    
    return (
        <div >
            <Header />
            <AddTodo
                todos={todos}
                setTodos={setTodos}
            />
            {todos.map(el => <TodoItem
                toggleComplete={toggleComplete}
                todos={todos}
                setTodos={setTodos }
                deleteTodo={deleteTodo }
                key={el.id}
                id={el.id }
                el={el} />)}

        </div>
            );
}


