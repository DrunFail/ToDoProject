import React from "react";
import { useState } from "react";
import styles from './AddTodo.module.scss';


interface AddTodoProps {
    todos: Todo[],
    setTodos: any
}

export default function AddTodo({ todos, setTodos }: AddTodoProps) {
    const [title, setTitle] = useState('')

    const addTodo = () => {
        
        const newTodo = {
            id: todos[todos.length -1].id + 1 || 1,
            title,
            complete: false
        }
        setTodos([...todos, newTodo]);
        setTitle('');
    }

    return (
        <div className={styles.container }>
            <input className={styles.title}
                type='text'
                autoComplete='off'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='новая задача...'
            />
            <button className={styles.add} onClick={addTodo}>add</button>
        </div>
    );
}