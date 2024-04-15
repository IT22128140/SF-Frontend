// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavbarButton from './NavbarButton';

const Navbarbuttons = () => {
  return (
    <div className='flex flex-row bg-primary w-full '>
        <NavbarButton button='Home' url='/' />
        <NavbarButton button='About' url='/about' />
        <NavbarButton button='Contact Us' url='/contactus' />
</div>
  )
}

export default Navbarbuttons