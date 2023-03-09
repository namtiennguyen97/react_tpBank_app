import './css/card.css';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import {HOST, statusCode} from "./configEnv";
import {toast} from "react-toastify";
import chipIcon from "./img/chipicon.png";
import {logDOM} from "@testing-library/react";

function Home(){
    const navigate = useNavigate();
    const location = useLocation()
    const [token, setToken] = useState(location.state?.tp_token ?? localStorage.getItem('tp_token'))
    const [userInfo, setUserInfo] = useState([])

    useEffect(()=> {
        //check auth
        if(localStorage.getItem('tp_token') === null){
            return navigate('/login')
        }
        //end of check auth

        //if token exist
        axios.get(`${HOST}/api/get-account?token=${token}`)
            .then(res => {
                if(res.data.code === statusCode.OK){
                    setUserInfo(res.data.data)
                } else{
                    // localStorage.removeItem('tp_token')
                    // navigate('/login')
                    // toast.error(res.data.msg, {
                    //     toastId: customERR
                    // })
                }
            })
    },[])

    return (
        <div className="container">
            {userInfo.map((item, index) =>
                (
                    <div key={index}>
                        <div className="card-outer">
                            <div className="card">
                                <span className="circle"></span>
                                <div className="top-div">
                                    <div className="chip-image">
                                        <img src={chipIcon} />
                                    </div>

                                    <div className="plus-sign">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div className="card-details">
                                    <div className="card-number">
                                        <span>{item.BBAN}</span>
                                    </div>
                                    <div className="date">
                                        <span>Loại thẻ: </span>
                                    </div>
                                </div>
                                <div className="ownername">

                                    <span>{item.name}</span>
                                    <img src="https://imgur.com/KpIC2Cs.png" />

                                </div>
                            </div>
                        </div>
                        <div className="menu-board">
                            adadawd
                        </div>
                    </div>
                )
            )}


        </div>
    )
}
export default Home