import React from 'react'
import contact from './Images/contactus-i1.png'
export default function Shop_Contact_Common() {
    return (
        <>

            <div className="contact-img1">
                <img src={contact} alt="" />
                <div className="contact-img-1-text">
                    <h1>Best Room Decor Items</h1>
                    <h2>Our goods have the best<br /> quality and materials in the <br />world</h2>
                    <button class='px-5 py-3'>Shop Now</button>
                </div>
            </div>

        </>

    )
}
