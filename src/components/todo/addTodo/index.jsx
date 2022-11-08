import { useState } from "react";
import styles from './AddToDo.module.scss';

export default function AddTodo({ todos, setTodos }) {
    const [title, setTitle] = useState('')

    const addTodo = () => {
        
        const newTodo = {
            id: todos.at(-1).id + 1,
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
            <button className={styles.add} onClick={() => addTodo() }>add</button>
        </div>
    );
}