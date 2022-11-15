import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Header from '../header/Header';
import AddTodo from './addTodo/AddTodo';
import styles from './app.module.scss';
import TodoList from './todoList/TodoList';

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos(data);
    }, [])

    const addTodo = (title: string):void => {

        const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 1,
            title,
            complete: false
        }
        setTodos([...todos, newTodo]);
    }



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

    const updateTodo = (id: number, newTitle:string): void => {
        const update = todos.map(todo => todo.id === id ?
            { ...todo, title: newTitle }
            : todo)
        setTodos(update)
    }




    return (
        <div className={styles.app}>
            <Header />
            <AddTodo
                addTodo={addTodo }
            />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
            />
        </div>
    );
}


