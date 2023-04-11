import React from "react";

import { useParams } from "react-router-dom";
import { SlideShow } from "./";
import Collapse from "./Collapse";
import { AiFillStar } from "react-icons/ai";
import logementsData from '../data/logements.json'

const Logement = () => {
  const logementId = useParams("id").id;
  const currentLogement = logementsData.filter((el) => el.id === logementId);


  
  return (
    <div className="z-10 md:px-[75px] md:py-[40px] px-[30px] py-[15px] ">
      <SlideShow images={currentLogement[0]?.pictures}/>
      <div className="flex flex-col md:flex-row md:justify-between w-full gap-5">
        <div className="flex flex-col md:w-[40%] gap-5">
          <h1 className="text-main-color font-bold text-2xl">
            {currentLogement[0]?.title}
          </h1>
          <h2 className="text-main-color text-xl">
            {currentLogement[0]?.location}
          </h2>
          <div className="flex justify-start gap-5 w-full flex-wrap flex-row">
            {currentLogement[0]?.tags.map((tag, index) => (
              <p
                className="flex justify-center items-center bg-main-color text-white font-semibold p-2 rounded-lg h-[30px] min-w-[120px]"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center md:flex-col md:w-[40%]">
          <div className="flex items-center">
            <p className="text-main-color text-right w-[100px] mr-1">
              {currentLogement[0]?.host.name}
            </p>
            <div className="w-[65px]">
              <img
                className="rounded-full object-cover"
                src={currentLogement[0]?.host.picture}
                alt="host"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              let currentColor;
              ratingValue <= Number(currentLogement[0].rating) ? currentColor="text-main-color" : currentColor="text-gray-200";
                return (
                    <AiFillStar key={i} className={`${currentColor} md:text-xl text-md `}/>
                ) 
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="md:w-[45%]">
          <Collapse
            title="Description"
            text={currentLogement[0]?.description}
          />
        </div>
        <div className="md:w-[45%]">
          <Collapse title="Equipement" text={currentLogement[0]?.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
