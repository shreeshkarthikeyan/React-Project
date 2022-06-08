import React, { Fragment } from "react";
import styles from "./Card.module.css";

const Card = (props) => {

    return (
        <Fragment>
            <div className={styles.card}>{props.children}</div>
        </Fragment>
    )
};

export default Card;
