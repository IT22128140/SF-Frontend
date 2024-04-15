// eslint-disable-next-line no-unused-vars
import React from 'react'
import AnimLinkButton from '../AnimLinkButton';
import NavbarUserProfile from '../navbar/NavbarUserProfile';

const Navbaruser = () => {
  return (
    <div className='flex flex-row'>
    <div className='flex flex-col justify-evenly'>
        <AnimLinkButton name='Login' url='/Login' classname='mr-[2rem] w-[5rem] h-[2rem] rounded-[50px] bg-primary text-white text-[1rem] font-bold hover:bg-red-800 hover:text-white transition-colors duration-700 hover:shadow-lg' />
        <AnimLinkButton name='Sign-Up' url='/DonatorReg' classname='mr-[2rem] w-[5rem] h-[2rem] rounded-[50px] bg-primary text-white text-[1rem] font-bold hover:bg-red-800 hover:text-white transition-colors duration-700 hover:shadow-lg'/>
    </div>
    <NavbarUserProfile source='/emptyprofile.png' username='Maneth Dewpura' />
</div>
  )
}

export default Navbaruser