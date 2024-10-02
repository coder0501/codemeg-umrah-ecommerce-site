import React from 'react';
import './SignUp.css'; // CSS file for the styles

const EmailConfirmation: React.FC = () => {

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
                                <div className="signup-form-heading">
                                    <h1>Email Confirmation</h1>
                                    <p>
                                    <span><strong><ul>Check Your Email,</ul></strong></span> We’ve sent a password reset link to your email. Please check your inbox (and your spam folder if you don’t see it) to reset your password.
                                    </p>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="email"> Email <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input type="email" id="email" placeholder="Enter your mail ID" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        <button type="submit" className="create-account-btn">Send Reset Link</button>
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

export default EmailConfirmation;
