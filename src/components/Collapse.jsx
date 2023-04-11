import React, { useState } from "react";
import arrow  from "../assets/arrow-bottom.svg"



const Collapse = ({ title, text }) => {
  const [displayText, setDisplayText] = useState(false);
  return (
    <div className="my-4">
      <div className="flex items-center justify-between w-100 bg-main-color rounded-md p-2 cursor-pointer" onClick={() => setDisplayText(!displayText)}>
        <h2 className="  text-white z-10 font-bold text-lg">
          {title}
        </h2>
        {displayText ? (
          <img src={arrow} alt="arrow" />
        ) : (
            <img className="rotate-180" src={arrow} alt="arrow" />

        )}
      </div>
      {displayText && (
        <div className="bg-background-container-color p-3 text-main-color relative -top-1 -z-10 rounded-b-md">
          {Array.isArray(text) ? (
            text.map((item, index) => (
              <li key={index} className="list-none">
                {item}
              </li>
            ))
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
