import React, {useContext} from "react";
import "./Item.css";
import arrow_icon from "../assets/arrow.png";
import {Link} from "react-router-dom";
import {ShopContext} from "../../../Context/Front/ShopContext.jsx";
const Item = (props) => {
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={ window.scrollTo(0,0) } className="item-image" src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices"> <div style={{color: "#994bc2"}} className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-old">
                        ${props.old_price}
                    </div>
            </div>
            <div  style={{background: "#994bc2"}} className="item_cart">
                 <Link to={`/product/${props.id}`}>
                    <div style={{color: "white"}}>Add To Cart</div>
                 </Link>
            </div>
        </div>
    );
}

export default Item;
