import React from 'react'
import './Cont.css'
import fame from './ipad.png'

const Cont = () => {
  return (
    <div className="Cont">
        <div className="texts">
             <div className="multy">
                <p className='toxt'>Multi-device support</p>
                <p className='toxt2'>All pages inside Robust are optimized for mobile, tablet and desktop. It doesn't matter what device you're using.</p>
             </div>
             <div className="multy">
                <p className='toxt'>Well-documented</p>
                <p className='toxt2'>All pages inside Robust are optimized for mobile, tablet and desktop. It doesn't matter what device you're using.</p>
             </div>
             <div className="multy">
                <p className='toxt'>3rd party plugins</p>
                <p className='toxt2'>All pages inside Robust are optimized for mobile, tablet and desktop. It doesn't matter what device you're using.</p>
             </div>
        </div>
        <img className='roll' src={fame} alt="" />
    </div>
  )
}

export default Cont