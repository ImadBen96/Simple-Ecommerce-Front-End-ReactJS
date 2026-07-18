import React from 'react';
import {Link} from "react-router-dom";
import cancel_order from "../../../assets/images/cancel_order.svg"
import "./cancel.css"
function Cancel() {
    return (
        <div className="cancel_order_page">
            <div className="page-404">

                <div className="illustration">
                   <img src={cancel_order} alt="cancel Order" />
                </div>

                <h1>Cancel Order Page!</h1>
                <Link className="btn-home" to={"/"} >Back To Home</Link>

            </div>

        </div>
    );
}

export default Cancel;