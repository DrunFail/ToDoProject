import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header} >
            <a
                className={styles.logo}
                href='/' >
                ToDoApp
            </a>
        </header>
    );
}