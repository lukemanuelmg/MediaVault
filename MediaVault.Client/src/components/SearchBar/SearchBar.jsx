import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <div className={styles.searchBarStyle}>
            <input type="search" placeholder='Search'/>
        </div>
    )
}

export default SearchBar