import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignUp.css'; // CSS file for the styles
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import axiosInstance from '../services/axiosInstance'; // Import axios instance

const Login: React.FC = () => {
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [showPassword, setShowPassword] = useState(false); // State for showing password
    const [error, setError] = useState(''); // State for error handling
    const [loading, setLoading] = useState(false); // State for button loading
    const navigate = useNavigate(); // To navigate after login

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // Handle login form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting
        setError(''); // Clear any previous errors

        try {
            // Make the API call using axiosInstance
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password,
            });

            // Assuming the response contains a token
            localStorage.setItem('token', response.data.token);

            // Redirect to a protected route (e.g., /dashboard)
            navigate('/home');
        } catch (err: any) {
            // Handle error and set the error message
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false); // Stop loading when done
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
                                    <h1>Welcome Back! Your Journey Awaits</h1>
                                    <p>Log in to access exclusive Umrah packages, manage your bookings, and connect with agents.</p>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>

                                {/* Display error message if login fails */}
                                {error && <div className="error-message">{error}</div>}

                                <form onSubmit={handleLogin}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="email">
                                                Email <span className="required-field-color">*</span>
                                            </label>
                                            <div className="input-form-field">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="password">
                                                Password <span className="required-field-color">*</span>
                                            </label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                            <div className="forgot-password">
                                                <Link className="page-link" to="/ForgotPassword">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-btn">
                                        <button type="submit" className="create-account-btn" disabled={loading}>
                                            {loading ? 'Logging in...' : 'LOGIN'}
                                        </button>
                                        <p className="login-link">
                                            New to the platform? <Link className="page-link" to="/Signup">Create an account </Link>and start your spiritual journey today.
                                        </p>
                                    </div>
                                </form>

                                <div className="social-login">
                                    <div className="center-line-container">
                                        <div className="center-content">
                                            <div className="text-center">Login with</div>
                                        </div>
                                    </div>
                                    <div className="social-icons">
                                        <button className="icon-button">
                                            <img src="/msn-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                        <button className="icon-button">
                                            <img src="/google-logo.svg" alt="Google" className="social-icon" />
                                        </button>
                                        <button className="icon-button facebook">
                                            <img src="/facebook-logo.svg" alt="Facebook" className="social-icon" />
                                        </button>
                                        <button className="icon-button apple">
                                            <img src="/apple-logo.svg" alt="Apple" className="social-icon" />
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

export default Login;
