import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import styles from './TodoList.module.scss';


interface TodoListProps {
    todos: Todo[],
    deleteTodo: (id: number) => void,
    toggleComplete: (id: number) => void,
    setTodos: any
}

export default function TodoList({ todos, deleteTodo, toggleComplete, setTodos }: TodoListProps) {
    return (
        <div className={styles.container }>
            <h1>Список назначенных дел</h1>
            {todos.length === 0 &&
                <p>Вы не назначили ни одного дела</p>}

            {todos.map(todo =>
                <TodoItem
                    toggleComplete={toggleComplete}
                    todos={todos}
                    setTodos={setTodos}
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    id={todo.id}
                    todo={todo} />
            )}
        </div>
    );
}