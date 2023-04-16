import React, {useState} from "react";
import styles from './header.module.css';
import logoImg from '../../assets/logo.png'
import igLogo from '../../assets/instagram-el.png'

export default function Header() {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        window.scrollY > 50 ? setColor(true) : setColor(false)
    }
    window.addEventListener('scroll', changeColor);

    return (
        <nav className={color ? styles.scrolled : styles.navbar}>
            <a href="#home">
                <img className={styles.navbar_logo} src={logoImg}/>
            </a>
            <ul className={styles.nav_menu}>
                <li className={styles.nav_item}>
                    <a href="#products" className={styles.nav_links}>
                        Our Products
                    </a>
                </li>
                <li className={styles.nav_item}>
                    <a href="#about-us" className={styles.nav_links}>
                        About Us
                    </a>
                </li>
                <li className={styles.nav_item}>
                    <a href="#contact-us" className={styles.nav_links}>
                        Contact Us
                    </a>
                </li>
                <li className={styles.nav_item}>
                    <a href="https://www.instagram.com/epicsaucemiami/" target="_blank" className={styles.nav_links}>
                        <img className={styles.instagram_img} src={igLogo}/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}