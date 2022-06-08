import React, { Fragment ,  } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {

    return (
        <Fragment>
            <div className={styles.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
        </Fragment>
    )
});
 
export default Input;