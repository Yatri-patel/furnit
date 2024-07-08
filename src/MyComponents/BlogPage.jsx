import React from 'react'
import blackchair from './Images/blog-bchair.png'
import whitechair from './Images/blog-wchair.png'
import bsofa from './Images/blog-sofa.png'
import brow2i1 from './Images/blog-row-2-i1.png'
import brow2i2 from './Images/blog-row-2-i2.png'
import brow2i3 from './Images/blog-row-2-i3.png'

import brow3i1 from './Images/blog-row-3-i1.png'
import brow3i2 from './Images/blog-row-3-i2.png'
import brow3i3 from './Images/blog-row-3-i3.png'
import Blog from './Blog'
import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'

export default function BlogPage() {
    return (
        <>
            {/* Blog row1 starts */}
            <div className="section-7">
                <h2 className='blog'>Read Our Latest Blog</h2>
                <p className='blog-para'>We write various things related to furniture, from tips and what things<br/>I need to pay attention to when choosing furniture</p>
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
                {/* Blog Row1 Ends */}

                {/* Blog Row2 Starts */}
                <div className="section-6-wrapper">
                    <div className="blog-cards">
                        <div className="b1">
                            <Blog
                                imgscr={ brow2i1} />
                        </div>
                        <div className="b2">
                            <Blog
                                imgscr={ brow2i2}
                            />
                        </div>
                        <div className="b3">
                            <Blog
                                imgscr={ brow2i3}
                            />
                        </div>
                    </div>
                </div>
                {/* Blog Row2 Ends */}

                {/* Blog Row3 starts */}
                <div className="section-6-wrapper">
                    <div className="blog-cards">
                        <div className="b1">
                            <Blog
                                imgscr={ brow3i1} />
                        </div>
                        <div className="b2">
                            <Blog
                                imgscr={brow3i2}
                            />
                        </div>
                        <div className="b3">
                            <Blog
                                imgscr={brow3i3}
                            />
                        </div>
                    </div>
                </div>
                {/* Blog Row3 Ends */}

                
            </div>

            <Subscribe_Now/>
            <Footer/>
        </>
    )
}
