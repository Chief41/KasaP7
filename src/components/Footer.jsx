import React from 'react';
import LogoFooter from '../assets/logo-white.png';

const Footer = () => {
    return (
        <div className='bg-black flex flex-col justify-around h-[17vh] items-center mt-10'>
            <img className='w-[60px]' src={LogoFooter} alt="Logo pied de page" />
            <p className='text-white'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;