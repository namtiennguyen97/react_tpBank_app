import '../login.css';
import {useState} from "react";
import axios from "axios";
import {statusCode} from "../configEnv";
import tpLogo from '../img/icon-tp-web.webp';

function Login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/get-token`, {
            username: userName,
            password: password
        })
            .then(res => {
                if(res.data.code === statusCode.OK){
                    console.log('ok')
                } else{
                    console.log('err')
                }
            })
            // .catch(error => console.log('this is err: ',error));
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}>
                        <img className="img-logo" src={tpLogo}/>
                        <span className="tp-txt-purple"><b>Đăng Nhập</b></span>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input maxLength={8} type="text" className="login__input" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Tài khoản (8 số đầu)" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" />
                        </div>
                        <button type={"submit"} className="button login__submit">
                            <span className="button__text">Tra cứu ngay</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
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
    )
}
export default Login