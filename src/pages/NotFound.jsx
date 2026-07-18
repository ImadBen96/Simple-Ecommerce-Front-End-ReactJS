import React from 'react'
import cancel_order from "../assets/images/notfound.webp";
import {Link} from "react-router-dom";
import  "./FrontEnd/cancel/cancel.css"
const NotFound = () => {
    return (
        <div className="cancel_order_page">
            <div className="page-404">

                <div className="illustration not-found">
                    <img src={cancel_order} alt="cancel Order" />
                </div>

                <h1>Oops!</h1>
                <p>Sorry, we couldn't find that page. Try going back or checking out our homepage. </p>
                <Link className="btn-home" to={"/"} >Back To Home</Link>

            </div>

        </div>
    )
}

export default NotFound
