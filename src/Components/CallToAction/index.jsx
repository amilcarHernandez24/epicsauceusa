import React from "react";
import styles from './cta.module.css';

export default function CallToAction() {
    return (
        <div className={styles.cta_container} id="home">
            <h1 className={styles.cta_title}>The touch that makes your food taste <span>better</span></h1>
            <button className={styles.cta_btn}>Contact Us</button>
        </div>
    )
}