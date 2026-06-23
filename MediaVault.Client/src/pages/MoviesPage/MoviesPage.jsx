import Header from '../../components/Header/Header.jsx'
import TextCard from '../../components/TextCard/TextCard.jsx'
import styles from './MoviesPage.module.css'

function MoviesPage() {

    return (
        <div className={styles.moviesPageStyle}>
            <Header/>
            <TextCard text={"Movie support in progress."} className={styles.textBoxStyle}/>
        </div>
    )
}

export default MoviesPage