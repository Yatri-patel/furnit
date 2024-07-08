import React from 'react'
import s8chair from './Images/section-8-chairs.png'
export default function Subscribe_Now() {
    return (
        <>
            <div className="section-8">
                <div className="section-6-wrapper">
                    <div class="s-8-card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="s-8-card-title">Subscribe now and get 10% off<br /> all items</h1>
                                    <p class="s-8-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard dummy text.</p>
                                    <div className="email-button">
                                        <input type="email" className='s-8-input' placeholder='Your email here' />
                                        <button type="button" class="btn btn-dark s-8-btn">Subscribe</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src={s8chair} class="s-8-img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
