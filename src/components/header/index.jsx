import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header } >
            <a className={styles.logo} href='' >ToDoApp</a>
            <nav className={styles.navbar }>
                <a className={styles.link} href=''>about</a>
                <a className={styles.link} href=''>contacts</a>
                
            </nav>
        </header>
    );
}