import styles from './button.module.css'

const Button = ({buttonvalue,classname,handleClick})=>{
    return<>
        <button className={`${styles['button-'+classname]}`} onClick={handleClick}>{buttonvalue} </button>
    </>
}

export default Button