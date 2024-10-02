import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignUp.css'; // CSS file for the styles


const ResetPassword: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

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
                            <div className="signup-form-content forgot-password-content">
                                <div className="signup-form-heading" id="reset-password-content">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#1C1917" />
                                        </svg>
                                    </span>
                                    <div>
                                        <h1>Reset Your Password?</h1>
                                        <p>Enter a new password for your account.</p>
                                    </div>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="input-group">

                                            <label htmlFor="password">New Password <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    placeholder="Enter password"
                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
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
                                                    placeholder="Confirm password"
                                                />
                                                <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        <button type="submit" className="create-account-btn">Reset Password</button>
                                    </div>
                                </form>
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

export default ResetPassword;
