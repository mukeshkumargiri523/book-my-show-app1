import React, { useState,useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import Payment from "../Payment/Payment.Component";

const MovieInfo =()=>{
    const [isOpen,setIsOpen]=useState(false);
    const [price,setPrice]=useState(0);

    const {movie}=useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");
    const rentMovie=()=>{
        setIsOpen(true);
        setPrice(15)
    };
    const buyMovie = () => {
        setIsOpen(true);
        setPrice(40);
    };

    return (
      <>
        <Payment setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-5xl font-bold">
            {movie.original_title}
          </h1>
          <div className="text-white flex flex-col gap-1">
            <h4>4.4k ratings</h4>
            <h4>English, Hindi, Telugu, Tamil</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
          <div className="flex items-center gap-3 px-4 text-xl">
            <button  onClick={rentMovie} className="bg-red-600  py-1 text-white font-semibold rounded-lg">
              Rent $15
            </button>
            <button onClick={buyMovie} className="bg-red-600  py-1 text-white font-semibold rounded-lg">
              Buy $40
            </button>
          </div>
        </div>
      </>
    );     
    
}

export default MovieInfo;