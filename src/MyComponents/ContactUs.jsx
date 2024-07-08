import React from 'react'

import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'
import Shop_Contact_Common from './Shop_Contact_Common'
export default function ContactUs() {
    return (
        <div>
            <div className="contact">
                <div className="section-6-wrapper">
                    <Shop_Contact_Common />

                    <div className="contact-left-right">
                        <div className="contact-left">
                            <h2 class='fw-bold'>Frequently asked questions</h2>

                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How to buy a product?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fw-bold">Dummy Content</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How to buy a product?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fw-bold">Dummy Content</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How to buy a product?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fw-bold">Dummy Content</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            How to buy a product?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fw-bold">Dummy Content</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <h3 class='fw-bold'>Contact Us</h3>
                            <form class="row g-3 contact-form">
                                <div class="col-md-6">
                                    <label for="name" class="form-label fw-bold">Your Name</label>
                                    <input type="text" class="form-control contact-input" id="name" placeholder='Write your name here...' />
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label fw-bold">Your Email</label>
                                    <input type="email" class="form-control contact-input" id="email " placeholder='Write your email here...' />
                                </div>
                                <div class="col-12">
                                    <label for="comment" class="form-label fw-bold">Your Comment</label>
                                </div>
                                <div class="col-12">
                                    <textarea name="comment" className='contact-input' id="" cols={70} rows={10} placeholder='Write your review here...'></textarea>
                                </div>

                                <div class="col-12">
                                    <button type="button" class="btn btn-dark contact-btn px-5 py-3 fw-bold">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Subscribe_Now />

                </div>
                <Footer />
            </div>
        </div>
    )
}
