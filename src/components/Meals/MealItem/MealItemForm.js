import React, { Fragment , useRef , useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = props => {
    const amountInputRef = useRef(); 
    const [valid, setValid] = useState(true)
    const submitHandler = event => {
        event.preventDefault();
    
        const enteredAmount = +(amountInputRef.current.value);
        console.log(enteredAmount);
        if(enteredAmount < 1 || enteredAmount > 5){
            setValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    }
    return (
        <Fragment>
            <form className={styles.form} onSubmit={submitHandler}>
                <Input ref={amountInputRef} label="Amount" input={{id:'amount_'+ props.id, type:'number', min:'1', max:'5', step:'1', defaultValue:'1'}}/>
                <button>+ Add</button>
                {!valid && <p>Please enter a valid amount (1-5)</p>}
            </form>
        </Fragment>
    )
};

export default MealItemForm;