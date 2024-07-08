import React from 'react'
import { useState } from 'react'
// import Sdata from './Shop_Data'

export default function Tags(props) {
    return (
        <>

            <div className="bpd-tags">
                <h5>Tags</h5>

                <div class="container">
                    {/* Row 1 */}
                    <div class="row">

                        <div class="col-3">

                            <button type="button" onClick={() => props.filterProducts("Teakwood chair")} class="btn btn-outline-dark">Chair</button>

                        </div>

                        <div class="col-3">

                            <button onClick={() => props.filterProducts("Lamps")} type="button" class="btn btn-outline-dark">Lamp</button>

                        </div>

                        <div class="col-3">
                            <button onClick={() => props.filterProducts("Stool")}type="button" class="btn btn-outline-dark">Stool</button>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div class="row bpd-tags-row2">

                        <div class="col-3">
                            <button onClick={() => props.filterProducts("Sofa")} type='button' class="btn btn-outline-dark">Sofa</button>
                        </div>

                        <div class="col-3">
                            <button type="button" class="btn btn-outline-dark">New</button>
                        </div>

                        <div class="col-3">
                            <button type="button" class="btn btn-outline-dark">Clock</button>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div class="row bpd-tags-row3">

                        <div class="col-3">
                            <button type="button" class="btn btn-outline-dark">Pillow</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
