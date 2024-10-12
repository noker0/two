

import React, { useState } from 'react';
import './Nav.css'
import { Routes, Route, Link } from "react-router-dom";


import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Button,
} from 'reactstrap';

function Navb(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav className='Navv' style={{backgroundColor:"transparent"}} tabs>
      <NavItem >
      <NavLink disabled href="#" className='Niq' >
          Robust.
        </NavLink>
      </NavItem>
      <NavItem>
         <Link to="/b" className='lina'>
            Overview
         </Link>
      
  </NavItem>
      <Dropdown nav toggle={toggle}>
        <DropdownToggle className='drop' nav caret>
            <Link to="/a" className='mop'>Pages</Link>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    
      <Dropdown nav  toggle={toggle}>
        <DropdownToggle className='drop' nav caret>
        <Link to="/c" className='mop'>Forma</Link>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
       
      
     
        <DropdownToggle nav caret className='drop'>
          Docs
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      
      
  <Button outline className='button'>
  Purchase Now
  </Button>
    </Nav>
    
  ); 
}



export default Navb