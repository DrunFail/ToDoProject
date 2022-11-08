import React from "react";
import styles from './AddTodoButton.module.scss';

interface AddTodoButtonProps {
    text: string,
    type: 'button' | 'submit',
    onClick: () => void
}

export default function AddTodoButton({ text, type, onClick }: AddTodoButtonProps) {
    return (
        <button
            className={styles.custom}
            type={type}
            onClick={onClick }
        >
            {text}
        </button>
        );
}