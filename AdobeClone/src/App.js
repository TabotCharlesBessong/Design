
import React from 'react'
import SidebarItem from './components/SidebarItem'
import Slider from './components/Slider'

const App = () => {
  return (
    <div className='container' >
      <div className="main-image"></div>
      <div className="sidebar">
        <SidebarItem/>
      </div>
      <Slider/>
    </div>
  )
}

export default App