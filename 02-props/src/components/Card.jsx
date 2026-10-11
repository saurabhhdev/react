import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className='card'>
        <img src= {props.img}/>
        <h1>{props.user} {props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
      
    </div>
  )
}

export default Card
