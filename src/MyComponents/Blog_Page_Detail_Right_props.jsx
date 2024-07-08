import React from 'react'

export default function Blog_Page_Detail_Right_props(props) {
    return (
        <div>
            <>

                <div class="container">
                    <div class="row bpd-row">
                        <div class="col-3 abc">
                            <img className="blog-page-detail-right-image" src={props.imgsrc} alt="" />
                        </div>

                        <div class="col-9 xyz">
                            <h6>How to choose a chair at home</h6>

                            <div class="col def">
                                <p> December 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </>
        </div>
    )
}
