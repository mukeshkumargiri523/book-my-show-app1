import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="cast and crew"
            className="w-full h-full rounded-full object-cover object-center"
          />
        </div>
        <h3 className="text-xl text-gray-500"> {props.castName}</h3>
        <h4 className="text-sm  text-gray-800 ">{props.role}</h4>
      </div>
    </div>
  );
};

export default Cast;
