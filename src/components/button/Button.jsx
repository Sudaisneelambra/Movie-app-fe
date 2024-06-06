import './button.css'

const Button = ({buttonvalue,classname})=>{
    return<>
        <button className={`button-${classname}`}>{buttonvalue}</button>
    </>
}

export default Button