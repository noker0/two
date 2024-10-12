import React from 'react'
import './Cards.css'
import l from './careers.png'
import ll from './landing-2.png'
import lll from './social-2.png'

const Cards = () => {
  return (
    <div className="Cards">
        <div className="text">
            <p className='text-big'>Discover our landing, app & blog pages</p>
            <p className='text-small'>Robust includes various demo pages for building your custom app, blog or landing page. All code is handwritten, all our components are optimized for desktop, tablet and mobile.</p>
        </div>
        <div className="cotner">
            <div className="cardan">
               <img className='l' src={ll} alt="" />
               <p className='real'>Landing</p>
               <p className='small-text'>Make your app look outstanding between the crowd using our wide variety of page components.</p>
               <a className='href' href="">Explore Pages ></a>
            </div>
            <div className="cardan">
               <img className='l' src={lll} alt="" />
               <p className='real'>Dashboard</p>
               <p className='small-text'>Make your app look outstanding between the crowd using our wide variety of page components.</p>
               <a className='href' href="">Explore Pages ></a>
            </div>
            <div className="cardan">
               <img className='l' src={l} alt="" />
               <p className='real'>Pages</p>
               <p className='small-text'>Make your app look outstanding between the crowd using our wide variety of page components.</p>
               <a className='href' href="">Explore Pages ></a>
            </div>
        </div>
    </div>
  )
}

export default Cards