import Header from '../../components/Header/Header.jsx'
import TextCard from '../../components/TextCard/TextCard.jsx'
import styles from './TV_Page.module.css'

function TV_Page() {

    return (
        <div className={styles.TV_PageStyle}>
            <Header/>
            <TextCard text={"TV Show support in progress."} className={styles.textBoxStyle}/>
        </div>
    )
}

export default TV_Page