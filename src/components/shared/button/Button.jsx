import styles from './button.module.css'

const Button = ({buttonvalue,classname})=>{
    return<>
        <button className={`${styles['button-'+classname]}`}>{buttonvalue}</button>
    </>
}

export default Button