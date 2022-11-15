import React from "react";
import { useState } from "react";
import AddTodoButton from "../../customButton/AddTodoButton";
import styles from './AddTodo.module.scss';


interface AddTodoProps {
    addTodo: (title: string) => void
}

export default function AddTodo({ addTodo }: AddTodoProps) {
    const [title, setTitle] = useState('')



    return (
        <form
            className={styles.addTodoForm}
            onSubmit={(e) => e.preventDefault()}>

            <input
                type='text'
                autoComplete='off'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='новая задача...'
                required
            />
            <AddTodoButton
                text='Добавить'
                type='submit'
                onClick={() => {
                    addTodo(title);
                    setTitle('');
                }
                } />
        </form>
    );
}