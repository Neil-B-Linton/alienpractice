import React from 'react'
import './Card.css'

const Card = ({location, description}) => {

  return(
    <div>
      <h2>Cards!</h2>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card;
