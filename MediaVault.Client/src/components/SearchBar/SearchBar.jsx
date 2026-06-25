import styles from './SearchBar.module.css'

function SearchBar({className, placeholder = "Search" , data = [], query, onChange}) {
    return (
        <div>
            <input type="search" onChange={onChange} value={query} placeholder={placeholder} className={`${styles.searchBarStyle} ${className}`}/>
            {data.length > 0 && 
                <div className={styles.dataResultListStyle}>
                { data.map((value) => {
                    return <div className={styles.dataResultStyle} key={value.id}>{value.name}</div>
                })}
            </div>
            }
     
        </div>
    )
}

export default SearchBar