import React, {useState} from "react";

export default function Form() {
    const[formData, setFormData] = useState({firstName : "", lastName : "", email : ""})

    console.log(formData)
    function handleChange(event) {
        setFormData(prevName => {
            return {
                ...prevName,
                [event.target.name] : event.target.value
            }
        })
    }
        // console.log(event)
        // console.log("Clicked")
    
    
    return (
        <form className="bg-red-300 mt-40">
            <input
            type="text"
            placeholder="FirstName"
            onChange = {handleChange}
            name = "firstName"
            value = {formData.firstName}
            />
            <input
            type="text"
            placeholder="Last name"
            onChange={handleChange}
            name="lastName"
            value = {formData.lastName}
            />
            
            <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value = {formData.email}
            />
        </form>
    )
} 