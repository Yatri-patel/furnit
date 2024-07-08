import React from 'react'
import Logo from './Images/Logo.svg';
import img_search from './Images/img_search.svg';
import profile from './Images/profile.svg';
import cart from './Images/cart.svg';

//React Router               
import { Outlet, Link } from "react-router-dom";

export default function Navbaar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav justify-content-center">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">
                    <img src={Logo} alt="Logo" className="d-inline-block align-text-top" />
                </Link>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="nav justify-content-center">
                        
                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="/">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="shop">Shop</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="blogpage">Blog</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="aboutus">About Us</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="contactus">Contact</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-secondary" to="team">Team</Link>
                        </li>

                    </ul>

                </div>
                <span class="navbar-text ">
                    <img src={img_search} alt="" className="d-inline-block align-text-top ms-3" />
                    <img src={profile} alt="" className="d-inline-block align-text-top ms-3" />
                    <Link to= "/cartdetail">
                    <img src={cart} alt="" className="d-inline-block align-text-top ms-3"  />
                    </Link>
                   
                </span>
            </div>
        </nav>
        
        <Outlet/>
        </>
    )
}
