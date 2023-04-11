import React, { useEffect, useState } from 'react';
import {Location, Banner} from "../components";

import BannerImg from '../assets/home-banner.png';
import logementsData from '../data/logements.json'
// import Test from '../data/'

const Home = () => {
    const homeBannerTitle = "Chez vous, partout et ailleurs";
    // const [logementsData,setLogementsData]= useState([])
    // useEffect(() => {
    //     axios.get("../data/logements.json")
    //     .then((res) => setLogementsData(res.data))
    // }, [])
    // console.log(logementsData);
        
    
    return (
        <div className='md:px-[75px] md:py-[40px] px-[30px] py-[15px]'>
            <Banner BannerImg={BannerImg} BannerTitle={homeBannerTitle}/>
            <Location logements={logementsData} />
        </div>
    );
};

export default Home;