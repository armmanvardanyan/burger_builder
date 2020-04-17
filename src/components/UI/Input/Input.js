import React from 'react'
import classes from './Input.module.css';


const input = (props) => {

    let inputelement = null;

    const classNames = [classes.InputElement]

    if(props.valid && props.shouldValidate && props.value){
        classNames.push(classes.Success)
    }
    if(!props.valid && props.shouldValidate && props.value){
        classNames.push(classes.Danger)
    }
   
    switch (props.elementtype) {
        case "input":
            inputelement = <input
                className={classNames.join(" ")}
                {...props.elementconfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case "select":
            inputelement = (
                <select
                    className={classNames.join(" ")}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementconfig.options.map(opt => (
                        <option
                            value={opt.value}
                            key={opt.value} >
                            {opt.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputelement = <input  {...props}
                onChange={props.changed}
                className={classNames.join(" ")} />


    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputelement}
        </div>
    )
}

export default input