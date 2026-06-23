import styles from './MediaList.module.css'
import MediaCard from '../MediaCard/MediaCard'
import TextCard from '../TextCard/TextCard'

function MediaList({media = []}) {

    const mediaList = media.map(game => <MediaCard key={game} title={game.title} imgSrc={game.cover_name}/>)

    if (mediaList.length === 0) {
        return (
            <TextCard text={"No games stored in the vault."} className={styles.textBoxStyle}/>
        )
    }

    return (
        <div className={styles.mediaListStyle}>
            {mediaList}
        </div>
    )
}

export default MediaList