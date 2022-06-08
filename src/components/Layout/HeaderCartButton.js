import React, { Fragment , useContext , useEffect , useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnAni, setBtnAni] = useState(false);

    const cartCtx = useContext(CartContext); 

    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClass = `${styles.button} ${btnAni ? styles.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnAni(true);

        const timer = setTimeout(() => {
            setBtnAni(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[items]);
    return (
        <Fragment>
            <button className={btnClass} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon/>
                </span>
                <span>Your cart</span>
                <span className={styles.badge}>{numberOfCartItems}</span>
            </button>
        </Fragment>
    )
};

export default HeaderCartButton;