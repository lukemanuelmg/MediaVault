import Button from '../../../components/Button/Button.jsx'
import styles from './AddGameModal.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import SearchBar from '../../../components/SearchBar/SearchBar.jsx'
import { useState } from 'react'
import { handleQueryChange } from '../../../components/SearchBar/SearchBar.js'
import { fetchSearchResults } from './AddGameModal.js'

function AddGameModal({modalRef}) {

    const [query, setQuery] = useState("");
    const [searchResults, setsearchResults] = useState([])

    async function onChange(event) {
        handleQueryChange(event, setQuery)
        const results = await fetchSearchResults(query)

        if (event.target.value.length === 0) {
            setsearchResults([])
        } else {
            setsearchResults(results)
        }

    }

    return (
        <dialog ref={modalRef} className={styles.modalStyle}>

            <div className={styles.innerModal}>
                <Button onClick={() => {modalRef.current.close()}} className={styles.closeBtn}>
                    <IoCloseOutline size={25}/>
                </Button>
                <h1 className={styles.title}>Add Game</h1>
            
                <div className={styles.section}>
                    <h2 className={styles.label}>Title</h2>
                    <SearchBar query={query} onChange={(event) => {onChange(event)}}  data={searchResults} className={styles.searchBarStyle} placeholder='Search game title'/>
                </div>



                <Button text='Submit' className={styles.submitBtnStyle}/>
            
            </div>
          
        </dialog>
    )
}

export default AddGameModal