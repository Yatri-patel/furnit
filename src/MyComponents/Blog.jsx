import React from 'react'
import admin from './Images/admin.svg'
import calendar from './Images/calendar.svg'

import { Outlet, Link } from "react-router-dom";
export default function Blog(props) {

    const handlePageUp = () => {
        // Scroll the window up by one page height
        window.scrollBy(0, -3400);
       
      };

    return (
        <>

            <div className="blog-img">
                <img src={props.imgscr} alt="" />
            </div>  

            <div className="bheading">
                <h3>Why Should you choose good wood</h3>
            </div>

            <div className="admin-calendar">
            
                <img src={admin} alt="" /><span>By Admin <span className='pipe'>|</span> </span>
                <img src={calendar} alt="" /> <span>10th December</span>
            </div>

            <div className="bpara">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever.</p>
            </div>

            <div className="bbutton">
                <Link to="/readmore">
                <button type="button" class="btn btn-outline-dark" onClick={handlePageUp}>Read More</button>
                </Link>
                
            </div>
<Outlet/>
        </>
    )
}
