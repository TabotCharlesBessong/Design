
import React, { useState } from 'react'
import SidebarItem from './components/SidebarItem'
import Slider from './components/Slider'

const App = () => {
  const DEFAULT_OPTIONS = [
    {
      name:"Brightness",
      property:'brightness',
      value:100,
      range:{
        min:0,
        max:200
      },
      unit:'%'
    },
    {
      name:"Contrast",
      property:'contrast',
      value:100,
      range:{
        min:0,
        max:200
      },
      unit:'%'
    },
    {
      name:"Saturation",
      property:'saturate',
      value:100,
      range:{
        min:0,
        max:200
      },
      unit:'%'
    },
    {
      name:"Grayscale",
      property:'grayscale',
      value:100,
      range:{
        min:0,
        max:100
      },
      unit:'%'
    },
    {
      name:"Sepia",
      property:'sepia',
      value:100,
      range:{
        min:0,
        max:100
      },
      unit:'%'
    },
    {
      name:"Hue Rotate",
      property:'hue rotate',
      value:100,
      range:{
        min:0,
        max:360
      },
      unit:'deg'
    },
    {
      name:"Blur",
      property:'blur',
      value:0,
      range:{
        min:0,
        max:20
      },
      unit:'px'
    },
  ]
  const [options,setOption] = useState(DEFAULT_OPTIONS)
  const [selectedIndex,setSelectedIndex] = useState(0)
  const selectedOpt = options[selectedIndex]

  const handleSlider = ({target})=>{
    setOption(prevOpt =>{
      return prevOpt.map((opt,index)=>{
        if(index !== selectedIndex) return opt
        return {...opt, value:target.value}
      })
    })
  }

  const styleImg = ()=>{
    const filters = options.map((opti)=>{
      return `${opti.property}(${opti.value}%${opti.unit})`
    })
    return {filter: filters.join(' ')}
  }

  console.log(styleImg());
  return (
    <div className='container' >
      <div className="main-image" style={styleImg()} ></div>
      <div className="sidebar">
        {/* <SidebarItem/> */}
        {
          options.map((opt,index) =>{
            return(
              <SidebarItem
              key={index}
              name={opt.name}
              active={index === selectedIndex}
              handleClick={()=>setSelectedIndex(index)}
            />
            )
            
          })
        }
      </div>
      <Slider
        min={selectedOpt.range.min}
        max={selectedOpt.range.max}
        value={selectedOpt.value}
        handleChange={handleSlider}
      />
    </div>
  )
}

export default App