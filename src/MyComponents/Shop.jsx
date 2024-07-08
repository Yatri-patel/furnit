import React, { useContext } from 'react'
import Shop_Contact_Common from './Shop_Contact_Common'
import colorpalate1 from './Images/colorpalate-1.svg'
import colorpalate2 from './Images/colorpalate-2.svg'
import blackfriday from './Images/blackfriday.png'
import Tags from './Tags'
import Sdata from './Shop_Data'
import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'
import { useState } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

export default function Shop() {

    // UseContext Hook for add to cart button
    const { addtoCart } = useContext(CartContext);

    // Filter
    const [products, setProducts] = useState(Sdata);
    const [isFiltered, setIsFiltered] = useState();
    let filtered;
    const filterProducts = (title) => {
        if (isFiltered) {
            setProducts(Sdata);
        } else {
            if (title === "Teakwood chair") {
                filtered = Sdata.filter(product => product.title === "Teakwood chair");
                setProducts(filtered);
            }
            else if (title === "Lamps") {
                filtered = Sdata.filter(product => product.title === "Lamps");
                setProducts(filtered);
            }

            else if (title === "Sofa") {
                filtered = Sdata.filter(product => product.title === "Sofa");
                setProducts(filtered);
            }

            else if (title === "Stool") {
                filtered = Sdata.filter(product => product.title === "Stool");
                setProducts(filtered);
            }
        }
        setIsFiltered(!isFiltered);
    };

    // Sort ...products indicates that data from sdata is stored to products
    const sortProducts = (order) => {
        const sorted = [...products].sort((a, b) => {
            const priceA = (a.price);
            const priceB = (b.price);
            if (order === 'asc') {
                return priceA - priceB;
            } else if (order === 'desc') {
                return priceB - priceA;
            } else {
                return 0;
            }
        });
        setProducts(sorted);
    };

    return (
        <>
            <div className="shop">
                <div className="section-6-wrapper">
                    <Shop_Contact_Common />

                    {/* {Sdata.filter(item => parseFloat(item.price) > 25).map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>Place:{item.tag}</p>
                            <p>Price:${item.price}</p>
                        </div>
                    ))} */}


                    <div className="shop-left-right d-flex pt-5">
                        <div className="shop-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className='fw-bold' >Filter By Price</h4>
                                    </div>
                                    <div className="col-4 mt-3">

                                        <input class="form-control form-control-sm" type="text" placeholder="$0" aria-label=".form-control-sm example" />
                                    </div>
                                    <div className="col-1 mt-3">
                                        <p>-</p>
                                    </div>
                                    <div className="col-4 mt-3">
                                        <input class="form-control form-control-sm" type="text" placeholder="$2000" aria-label=".form-control-sm example" />
                                    </div>
                                    <div className="col-9 mt-3">
                                        <input type="range" class="form-range" min="0" max="2000" step="20" id="customRange3" />
                                    </div>

                                    <div className="col-12 mt-5">
                                        <h4 className='fw-bold' >Filter By Color</h4>
                                    </div>

                                    <div className="col-12 mt-3 ">
                                        <img src={colorpalate1} alt="" />

                                    </div>

                                    <div className="col-12 mt-3">
                                        <img src={colorpalate2} alt="" />
                                    </div>
                                </div>

                                <Tags filterProducts={filterProducts} sortProducts={sortProducts} />


                                {/* BlackFriday Section */}
                                <div className="col-12 blackfriday">
                                    <img className='blackfriday-img' src={blackfriday} alt="" />

                                    <div className="blackfriday-text">
                                        <p>Make a purchase now and <br />get 50% discount</p>
                                        <button type="button" class="btn btn-warning blackfridaybtn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Shop Right  Section*/}
                        <div className="shop-right">
                            <div className="shop-right-top  d-flex justify-content-between">
                                <div className="col-4">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Office Chair' />
                                        <span><button type="button" class="btn btn-dark search-btn">Search</button></span>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Sort By</option>
                                        <option onClick={() => sortProducts("asc")} value="1">Price(Low to High)</option>
                                        <option onClick={() => sortProducts("desc")} value="1">Price(High to Low)</option>
                                        <option value="2">New</option>
                                        <option value="3">Recommended</option>
                                    </select>
                                </div>
                            </div>

                            {/* Shop right image section */}
                            <div className="row map py-3 ">
                                {/* <div className=" map-image">
                                    {Sdata.map((val) => (
                                        <div className='map-grid pt-3'>
                                            <div className="pos_relative">
                                                <img src={val.imgscr} alt="" />
                                                <div className="pos_absolute">
                                                    <span class="badge text-bg-dark">{val.tag}</span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-9 ">
                                                    <h4 className='map-img-h4'>{val.title}</h4>
                                                </div>
                                                <div className="col-3">
                                                    <h5>${val.price}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div> */}

                                <div className=" map-image">
                                    {products.map((val) => (
                                        <div className='map-grid pt-3'>
                                            <div className="pos_relative">
                                                <img src={val.imgscr} alt="" />
                                                <div className="pos_absolute">
                                                    <span class="badge text-bg-dark">{val.tag}</span>
                                                </div>
                                            </div>

                                            <div className="row map-title-price">
                                                <div className="col-9 ">
                                                    <h4 className='map-img-h4'>{val.title}</h4>
                                                </div>
                                                <div className="col-3">
                                                    <h5>${val.price}</h5>
                                                </div>

                                            </div>
                                            <div className="row">

                                                <div className="col-12">
                                                    <Link to="/cart">
                                                        <button class="btn btn-dark map-addcart" onClick={() => addtoCart(val)}>  {val.AddtoCart}</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Subscribe_Now />
                </div>
                <Footer />
            </div>
        </>
    )
}
