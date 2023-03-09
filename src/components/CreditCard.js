import {memo} from "react";
import chipIcon from '../img/chipicon.png'
import '../css/card.css';
function CreditCard (){
    return (
        <div className="container">
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
                            <span>4800</span>
                            <span>4800</span>
                            <span>4800</span>
                            <span>4800</span>
                        </div>
                        <div className="date">
                            <span>11/25</span>
                        </div>
                    </div>
                    <div className="ownername">

                        <span>john smith</span>
                        <img src="https://imgur.com/KpIC2Cs.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CreditCard)