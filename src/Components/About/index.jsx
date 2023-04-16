import React from "react";
import styles from './about.module.css';
import aboutImg from '../../assets/about-us.png';

export default function About() {
    return (
        <div className={styles.about_container} id="about-us">
            <img src={aboutImg} className={styles.about_img}/>
            <article className={styles.about_article}>
                <h3>About Us</h3>
                <p>Welcome to the fascinating world of Epic Sauce!The touch that makes your food taste Better.
                In my country, Venezuela, sauces are a faithful companion to our meals.

                During the pandemic, we took the opportunity as a family to make dishes that day-to-day life did not allow us to make, and it was there that we remembered the recipe of a very dear uncle. When we began to taste the sauce, we began to relive wonderful moments, pleasant memories came to our minds and we had an excellent and unforgettable ¨sobremesa¨.

                From that moment on we wanted that feeling to be repeated in each one of the Venezuelans that today live outside of our country. God was opening the way and today we are here reviving that feeling in each one of you.

                We prepare our sauces like at home, with a magic touch of love and natural ingredients that are selected and worked taking care of every detail during the process to guarantee you a high-quality product. Discarding artificial flavor, preservatives, and anything that does not do good to our health.

                We have taken our sauces to meetings we have had with new friends from other countries and they have loved it. Because of the flavor and the goodness that our sauces have, I am sure that they will be able to incorporate it in some food plates of their land, besides it has two world ingredients, love, and quality.
                Awaken your senses and enjoy the taste of ¨Epic Sauce¨, Natural, Fresh, Tasty, and Healthy.</p>
            </article>
        </div>
    )
}