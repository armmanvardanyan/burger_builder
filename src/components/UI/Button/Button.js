import React,{useContext} from 'react'
import classes from './Button.module.css'


export const Button = (props) => {
    return <button
        onClick={props.clicked}
        className={[classes.Button,classes[props.classNames]].join(" ")}
        disabled = {props.disabled}
    >{props.children}
    </button>
}