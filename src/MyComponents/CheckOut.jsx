import React from 'react'

import checkout_instore from './Images/shipping-store.svg'
import checkout_delivery from './Images/shipping-delievery.svg'
import checkout_visa from './Images/visa-payment.png'
import checkout_gpay from './Images/gpay-payment.svg'
import checkout_paypal from './Images/paypal-payment.svg'
import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'
export default function CheckOut() {
    return (


        <div className="checkout">
            <div className="section-6-wrapper">

                <h1 className='checkout-heading'>Checkout</h1>

                <div className="checkout_main_section">
                    <div className="checkout_form">
                        <h5 className='py-3 fw-bold'>Contact <br /> Information</h5>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="" class="form-label">First Name</label>
                                <input type="" class="form-control" id="" />
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Last Name</label>
                                <input type="" class="form-control" id="" />
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Phone</label>
                                <input type="" class="form-control" id="" />
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Email</label>
                                <input type="" class="form-control" id="" />
                            </div>

                            <div className="shipping">
                                <h4 className='fw-bold'>Shipping Methods</h4>
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-light">
                                        <img src={checkout_instore} alt="" />
                                        Store
                                    </button>
                                    <button type="button" class="btn btn-light">
                                        <img src={checkout_delivery} alt="" />
                                        Delivery
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <label for="inputState" class="form-label">Country / Region</label>
                                <select id="inputState" class="form-select">
                                    <option selected>United States (US)</option>
                                    <option>India</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                </select>
                            </div>

                            <div className="add">
                                <h5>Street address</h5>
                                <textarea class="form-control" aria-label="With textarea" placeholder='Write your full address'></textarea>
                            </div>

                            <div class="col-md-12 lg-6">
                                <h5>Payment Method</h5>
                            </div>

                            <div class="payment_buttons col-md-12 lg-4">
                                <button><img src={checkout_visa} alt="" /></button>
                                <button><img src={checkout_gpay} alt="" /></button>
                                <button><img src={checkout_paypal} alt="" /></button>
                            </div>
                        </form>
                    </div>

                    <div className="checkout_total px-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 class='fw-bold'>Your Order</h2>
                                </div>
                                <div className="col-8">
                                    <p>Complete set of sofa..1x</p>
                                </div>
                                <div className="col-4 checkout-price">
                                    <h6>$ 75.00</h6>
                                </div>
                                <div className="col-8">
                                    <p>Teak wood chair 1x</p>
                                </div>
                                <div className="col-4 checkout-price">
                                    <h6>$ 24.00</h6>
                                </div>
                                <div className="col-12">
                                ____________________________________________
                                </div>
                                <div className="col-8">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-4 checkout-price">
                                    <h6>$99</h6>
                                </div>
                                <div className="col-8">
                                    <p>Discount(30%)</p>
                                </div>
                                <div className="col-4 checkout-price discount-price ">
                                    <h6>$29.70</h6>
                                </div>
                                <div className="col-12">
                                ____________________________________________
                                </div>
                                <div className="col-8">
                                    <p>Total</p>
                                </div>
                                <div className="col-4 checkout-price">
                                    <h6>$69.30</h6>
                                </div>
                                <button class='btn btn-dark place-order btn' type="button" >Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe_Now />
            <Footer />
        </div>


    )
}
