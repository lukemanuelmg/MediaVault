import styles from './MediaCard.module.css'
import defaultImg from '../../assets/images/Question-Mark-PNG.png'

function MediaCard({title, imgSrc = defaultImg}) {

    if (imgSrc == "") imgSrc = defaultImg

    return (
        <div className={styles.mediaCardStyle}>
            <img src={imgSrc} className={styles.imgStyle}/>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default MediaCard