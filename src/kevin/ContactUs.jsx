import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: '' 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.firstName.trim()) {
            validationErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            validationErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = "Phone number is required";
        } else if (isNaN(formData.phoneNumber)) {
            validationErrors.phoneNumber = "Phone number should be numeric";
        }
        if (!formData.message.trim()) {
           validationErrors.message = "Message is required";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                // Simulate a successful API call with a delay
                setTimeout(() => {
                    alert('Thank you for reaching out');
                    // Redirecting  the user after successful submission
                    // navigate("/success");
                }, 1000)
            } catch (err) {
                console.log(err)
            }
        }
    };

    return (
        <div id='contact' className="mt-5">
            <form className="flex flex-col  border-2 gap-2 justify-evenly w-2/2 mx-5 text-center hover:border-blue-500 lg:w-1/2 h-72 lg:ml-10 bg-blue-200" onSubmit={handleSubmit}>
                <div><h1 className="text-xl text-center font-sans sm">Contact Us</h1></div>
                <div className="flex flex-row mx-5 justify-center">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="text-center mx-2 sm:ml-1"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="text-center mx-2 "
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
                {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={`text-center mx-5 ${errors.email ? 'error' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="text-red-500">{errors.email}</div>}
                <input
                    type="tel"
                    placeholder="Enter your Phone number"
                    className={`text-center mx-5 ${errors.phoneNumber ? 'error' : ''}`}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <div className="text-red-500">{errors.phoneNumber}</div>}
                <input
                    type="text"
                    placeholder="Your Message"
                    className={`text-center mx-5 h-1/2 ${errors.message ? 'error' : ''}`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="text-red-500">{errors.message}</div>}
                <button className="bg-blue-300 w-2/12 rounded-lg hover:bg-blue-400" type="submit">Submit</button>
            </form>
        </div>
    );
}
