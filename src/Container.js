import React from 'react'
import './Container.css'


const Container = ({sightings}) => {
  const sightingsArray = sightings.map(sighting => {
    <Card
      id={sighting.id}
      key={sighting.key}
      location={sighting.location}
      description={sighting.description}
     />
  })

  return(
    <>
      {sightingsArray}
    </>
  )
}

export default Container
