import React from 'react';
import './Contact.css';

const Contact = ()=>{
    return(
        <div className="contact-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <p>
                    Why wait to reach your goals in business? Our team of dedicated problem solvers are eager to take on any challenge in order to assist you.
                </p>
                <form>
                    <div>
                        <label>Name*</label>
                        <input type="text" name="name" required />
                    </div>
                    <div>
                        <label>Organization*</label>
                        <input type="text" name="organisation" required />
                    </div>
                    <div>
                        <label>Contact Number*</label>
                        <input type="tel" name="contactNumber" required />
                    </div>
                    <div>
                        <label>Region*</label>
                        <select name="region" required>
                        <option value="">Select Region</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <div>
                        <label>Inquiry Type*</label>
                        <select name="inquiryType" required>
                            <option value="">Select Inquiry Type</option>
                            <option Value="Free Digital Consultation">Free Digital Consultation</option>
                            <option Value="Website Development">Website Development</option>
                            <option Value="App Development">App Development</option>
                            <option Value="Digital Marketing">Digital Marketing</option>
                            <option Value="IT Consultancy">IT Consultancy</option>
                            <option Value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Message*</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <button type="submit">Submit Request</button>
                </form>
            </div>
        </div>
    ); 
};
export default Contact;