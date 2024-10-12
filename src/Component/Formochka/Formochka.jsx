import React from 'react'
import './Formochka.css'
import Navb from '../Nav/Nav'

const Formochka = () => {
  return (
    <>
    <Navb/>
        <div class="container-f">
    <div class="form_area">
        <p class="title-f">SIGN UP</p>
        <form action="">
            <div class="form_group">
                <label class="sub_title" for="name">Name</label>
                <input placeholder="Enter your full name" class="form_style" type="text" />
            </div>
           
            <div class="form_group">
                <label class="sub_title" for="email">Email</label>
                <input placeholder="Enter your email" id="email" class="form_style" type="email" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="password">Password</label>
                <input placeholder="Enter your password" id="password" class="form_style" type="password" />
            </div>
            <div>
                <button class="btn-f">SIGN UP</button>
                <p>Have an Account? <a class="link" href="">Login Here!</a></p><a class="link" href="">
            </a></div><a class="link" href="">
        
    </a></form></div><a class="link" href="">
</a></div>
<div class="mydict" >
	<div>
		<label>
			<input type="radio" name="radio" />
			<span>Sigma(Ahmad)</span>
		</label>
		<label>
			<input type="radio" name="radio"/>
			<span>Women</span>
		</label>
		<label>
			<input type="radio" name="radio"/>
			<span>Abduvihid(Trans)</span>
		</label>
		
	</div>
</div>
    </>
  )
}

export default Formochka