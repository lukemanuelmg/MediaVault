import Header from '../../components/Header/Header.jsx'
import TextCard from '../../components/TextCard/TextCard.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import styles from './GamesPage.module.css'
import MediaList from '../../components/MediaList/MediaList.jsx'
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button.jsx'
import { getGames } from './GamesPage.js'
import AddGameModal from './AddGameModal/AddGameModal.jsx'
import { openModal } from './AddGameModal/AddGameModal.js'
import { handleQueryChange } from '../../components/SearchBar/SearchBar.js'

function GamesPage() {

    const [query, setQuery] = useState("")

    const modal = useRef(null)
    
    useEffect(() => {
        getGames();
    }, []);

    return (
        <div className={styles.gamesPageStyle}>
            <Header/>

            <div className={styles.bodyArea}>
                <SearchBar onChange={(event) => {handleQueryChange(event, setQuery)}}/>
                <div className={styles.buttonRowStyle}>
                    <Button onClick={() => {openModal(modal)}} text='Add Game'/>
                </div>
                <MediaList/>

                <AddGameModal modalRef={modal}/>

            </div>

        </div>
    )
}

export default GamesPage