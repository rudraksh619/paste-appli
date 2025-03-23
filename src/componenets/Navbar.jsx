import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-5 border justify-evenly bg-black rounded p-[1rem] hover: border-shadow'>
     <NavLink to={'/'} >
        Home
      
     </NavLink>
     <NavLink to="/pastes">
        pastes
     </NavLink>
    </div>   
  )
}

export default Navbar
