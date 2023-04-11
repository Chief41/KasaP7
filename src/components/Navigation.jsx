import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
const Navigation = () => {
    return (
        <div className='flex justify-between items-center h-[10vh] md:px-[75px] md:py-[40px] px-[30px] py-[15px]'>
            <div className="md:w-[180.32px] md:h-[58px] w-[130.32px] h-[38px] ">
            <img src={Logo} alt='company-logo' className='w-full h-full object-contain' /> 
            </div>
            <ul className='text-main-color flex gap-5'>
                <NavLink to="/">
                    <li className='hover:bg-main-color hover:bg-opacity-20 rounded-md p-2 text-md sm:text-lg'>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='hover:bg-main-color hover:bg-opacity-20 rounded-md p-2 text-md sm:text-lg'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;