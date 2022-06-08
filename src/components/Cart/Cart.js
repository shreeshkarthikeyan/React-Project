import React, { Fragment , useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item});
    }

    const cartItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map(
        item => <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>;
    return (
        <Fragment>
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                    {hasItems && <button className={styles.button}>Order</button>}
                </div>
            </Modal>
        </Fragment>
    )
};

export default Cart;

