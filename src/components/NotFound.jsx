import React from 'react'
import {NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-[70vh] justify-center'>
        <div className='flex flex-col items-center justify-around gap-10 h-full w-full'>
            <h2 className='text-9xl md:text-[270px] text-main-color font-bold'>404</h2>
            <h3 className='text-2xl md:text-4xl text-main-color font-bold w-[80%] text-center '>Oups! La page que vous demandez n'existe pas.</h3>
            <NavLink to="/" className="text-main-color">
            Retourner sur la page d'accueil
            </NavLink>
        </div>    
    </div>
  )
}

export default NotFound