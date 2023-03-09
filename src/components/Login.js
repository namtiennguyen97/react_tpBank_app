import '../css/login.css';
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {HOST, statusCode} from "../configEnv";
import tpLogo from '../img/icon-tp-web.webp';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from 'react-router-dom';
import LoginForm from "./login-form/LoginForm";

function Login(){
    const navigate = useNavigate();
    // const location = useLocation()

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const customOK = "custom-id-success"; //prevent toastr duplicate
    const customERR = "custom-id-error"; //prevent toastr duplicate

    function handleLogin(e) {
        e.preventDefault()
        axios.post(`${HOST}/api/get-token`, {
            username: userName,
            password: password
        })
            .then(res => {
                if(res.data.code === statusCode.OK){
                    toast.success(res.data.msg, {
                        toastId: customOK
                    })
                    //set authenticate
                    localStorage.setItem('tp_token', res.data.data.access_token)
                    return navigate('/',{state : {tp_token: res.data.data.access_token}}) //return and send token
                } else{
                    toast.error(res.data.msg, {
                        toastId: customERR
                    })
                }
            })
            // .catch(error => console.log('this is err: ',error));
    }

    const onChangeUsername = (e) => {
      setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value)
    }
    return (
        <div>
            <ToastContainer />
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <LoginForm handleLogin={handleLogin} onChangeUsername={onChangeUsername} onChangePassword={onChangePassword} />
                        <div className="social-login">
                            <h3>An toàn</h3>
                            <div className="social-icons">
                                <span>Sử dụng tài khoản <b className="tp-txt">TPBank</b> thực. Login để lấy access token.</span>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login