import React from 'react';
import { useState } from 'react';
import styles from './TodoItem.module.scss';


interface TodoItemProps {
    todo: Todo,
    id: number,
    toggleComplete: (id: number) => void,
    todos: Todo[],
    deleteTodo: (id: number) => void,
    setTodos: any
}


export default function TodoItem({
    todo,
    id,
    toggleComplete,
    todos,
    setTodos,
    deleteTodo,
}: TodoItemProps) {

    const [newTitle, setNewTitle] = useState('');
    const [editOpen, setEditOpen] = useState(false);

    const editTodo = (id: number) => {
        setEditOpen(!editOpen)
        const editTask = todos.find(todo => todo.id === id)

        if (typeof editTask === 'undefined') {
            throw new Error('invalid type')
        }
        setNewTitle(editTask.title)
    }


    const updateTodo = (id: number) => {
        const update = todos.map(todo => todo.id === id ?
            { ...todo, title: newTitle }
            : todo)
        setTodos(update)
        setNewTitle('')
        setEditOpen(false)
    }



    return (
        <div className={styles.container}>
            <div className={styles[editOpen ? 'noshow' : 'show']}>
                <input
                    className={styles.complete}
                    type='radio'
                    checked={todo.complete}
                    onChange={() => toggleComplete(id)}
                />

                <p className={styles.title}>{todo.title}</p>

                <button
                    className={styles.delete}
                    onClick={() => deleteTodo(id)}>
                    Удалить
                </button>

                <button
                    className={styles.edit}
                    onClick={() => editTodo(id)}>
                    Изменить
                </button>
            </div>


            <div className={styles[editOpen ? "open" : 'noopen']}>

                <input
                    className={styles.edittitle}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)} />

                <button
                    className={styles.update}
                    onClick={() => updateTodo(id)}>
                    Применить
                </button>
            </div>
        </div>
    );
}