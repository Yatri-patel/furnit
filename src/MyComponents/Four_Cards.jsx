import React from 'react'


export default function Four_Cards(props) {
  return (
    <>
      <img src={props.imgsrc} alt="" />
      <h5 className='cards-title'>{props.title}</h5>
      <p className='cards-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
    </>
  )
}
