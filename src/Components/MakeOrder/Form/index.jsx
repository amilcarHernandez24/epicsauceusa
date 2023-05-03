import React from "react"
import styles from './form.module.css'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        green12: "",
        green12Input: "",
        greenHlf: "",
        greenHlfInput: "",
        greenGall: "",
        greenGallInput: "",
        spicy12: "",
        spicy12Input: "",
        spicyHlf: "",
        spicyHlfInput: "",
        spicyGall: "",
        spicyGallInput: "",
        comments: ""
    })

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form className={styles.form_container}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className={styles.txt_inp}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className={styles.txt_inp}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className={styles.txt_inp}
            />
            <input
                type="number"
                placeholder="Number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                className={styles.txt_inp}
            />
            <input
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formData.address}
                className={styles.txt_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="green12"
                    onChange={handleChange}
                    name="green12"
                    value={formData.green12}
                />
                Green Sauce 12 Oz $11
            </label>
            <input
                type="number"
                name="green12Input"
                min="0"
                max="5"
                value={formData.green12Input}
                className={styles.qty_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="greenHlf"
                    onChange={handleChange}
                    name="greenHlf"
                    value={formData.greenHlf}
                />
                Green Sauce Half Gallon $34
            </label>
            <input
                type="number"
                name="greenHlfInput"
                min="0"
                max="5"
                value={formData.greenHlfInput}
                className={styles.qty_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="greenGall"
                    onChange={handleChange}
                    name="greenGall"
                    value={formData.greenGall}
                />
                Green Sauce Gallon $62
            </label>
            <input
                type="number"
                name="greenGallInput"
                min="0"
                max="5"
                value={formData.greenGallInput}
                className={styles.qty_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="spicy12"
                    onChange={handleChange}
                    name="spicy12"
                    value={formData.spicy12}
                />
                Spicy Sauce 12 Oz $11
            </label>
            <input
                type="number"
                name="spicy12Input"
                min="0"
                max="5"
                value={formData.spicy12Input}
                className={styles.qty_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="spicyHlf"
                    onChange={handleChange}
                    name="spicyHlf"
                    value={formData.spicyHlf}
                />
                Spicy Sauce Half Gallon $34
            </label>
            <input
                type="number"
                name="spicyHlfInput"
                min="0"
                max="5"
                value={formData.spicyHlfInput}
                className={styles.qty_inp}
            />
            <label>
                <input
                    type="checkbox"
                    id="spicyGall"
                    onChange={handleChange}
                    name="spicyGall"
                    value={formData.spicyGall}
                />
                Spicy Sauce Gallon $62
            </label>
            <input
                type="number"
                name="spicyGallInput"
                min="0"
                max="5"
                value={formData.spicyGallInput}
                className={styles.qty_inp}
            />
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                className={styles.comments}
            />
            <button className={styles.form_btn}>
                SENDE ORDER
            </button>
        </form>
    )
}