import React from 'react'
import './Main.css'
import './7.jpg'
import Navbar from '../Navbar/Navbar'
import { Button } from 'reactstrap'

const Main = () => {
  return (
    <div className="Main" >
        <Navbar />
        <div className="box">
            <div className="coniter" >

            <h1 className='h'>Robust UI Kit</h1>
            <p className='he'>Robust is a premium theme built with Bootstrap. The theme is fully customizable & can be used for any type of application.</p>
            <div className="butns">
            <Button className='bit lo' color="success">
                Get started
            </Button>
                
                <Button
                  className='bit ol'
                    color="primary"
                    outline
                 >
                    Components
                </Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main