import React from 'react';


const Banner = ({BannerImg, BannerTitle}) => {
    return (
        <div className='relative flex justify-center items-center w-full h-[25vh] my-5 bg-black/50 rounded-lg'>
            <img className='absolute rounded-lg w-full h-full object-cover mix-blend-overlay' src={ BannerImg } alt="Bannière d'accueil" />
            <h1 className='absolute  text-2xl md:text-4xl font-semibold text-white'>{BannerTitle}</h1>
        </div>
        
    );
};

export default Banner;