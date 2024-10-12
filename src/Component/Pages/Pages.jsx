import React from 'react'
import './Pages.css'
import Navb from '../Nav/Nav'
import uio from './10.jpg'
import uioo from './8.jpg'
import uiooo from './9.jpg'

const Pages = () => {
  return (
    <div className="Pages">
       <Navb/>
       <p className='car'>Careers</p>
       <div className="cat">
           <p className='more'>Robust is a premium theme built with Bootstrap, the popular UI framework. The theme is fully responsive and customizable and can be used for any type of web application.</p>
       </div>
       <div className="font">
         <img className='popo' src={uio} alt="" />
         <div className="font-small">
            <img className='opop' src={uioo} alt="" />
            <img className='opop' src={uiooo} alt="" />
         </div>
       </div>
       <div className="gg">
        <div className="gg-small">
          <p className='jmj1'>Learn from the best</p>
          <p className='jmj2'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
        <div className="gg-small">
          <p className='jmj1'>Learn from the best</p>
          <p className='jmj2'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
       </div>
       <div className="gg">
        <div className="gg-small">
          <p className='jmj1'>Learn from the best</p>
          <p className='jmj2'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
        <div className="gg-small">
          <p className='jmj1'>Learn from the best</p>
          <p className='jmj2'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
       </div>
    </div>
  )
}

export default Pages