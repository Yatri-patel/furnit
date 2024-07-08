import React, { useContext } from 'react';

import yourcart from './Images/yourcartimage.png'
import deletebutton from './Images/deletecartimage.svg'
import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import CartCounter from './CartCounter'
import { CartContext } from './CartContext';

export default function Cart(props) {

    const { cartItems, removeFromCart } = useContext(CartContext);
// Calculate the subtotal
const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (

        <>
            <div className="your-cart">
                <div className="section-6-wrapper">
                    <h1 className='your-cart-heading fw-bold'>Your Cart</h1>
                    <div className="your-cart-left-right">

                        <div className="your-cart-left">
                            <div className="container">
                                <div className="row">

                                    {cartItems.length === 0 ? (
                                        <p >Your Cart is Empty</p>
                                    ) : (
                                        cartItems.map((item) => (
                                            <div className="container">
                                                <div className="row cart-row-flex">

                                                    <div className="col-2">
                                                        <img src={item.imgscr} alt="" className='your-cart-image' />

                                                    </div>
                                                    <div className="col-3 item-padding">
                                                        <h4 className='fw-bold'>{item.title}</h4>
                                                        <h4 className='fw-bold'>${item.price}</h4>
                                                    </div>

                                                    <div className="col-4 counter pl-5">
                                                        <CartCounter price={item.price} />
                                                    </div>
                                                    {/* 
                                                    <div className="col-2">
                                            
                                                    </div> */}
                                                    {/* Delete */}
                                                    <div className="col-2 del-btn">
                                                        <img onClick={() => removeFromCart(item)} src={deletebutton} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* <div className="row cart-row-2">
                                    <div className="col-2">
                                        <img src={yourcart} alt="" className='your-cart-image' />
                                    </div>
                                    <div className="col-4">
                                        <h4 className='fw-bold'>Teakwood chair</h4>
                                        <h4 className='fw-bold'>$24.00</h4>
                                    </div>

                                    <div className="col-2 counter">
                                        <CartCounter />
                                    </div>

                                    <div className="col-2">
                                        <h4 className='fw-bold'>
                                            $24.00
                                        </h4>
                                    </div>
                                    <div className="col-2">
                                        <img src={deletebutton} alt="" />
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="your-cart-right">
                            <div className="cart-total px-4">
                                <div className="container cart-total">
                                    <div className="row">

                                        <div className="col-12">
                                            <h2 class='fw-bold'>Cart Total</h2>
                                        </div>

                                        <div className="col-8  py-3 cart-total-p">
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="col-4 py-3 checkout-price">
                                        <h6>${subtotal.toFixed(2)}</h6>
                                        </div>
                                        <div className="col-12">
                                            <input className='cart-total-input py-2 px-4' type="text" placeholder='Your Voucher' />  <button class='btn btn-dark apply btn' type="button" >Apply</button>
                                        </div>

                                        <div className="col-12">
                                            ______________________________________________________
                                        </div>
                                        <div className="col-8  cart-total-p2">
                                            <p>Total</p>
                                        </div>
                                        <div className="col-4 checkout-price cart-total-h6">
                                               <h6>${subtotal.toFixed(2)}</h6>
                                        </div>

                                        <Link to="/checkout">
                                            <button class='btn btn-dark checkout-btn' type="button" >Checkout Now</button>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <Subscribe_Now />
                <Footer />
            </div>
        </>

    )
}

