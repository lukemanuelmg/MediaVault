import styles from './Header.module.css'
import {Link} from 'react-router'

function Header() {

    return (
        <header className={styles.headerStyle}>
            <h1 className={styles.title}>MediaVault</h1>

            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tv">TV Shows</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header