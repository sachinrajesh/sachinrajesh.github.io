import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div>Sachin</div>
            <div>
                <div>Projects</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </nav>
    )
}