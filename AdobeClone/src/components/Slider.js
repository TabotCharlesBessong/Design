
import React from 'react'

const Slider = ({min,max,value,handleChange}) => {
  return (
    <div className='slider-container' >
      <input type="range" min={min} max={max} onChange={handleChange} value={value} name="" id="" className='slider' />
    </div>
  )
}

export default Slider