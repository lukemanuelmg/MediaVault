import styles from './Button.module.css'

function Button({text = "This is a button", onClick, className, children}) {

    return (
        <button onClick={onClick} className={`${styles.buttonStyle} ${className}`}>
            {children ||  <p>{text}</p>}
        </button>
    )
}

export default Button