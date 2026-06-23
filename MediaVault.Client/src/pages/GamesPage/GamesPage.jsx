import Header from '../../components/Header/Header.jsx'
import TextCard from '../../components/TextCard/TextCard.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import styles from './GamesPage.module.css'
import MediaList from '../../components/MediaList/MediaList.jsx'
import { useEffect } from 'react';

function GamesPage() {

    
    useEffect(() => {
        getGames();
    }, []);

    async function getGames() {
        const url = "http://localhost:5280/api/games"
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
           console.error(error.message)
        }
    }


    return (
        <div className={styles.gamesPageStyle}>
            <Header/>

            <div className={styles.bodyArea}>
                <SearchBar/>
                <MediaList/>
            </div>

        </div>
    )
}

export default GamesPage