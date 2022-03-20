import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Register = ({handleClose, isLogin, setIsLogin}) => {
    const api = process.env.REACT_APP_HOSTED_BASE_URL;
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [errorMsg, setErrorMsg] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    // const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsFetching(true);
        const newUser = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }
        
        try {
            const res = await axios.post(`${api}auth/register`,newUser);
            console.log(res);
            setIsFetching(false);
            setIsLogin(true);
            // handleClose();
        } catch (error) {
            console.log(error)
            setErrorMsg("email exists");
            setIsFetching(false);
            // setErrorMsg(error)
        }
        
    }

    return (
        <form action="" onSubmit={handleSubmit} className='login-form'>
            <h3 className='login-form-title'>Sign Up</h3>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' ref={name} required />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter email' ref={email} required />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='enter password' ref={password} required />
            <br />
            {errorMsg
                ? <label htmlFor="form" id="error">{errorMsg}</label>
                : ""}
            {isFetching
                ? (
                    <button className='btn btn-blue login-submit' disabled>Loading..</button>
                )
                : (
                    <button className='btn btn-blue login-submit'>Register</button>
                )}
        </form>
    )
}

export default Register