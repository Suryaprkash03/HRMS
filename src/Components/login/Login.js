import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './Login.module.css';
import DataContext from '../../context/DataContext';

const Login = () => {
    const { setLogin } = useContext(DataContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (location.pathname !== '/Login') {
            navigate('/Login', { replace: true });
        }
    }, [location, navigate]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const formSubmitter = (e) => {
        e.preventDefault();
        if (!input.email) return setErrorMessage('Please enter a valid email ID');
        if (!input.password)
            return setErrorMessage(
                'Password should have a minimum of 8 characters with a combination of uppercase, lowercase, numbers, and special characters'
            );
        if (input.email !== 'admin' || input.password !== 'saravanan') return setErrorMessage('Invalid email or password');
        else {
            setLogin(true);
            navigate('/Home');
        }
    };

    return (
        <div className={style.background_image}>
            <div className={style.login_box}>
                <div>
                    <img src="./assets/Logo.jpg" alt="" className={style.img} />
                </div>
                <form onSubmit={formSubmitter}>
                    {errorMessage.length > 0 && (
                        <div style={{ marginBottom: '10px', color: 'red', marginLeft: '30px' }}>{errorMessage}</div>
                    )}
                    <div className={style.user_box}>
                        <input
                            type="text"
                            name="email"
                            required
                            onChange={handleChange}
                            placeholder="Username"
                            className={style.input}
                        />
                    </div>
                    <div className={style.user_box}>
                        <input
                            type="password"
                            name="password"
                            required
                            onChange={handleChange}
                            placeholder="Password"
                            className={style.input}
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <a href="#" className={style.a}>Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
