import React from 'react'
import { useState } from 'react'
import Sdata from './Shop_Data'
// import Cart from './Cart'

export default function CartCounter(props) {

    const [counter, setcounter] = useState(1)


    const addvalue = () => {
        setcounter(counter + 1)
    }

    const removevalue = () => {
        if (counter === 1) return;
        else {
            setcounter(counter - 1)
        }

    }

    return (
        <>

            {/* <Cart counter={props.price * counter}/> */}
            <i class="counter_operators fa-solid fa-minus" onClick={removevalue}></i>
            <p className='your-cart-counter'>{counter}</p>
            <i class="counter_operators fa-solid fa-plus" onClick={addvalue}></i>

            <h4 className='fw-bold counter-price pl-5'>${props.price * counter}</h4>

        </>
    )
}


