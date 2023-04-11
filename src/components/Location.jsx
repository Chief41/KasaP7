import React from "react";
import { NavLink } from "react-router-dom";

const Location = ({ logements }) => {
  return (
    <div className="">
      <div className="bg-background-container-color p-5 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {logements.map((logement, index) => (
          <NavLink key={index} to={`/accomodation/${logement.id}`}>
            <div className="h-[45vh] w-[100%] relative flex items-end justify-start bg-gradient-to-t from-current to-black/10 rounded-md hover:brightness-110 ">
              <h1 className="absolute p-2 text-white font-bold text-lg">
                {logement.title}
              </h1>
              <img
                className="absolute object-cover w-full h-full rounded-md mix-blend-overlay"
                src={logement.pictures[0]}
               alt='logement'/>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Location;
