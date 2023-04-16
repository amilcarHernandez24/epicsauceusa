import React from "react";
import styles from './product.module.css';
import gallon from '../../assets/gallon.jpg';
import hlfGallon from '../../assets/hlf-gallon.jpg';
import bottle from '../../assets/bottle.jpg';

export default function Products() {
    return (
        <div className={styles.products_container} id="products">
            <h2 className={styles.product_title}>Meet Our Products</h2>
            <p className={styles.product_prg}>Our presentations are ideal for restaurants, food trucks and to take home!</p>
            <div className={styles.product_images}>
                <img src={gallon}/>
                <img src={hlfGallon}/>
                <img src={bottle}/>
            </div>
        </div>
    )
}