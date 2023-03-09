import tpLogo from "../../img/icon-tp-web.webp";
import React from "react";

function LoginForm({handleLogin, onChangeUsername, onChangePassword}){
    return (
        <form className="login" onSubmit={handleLogin}>
            <img className="img-logo" src={tpLogo}/>
            <span className="tp-txt-purple"><b>Đăng Nhập</b></span>
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input maxLength={8} type="text" className="login__input" onChange={onChangeUsername} placeholder="Tài khoản (8 số đầu)" />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input type="password" className="login__input"  onChange={onChangePassword} placeholder="Mật khẩu" />
            </div>
            <button type={"submit"} className="button login__submit">
                <span className="button__text">Tra cứu ngay</span>
                <i className="button__icon fas fa-chevron-right"></i>
            </button>
        </form>
    )
}
export default LoginForm