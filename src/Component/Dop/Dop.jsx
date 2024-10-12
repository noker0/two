import React from 'react'
import './Dop.css'
import {
     ContactsOutlined, 
     DislikeOutlined,
     MailOutlined,
     CopyOutlined,
     EnvironmentOutlined,
     EyeInvisibleOutlined,
 } from '@ant-design/icons'

const Dop = () => {
  return (
    <div className="Dop">
        <div className="text">
            <p className='text-big'>Enormous collection of elements</p>
            <p className='text-small'>Robust is a premium theme built with Bootstrap 4, the most popular UI framework. The theme is fully responsive and customizable and can be used for any type of web application.</p>
        </div>
        <div className="foll1">
            <div className="curd">
                <div className="iconka">    
            <ContactsOutlined className='contout'/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
            <div className="curd">
                <div className="iconka t">    
            < DislikeOutlined  className='contout '/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
            <div className="curd">
                <div className="iconka y">    
            <MailOutlined className='contout '/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
        </div>
       
       
        <div className="foll1">
            <div className="curd">
                <div className="iconka f">    
            <CopyOutlined className='contout '/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
            <div className="curd">
                <div className="iconka  g">    
            < EnvironmentOutlined  className='contout '/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
            <div className="curd">
                <div className="iconka ">    
            <EyeInvisibleOutlined className='contout '/>
                </div>
               <div className="small">
                  <p className='resp'>Responsive</p>
                  <p className='resp2'>With mobile, tablet & desktop support it doesn't matter what device you're using. Robust is responsive in all browsers.</p>
               </div>
            </div>
        </div>
        
       
      </div>
  )
}

export default Dop