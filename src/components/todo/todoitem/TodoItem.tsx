import React from 'react';
import { useState } from 'react';
import styles from './TodoItem.module.scss';

export default function TodoItem({ el,
    id,
    toggleComplete,
    todos,
   setTodos,
    deleteTodo,
}) {
    const [edit, setEdit] = useState('');
    const [editOpen, setEditOpen] = useState(false);

    const editTodo = (id) => {
        setEditOpen(!editOpen)
        const editTask = todos.find(todo => todo.id == id)
        setEdit(editTask.title)
    }
    const updateTodo = (id) => {
        const update = todos.map(todo => todo.id == id ?
            { ...todo, title: edit }
            : todo)
        setTodos(update)
        setEdit('')
        setEditOpen(false)
    }

    console.log(id)
    

    return (
        <div className={styles.container}>
            <div className={styles[editOpen ? 'noshow' : 'show'] }>
                <input className={styles.complete} type='radio' checked={el.complete} onClick={() => toggleComplete(id)} />
                <p className={styles.title}>{el.title}</p>
                <button className={styles.delete} onClick={() => deleteTodo(id)}>delete</button>
                <button className={styles.edit} onClick={() => editTodo(id)}>edit</button>
            </div>
            

            <div className={styles[editOpen ? "open" : 'noopen'] }>
                <input className={styles.edittitle} value={edit} onChange={(e) => setEdit(e.target.value)} />
                <button className={styles.update} onClick={() => updateTodo(id)}>update</button>
                </div>
        </div>
    );
}