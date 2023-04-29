import React from "react";
import styles from './makeOrder.module.css';
import epicImg from '../../assets/logo2.png';
import cilantroImg from '../../assets/cilantro.png';

export default function MakeOrder() {
    return (
        <div className={styles.order_box}>
            <section className={styles.header}>
                <h2 className={styles.title}>Make Your Order</h2>
                <p>Made with natural ingredients an a touch of love, we take care of every detail of the process to guarantee you a high quality product</p>
            </section>
            <section className={styles.content}>
                <div className={styles.left_content}>
                    <h3>Phone: + 1 123-456-7890</h3>
                    <h3>Email: testemail@email.com</h3>
                    <img src={epicImg} alt="epic sauce logo" className={styles.logo_img}/>
                    <img src={cilantroImg} alt="cilantro image" className={styles.cilantro_img}/>
                </div>
                <div>
                    <h4>Formulario</h4>
                </div>
            </section>
        </div>
    )
}