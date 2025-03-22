import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./Login.css";

function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        setIsLoggedIn(true);
        navigate("/main");
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        setIsLoggedIn(true);
        navigate("/main");
    };

    const handleGoogleFailure = () => {
        console.log("Google Login Failed");
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input-field"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input-field"
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn">Login</button>
                    </form>

                    <p>Or login with:</p>

                    {/* Google Login */}
                    <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />

                    {/* Instagram & Microsoft Login Buttons - Styled like Google */}
                    <a href="https://www.instagram.com/accounts/login/" className="social-btn instagram-btn">
    <img src="/images/instagram.jpg" alt="Instagram Logo" className="social-logo" />
    Sign in with Instagram
</a>

<a href="https://login.microsoftonline.com/" className="social-btn microsoft-btn">
    <img src="/images/microsoft.png" alt="Microsoft Logo" className="social-logo" />
    Sign in with Microsoft
</a>


                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
