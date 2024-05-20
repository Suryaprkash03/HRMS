import { useState } from 'react';
import './Login.css';



const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, seterrorMessage] = useState('');
    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const formSubmitter = e => {
        e.preventDefault();
        if (!input.email) return seterrorMessage('Please enter valid email id');
        if (!input.password)
            return seterrorMessage(
                'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
            );
        if (input.email !== 'admin' || input.password !== 'admin') return seterrorMessage('Invalid email or password');
    };


    return (
        <div class="login-box">
            <div>
                <img src="./assets/Logo.jpg" alt="" />
            </div>
            <form onSubmit={formSubmitter}>
                {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red', marginLeft: '30px' }}>{errorMessage}</div>}
                <div class="user-box">
                    <input type="text" name="email" required="" onChange={handleChange} placeholder='Username' />
                </div>
                <div class="user-box">
                    <input type="password" name="password" required="" onChange={handleChange} placeholder='Password' />
                </div>
                <div >
                    <button>Login</button>
                </div>
                <div >
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        </div>

    );
};

export default Login;