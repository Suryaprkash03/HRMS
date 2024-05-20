import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';



const Login = ({ setLogin }) => {
    const navigate = useNavigate()
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
        if (input.email !== 'admin' || input.password !== 'admin') return seterrorMessage('Invalid email or password')
        else {
            navigate('/Home')
            setLogin(false)
        }
        ;
    };


    return (
        <div className={style.background_image}>
            <div className={style.login_box}>
                <div>
                    <img src="./assets/Logo.jpg" alt="" className={style.img} />
                </div>
                <form onSubmit={formSubmitter}>
                    {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red', marginLeft: '30px' }}>{errorMessage}</div>}
                    <div class={style.user_box}>
                        <input
                            type="text"
                            name="email"
                            required=""
                            onChange={handleChange}
                            placeholder='Username'
                            className={style.input} />
                    </div>
                    <div class={style.user_box}>
                        <input
                            type="password"
                            name="password"
                            required=""
                            onChange={handleChange}
                            placeholder='Password'
                            className={style.input} />
                    </div>
                    <div >
                        <button>Login</button>
                    </div>
                    <div >
                        <a href="#" className={style.a}>Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;