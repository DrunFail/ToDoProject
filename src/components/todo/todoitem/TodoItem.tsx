import React from 'react';
import { useState } from 'react';
import styles from './TodoItem.module.scss';


interface TodoItemProps {
    todo: Todo,
    id: number,
    toggleComplete: (id: number) => void,
    todos: Todo[],
    deleteTodo: (id: number) => void,
    updateTodo: (id: number, newTitle: string) => void,
}


export default function TodoItem({  todo,
                                    id,
                                    toggleComplete,
                                    todos,
                                    deleteTodo,
                                    updateTodo,
                                }: TodoItemProps) {

    const [newTitle, setNewTitle] = useState('');
    const [editOpen, setEditOpen] = useState(false);

    const editTodo = (id: number): void => {

        const editTask = todos.find(todo => todo.id === id)

        if (typeof editTask === 'undefined') {
            throw new Error('invalid type')
        }
        setNewTitle(editTask.title)
        setEditOpen(!editOpen)
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
                    onClick={() => {
                        updateTodo(id, newTitle);
                        setNewTitle('')
                        setEditOpen(false)
                    }}>
                    Применить
                </button>
            </div>
        </div>
    );
}