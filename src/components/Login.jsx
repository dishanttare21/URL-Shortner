import React, { useContext, useRef, useState } from 'react'
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';

const Login = ({ handleClose }) => {
    const email = useRef();
    const password = useRef();
    const [errorMsg, setErrorMsg] = useState(null);
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCredentials = {
            email: email.current.value,
            password: password.current.value
        }

        console.log(userCredentials);
        try {
            const res = await loginCall(userCredentials, dispatch);
            if (res.status !== 200) {
                setErrorMsg(res.data)
                return;
            }
        } catch (err) {
            console.log(error);
        }
    }
    console.log(user);
    return (
        <form action="" onSubmit={handleSubmit} className='login-form'>
            <h3 className='login-form-title'>Sign In</h3>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter email' ref={email} />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='enter password' ref={password} />
            <br />
            {error
                ? <label htmlFor="form" id="error">{error}</label>
                : ""}
            {isFetching
                ? (
                    <button className='btn btn-blue login-submit' disabled>Loading..</button>
                )
                : (
                    <button className='btn btn-blue login-submit'>Login</button>
                )}
        </form>
    )
}

export default Login