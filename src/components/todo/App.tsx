import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Header from '../header/Header';
import AddTodo from './addTodo/AddTodo';
import TodoItem from './todoItem/TodoItem';
import styles from './app.module.scss';
import TodoList from './todoList/TodoList';

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos(data);
    }, [])

    const toggleComplete = (id: number): void => {
        const updatedTodos = todos.map(todo => todo.id === id
            ? { ...todo, complete: !todo.complete }
            : todo)
        setTodos(updatedTodos)
    }

    const deleteTodo = (id: number): void => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }


    return (
        <div className={styles.app}>
            <Header />
            <AddTodo
                todos={todos}
                setTodos={setTodos}
            />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                setTodos={setTodos}
            />
        </div>
    );
}


