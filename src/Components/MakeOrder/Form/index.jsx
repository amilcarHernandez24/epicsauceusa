import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        green12: ""
    })

    console.log(formData.comments)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="number"
                placeholder="Number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
            />
            <input
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formData.address}
            />
            <label for="mail">
                <input
                    type="checkbox"
                    id="gree12"
                    onChange={handleChange}
                    name="gree12"
                    value={formData.green12}
                />
                Green Sauce 12 Oz $11
            </label>
            {/* <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            /> */}
        </form>
    )
}