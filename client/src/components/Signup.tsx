import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for API calls
import './SignUp.css';

// Define the shape of the form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggling password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // Handle field change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Simple form validation
    const validate = () => {
        const newErrors: any = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    // Submit form data to the API
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Inside handleSubmit");

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                // Send the form data to your Node.js backend using Axios
                console.log("Inside handleSubmit", formData);

                const response = await axios.post('http://localhost:5000/auth/signup', formData);
                console.log('SignUp successful:', response.data);
                // Handle success (e.g., redirect to login, show success message, etc.)
            } catch (error) {
                console.error('SignUp error:', error);
            }
        }
    };

    return (
        <section>
            <div className="signup-form">
                <div className="signup-container">
                    <div className="signup-form-main">
                        <div className="signup-form-content-img">
                            <div className="signup-form-headerImg">
                                <span>
                                    <img src="/Umrah.png" alt="" />
                                </span>
                            </div>
                            <div className="signup-form-content">
                                <div className="signup-form-heading">
                                    <h1>Join Us on Your Spiritual Journey</h1>
                                    <p>Create an account to explore exclusive Umrah packages, track your bookings, and connect with trusted agents.</p>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="firstName">First Name *</label>
                                            <div className="input-form-field">
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your first name"
                                                />
                                                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="lastName">Last Name *</label>
                                            <div className="input-form-field">
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your last name"
                                                />
                                                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="email">Email <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                />
                                                {errors.email && <span className="error-message">{errors.email}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="password">Password <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="Enter password"
                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                                {errors.password && <span className="error-message">{errors.password}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="confirmPassword">Confirm Password <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    id="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    placeholder="Confirm password"
                                                />
                                                <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        <button type="submit" className="create-account-btn">Create Account</button>
                                        <p className="login-link">Already have an account? <Link className="page-link" to="/Login">Log in here.</Link></p>
                                    </div>
                                </form>

                                {/* Social Login Section */}
                                <div className="social-login">
                                    <div className="center-line-container">
                                        <div className="center-content">
                                            <div className="text-center">Or sign up with</div>
                                        </div>
                                    </div>
                                    <div className="social-icons">
                                        <button className="icon-button">
                                            <img src="/msn-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                        <button className="icon-button">
                                            <img src="/google-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                        <button className="icon-button facebook">
                                            <img src="/facebook-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                        <button className="icon-button apple">
                                            <img src="/apple-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup-image">
                        <img src="/umrah-img.png" alt="Umrah" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
