import React from 'react';
import './Login.css';

const Login = () => {

    return (
        <form>
            <h2>Log In</h2>
            <p>
                <label for="Email" className="floatLabel">Email</label>
                <input id="Email"
                    name="Email"
                    type="text"
                    required
                />
            </p>
            <p>
                <label for="password" className="floatLabel">Password</label>
                <input id="password"
                    name="password"
                    type="password"
                    required
                />
                <small>
                    * Password must contain at least 8 characters
                </small>
            </p>
            <p>
                <input
                    type="submit"
                    value="Log Me in"
                    id="submit"
                />
            </p>
        </form>
    )
}

export default Login
