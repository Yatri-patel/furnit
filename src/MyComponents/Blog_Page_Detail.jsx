import React from 'react'
import admin from './Images/admin.svg'
import calendar from './Images/calendar.svg'
import blogpagepic1 from './Images/blog-detail-page-mainpic.png'
import blogpagepic2 from './Images/blog-page-detail-left1.png'
import blogpagepic3 from './Images/blog-page-detail-left2.png'
import blogpagepic4 from './Images/blog-page-detail-left3.png'
import Subscribe_Now from './Subscribe_Now'
import Blog from './Blog'
import Blog_Page_Detail_Right_props from './Blog_Page_Detail_Right_props'
// Images
import blackchair from './Images/blog-bchair.png'
import whitechair from './Images/blog-wchair.png'
import bsofa from './Images/blog-sofa.png'

import bpgr1 from './Images/blog-page-detail-right1.png'
import bpgr2 from './Images/blog-page-detail-right2.png'
import bpgr3 from './Images/blog-page-detail-right3.png'
import bpgr4 from './Images/blog-page-detail-right4.png'

import gallery1 from './Images/bpd-gallery1.png'
import gallery2 from './Images/bpd-gallery2.png'
import gallery3 from './Images/bpd-gallery3.png'
import gallery4 from './Images/bpd-gallery4.png'
import gallery5 from './Images/bpd-gallery5.png'

import Footer from './Footer'
import Tags from './Tags'
export default function Blog_Page_Detail() {
    return (
        <>
            <div className="blog-detail-page">
                <div className="section-6-wrapper">
                    {/* Blog Page Heading */}
                    <div className="blog-detail-page-heading">
                        <h1>Why should you choose good wood</h1>
                        <div className="blog-detail-page-admin-calendar">

                            <img src={admin} alt="" /><span>By Admin <span className='pipe'>|</span> </span>
                            <img src={calendar} alt="" /> <span>10th December</span>
                        </div>

                        <p className='blog-page-detail-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

                        <img className='blog-page-detail-img' src={blogpagepic1} alt="" />
                    </div>

                    {/* Blog Page Left & Right */}
                    <div className="blog-page-detail-left-right">
                        {/* Blog Page detail left */}
                        <div className="blog-page-detail-left">
                            <h2>How to choose the best chair</h2>

                            <p >Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque, felis fringilla aenean hac eleifend tellus pellentesque quis suspendisse. Sociosqu suscipit sodales taciti rutrum condimentum conubia volutpat cubilia mi, velit curabitur consequat proin neque commodo interdum eleifend dui, ac magna leo ridiculus facilisi duis sapien etiam.
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque.</p>
                            <img src={blogpagepic2} alt="" />

                            <p>Massa mus mattis natoque ante sapien venenatis nisl, mauris malesuada parturient fringilla dignissim tortor morbi, imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum in taciti ullamcorper accumsan luctus, euismod ornare fames aenean ultrices odio ultricies et mus, gravida condimentum senectus hendrerit lobortis sociis quam. Blandit placerat cras suscipit egestas arcu nam ligula rhoncus, tortor purus proin nulla faucibus odio molestie semper, venenatis urna mollis libero praesent cum nec.</p>

                            <div className="blog-page-detail-left-images">

                                <img src={blogpagepic3} alt="" />


                                <img src={blogpagepic4} alt="" />

                            </div>
                            <div className="tag">
                                <h3>Tag:</h3>
                                <button type="button" class="btn btn-light btn-sm">Chair</button>
                                <button type="button" class="btn btn-light btn-sm">Lamp</button>
                                <button type="button" class="btn btn-light btn-sm">Minimalist</button>
                            </div>
                            <div className="comment">
                                <h4>Leave a Comment</h4>
                                <div className="comment-details">
                                    <div className="name-email">

                                        <div className="name">
                                            <h5>Your Name</h5>
                                            <input type="text" placeholder='Write your name here' />
                                        </div>

                                        <div className="email">
                                            <h5>Your Email</h5>
                                            <input type="email" placeholder='Write your email here' />
                                        </div>

                                    </div>

                                    <div className="comment">
                                        <h5>Your Comment</h5>
                                        <textarea name="comment" id="comment" cols="50" rows="10" placeholder='Write your review here .....'></textarea>
                                    </div>

                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <p>Save my name,email and website in this browser fot the next time I comment</p>
                                    </div>

                                    <button type="button" class="btn btn-dark">Submit</button>
                                </div>
                            </div>
                        </div>

                        {/* Blog Page Detail Right */}
                        <div className="blog-page-detail-right">
                            {/* Search button Right*/}
                            <div className="search">
                                <input type="text" name="text" id="text" placeholder='Find Something' />
                                <button type="button" class="btn btn-dark bpdburbutton" >Search</button>
                            </div>

                            {/* Recent Post */}
                            <div className="recent-post">
                                <h5>Recent Post</h5>
                            </div>

                            <Blog_Page_Detail_Right_props
                                imgsrc={bpgr1} />

                            <Blog_Page_Detail_Right_props
                                imgsrc={bpgr2} />

                            <Blog_Page_Detail_Right_props
                                imgsrc={bpgr3} />

                            <Blog_Page_Detail_Right_props
                                imgsrc={bpgr4} />

                            {/* Follow Us */}
                            <div className="bpd-followus">
                                <h5>Follow Us</h5>

                                <div className="bpd-followus-icons">
                                    <a href="" class="me-4 text-reset">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>

                                    <a href="" class="me-4 text-reset">
                                        <i class="fab fa-twitter"></i>
                                    </a>

                                    <a href="" class="me-4 text-reset">
                                        <i class="fab fa-google"></i>
                                    </a>

                                    <a href="" class="me-4 text-reset">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Our Gallery */}
                            <div className="bpd-gallery">
                                <h5>Our Gallery</h5>

                                <div class="container">
                                    <div class="row">

                                        <div class="col-4">
                                            <img src={gallery1} alt="" />
                                        </div>

                                        <div class="col-4">
                                            <img src={gallery2} alt="" />
                                        </div>

                                        <div class="col-4">
                                            <img src={gallery3} alt="" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-4">
                                            <img src={gallery4} alt="" />
                                        </div>

                                        <div class="col-4">
                                            <img src={gallery5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                           <Tags/>
                        </div>
                    </div>

                    {/* Blog Cards */}
                    <div className="bpd-blog">
                        <h2 className='bpd-blogs-heading'>Other blogs</h2>
                        <p className='bpd-blogs-para'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</p>
                        <div className="blog-cards">
                            <div className="b1">
                                <Blog
                                    imgscr={blackchair} />
                            </div>
                            <div className="b2">
                                <Blog
                                    imgscr={whitechair}
                                />
                            </div>
                            <div className="b3">
                                <Blog
                                    imgscr={bsofa}
                                />
                            </div>
                        </div>
                    </div>
                    <Subscribe_Now />
                    <Footer />
                </div>
            </div>
        </>
    )
}

