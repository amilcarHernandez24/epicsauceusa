import React from "react";
import styles from './testimonials.module.css';

export default function Testimonials() {
    return (
        <div className={styles.testimonials_container}>
            <h3 className={styles.testimonials_title}>
                Client Testimonials
            </h3>
            <div className={styles.testimonials_clients}>
                <div className={styles.testimonials_el}>
                    <p>“Discovering Epic Sauce has been like finding a little piece of home in a jar. It is unique, made with natural ingredients, no additives, and no preservatives, which is felt in its authentic and fresh taste. I always have it at home and share it with my friends and family on every occasion. Simply delicious!”
                    </p>
                    <h4>- Carolina García</h4>
                </div>
                <div className={styles.testimonials_el}>
                    <p>“Since I tasted these sauces, they have become a must-have in my home. It is a mixture that enhances the flavor of any food plate. Best of all, I can be sure that I am consuming a sauce made with natural ingredients and gluten-free. I enjoy how it connects me to my memories and my culture in every bite. These are sauces that I will always have in my kitchen.”
                    </p>
                    <h4>- María Verónica Espinoza</h4>
                </div>
                <div className={styles.testimonials_el}>
                    <p>“The versatility of Epic Sauce sauces allows me to combine them with any food plate, turning an ordinary meal into a gastronomic experience. Even though I am not Venezuelan, the natural flavor and the knowledge that I am eating healthy allow me to trust this product with my eyes closed.”
                    </p>
                    <h4>- Yalinet Ramos</h4>
                </div>
            </div>
        </div>
    )
}