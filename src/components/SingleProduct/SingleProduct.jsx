import "./SingleProduct.scss";

import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {FaCartPlus, FaInstagram, FaFacebookF, FaLinkedin, FaPinterest, FaTwitter} from "react-icons/fa"
import Prod from "../../assets/products/earbuds-prod-3.webp"

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page"> 
                <div className="left"> 
                    <img src={Prod} alt="" /> 
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Product Name</span>
                    <span className="desc ">Product Name</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                        <FaCartPlus size={20}/> 
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider"></span>

                    <div className="info-item">
                        <span className="text-bold">Category: 
                        <span> Head Phones</span>

                        </span>
                        <span className="text-bold">Share: 
                        <span className="social-icons"> 
                            <FaFacebookF size={16}/>
                            <FaInstagram size={16}/>
                            <FaLinkedin size={16}/>
                            <FaTwitter size={16}/>
                            <FaPinterest size={16}/>
                        </span>

                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    </div>;
};

export default SingleProduct;
