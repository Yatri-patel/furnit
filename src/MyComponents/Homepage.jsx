import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

// Images Import
import tableshopnow from './Images/tableshopnow.png';
import brand1 from './Images/brand1.svg';
import brand2 from './Images/brand-2.svg';
import brand3 from './Images/brand-3.svg';
import brand4 from './Images/brand-4.svg';
import brand5 from './Images/brand-5.svg';
import brand6 from './Images/brand-6.svg';
import livingroomchair from './Images/livingroomchair.png';
import livingroombulb from './Images/livingroombulb.png';
import blackchair from './Images/blog-bchair.png'
import whitechair from './Images/blog-wchair.png'
import bsofa from './Images/blog-sofa.png'
import rocket from './Images/rocket.svg'
import security from './Images/security.svg'
import daysreturn from './Images/days_reuturn.svg'
import hours from './Images/call.svg'

import pillowimg from './Images/pillow.png'
// import pillow from './Images/pillow.png';
import Carousel_one from './Carousel_one';
import Navbaar from './Navbaar';
import Four_Cards from './Four_Cards';
import livingroom from './Images/living-room.png'

// import props 
import CardData from './Four_Cards_details';
import Blog from './Blog';
import Subscribe_Now from './Subscribe_Now';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>

      {/* Navbar Starts */}

      {/* Navbar Ends */}

      {/* Section-1 Starts*/}

      <div className="shopnow">
        <div className="wrapper">
          <div className="shopnow-css">
            <div className="shopnow-left">
              <h6 >Interior Needs</h6>
              <h2 className='shopnow-para'>Various new collections of furniture to decorate the corner of your house.</h2>
              <Link to="/shop">
                <button type="button" class="shop_now_button_btn btn-dark">Shop Now</button>
              </Link>
            </div>
            <div className="shopnow-right">
              <img src={tableshopnow} alt="" className='shopnow-img' />
            </div>
          </div>
        </div>
      </div>
      {/* Section-1 Ends */}

      {/* Section-2 Starts */}
      <div className="brands">
        <div className="wrapper">
          <h5 className='brand-heading'>Various brands have used our products</h5>

          <div className="brand-logo">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand2" />
            <img src={brand3} alt="brand3" />
            <img src={brand4} alt="brand4" />
            <img src={brand5} alt="brand5" />
            <img src={brand6} alt="brand6" />
          </div>
        </div>
      </div>
      {/* Section-2 Ends */}

      {/* Section-3 Starts */}
      <div className="living-room">
        {/* Card-1 Starts */}
        <div class="card-css card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-title">Living Room</p>
                <h4 class="card-text">The best foam padded chair</h4>
                <Link to="/shop">
                  <button type="button" class="shop_now_button_btn btn-dark">Shop Now</button>
                </Link>
              </div>
            </div>

            <div class="col-md-4">
              <img src={livingroomchair} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        {/* Card-1 Ends */}

        {/*Card-2 Starts  */}
        <div class="card-css card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-title">Living Room</p>
                <h4 class="card-text">Latest model chandelier</h4>
                <Link to="/shop">
                  <button type="button" class="shop_now_button_btn btn-dark">Shop Now</button>
                </Link>
              </div>
            </div>

            <div class="col-md-4">
              <img src={livingroombulb} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        {/* Card-2 Ends */}
      </div>
      {/* Section-3 Ends */}

      {/* Section-4 starts */}

      <div className="new-products">
        {/* Header Part */}
        <h2 className='new-product-h2'>Our Newest Product</h2>
        <p className='new-product-para'>Made of the best materials and with a design that follows the times</p>

        {/* Carousel Part */}

      </div>
      {/* Section-4 ends */}
      <Carousel_one />

      {/* Section 5 starts */}
      <div className="about-us-pillow">
        <div className="about-us-pillow-left-right">
          <div className="about-us-pillow-left">
            <p>Interior Modern</p>
            <h2>Arrange your home in such a way <br />with our modern <br />interiors</h2>
            <button type="button" class="btn btn-outline-dark">Shop Now</button>
          </div>
          <div className="about-us-pillow-right">
            <img src={pillowimg} alt="" />
          </div>
        </div>
      </div>
      {/* Section 5 Ends */}

      {/* Section-6 starts */}
      <div className="section-6-wrapper">
        <div className="section-6">

          <div className="section-6-left">

            <div className="section-6-left-top">
              <h2>We guarantee the safety of your shopping</h2 >
            </div>

            <div className="section-6-left-bottom">
              <div className="rocket-security">
                <div className="rocket">
                  <Four_Cards
                    imgsrc={rocket}
                    title={CardData[0].title} />

                </div>

                <div className="security">
                  <Four_Cards
                    imgsrc={security}
                    title={CardData[1].title} />
                </div>
              </div>

              <div className="days-hours">
                <div className="days">
                  <Four_Cards
                    imgsrc={daysreturn}
                    title={CardData[2].title}
                  />
                </div>

                <div className="hours">
                  <Four_Cards
                    imgsrc={hours}
                    title={CardData[3].title}

                  />
                </div>
              </div>
            </div>

          </div>
          <div className="section-6-right">
            <img className="living-room-img" src={livingroom} alt="" />
          </div>

        </div>
      </div>

      {/* section-6 ends */}

      {/* Section-7 Starts */}

      <div className="section-7">
        <h2 className='blog'>Read Our Latest Blog</h2>
        <p className='blog-para'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</p>
        <div className="section-6-wrapper">
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
      </div>
      {/* Section-7 Ends */}


      {/* Section-8 Starts */}
      <Subscribe_Now />
      {/* Section-8 Ends */}

      {/* Footer Starts */}
      <Footer />
      {/* Footer Ends */}
    </>
  )
}
