import classes from './Button.module.css'

const Button =(props)=>{
    return(
        <button
        className={`${classes.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.children}
        </button>
    )
}
export default Button;