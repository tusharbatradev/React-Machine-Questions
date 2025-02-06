import React from 'react'
import ErrorChildren from './ErrorChildren'

const Body = () => {
    let error = true
  return (
    <div>
      {error ? <ErrorChildren /> : <h1>Working Fine</h1> }
    </div>
  )
}

export default Body
