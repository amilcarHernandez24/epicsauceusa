import React from "react";
import styles from './makeOrder.module.css';
import epicImg from '../../assets/logo2.png';
import cilantroImg from '../../assets/cilantro.png';
import Form from "./Form";

export default function MakeOrder() {
    return (
        <div className={styles.order_box}>
            <section className={styles.header}>
                <h2 className={styles.title}>Make Your Order</h2>
                <p>Made with natural ingredients an a touch of love, we take care of every detail of the process to guarantee you a high quality product</p>
            </section>
            <section className={styles.content}>
                <div className={styles.left_content}>
                    <p>Phone: + 1 123-456-7890</p>
                    <p>Email: testemail@email.com</p>
                    <img src={epicImg} alt="epic sauce logo" className={styles.logo_img}/>
                    <img src={cilantroImg} alt="cilantro image" className={styles.cilantro_img}/>
                </div>
                <div className={styles.right_content}>
                    <Form />
                </div>
            </section>
        </div>
    )
}