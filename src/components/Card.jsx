import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiBuildingHouse, BiBed } from "react-icons/bi";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
    const navigate=useNavigate();
  const {
    img,
    location,
    title,
    noOfRoom,
    noOfBed,
    noOfBath,
    areaOfPlot,
    price,
    sale,
    isPopular
  } = data;
  const handleReadMoretn=(id)=>{
    navigate(`/property/${id}`)
  }
  return (
    <div className=" flex flex-col gap-2 w-80 rounded-lg bg-white relative p-2">
        {
            isPopular ? <span className="absolute bg-blue-800 rounded-e-md text-sm font-semibold -left-0 top-44 text-white p-1 px-4 z-10">Popular </span> : ""
        }
      <div className="relative w-full h-52">
        <img className="rounded-md h-full w-full" src={img} alt="home-photo" />
        <div className="absolute top-4 flex w-full justify-between items-center px-4">
          <button className="bg-white text-blue-900 font-semibold text-sm p-2 px-3 rounded-3xl">
            {sale}
          </button>
          <button className="bg-white text-blue-900 font-semibold p-2 rounded-3xl">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex gap-1 items-center font-semibold text-sm">
          <span className="text-orange-700">
            <IoLocationOutline />
          </span>
          {location}
        </p>
        <h2 className="font-bold">{title}</h2>
        <div className="flex justify-evenly items-center text-sm font-semibold border-b border-gray-200 border-dashed py-2">
          <div className="border-r px-2  border-gray-200 border-dashed">
            <span className="text-lg">
              <BiBuildingHouse />
            </span>
            <p>{noOfRoom}</p>
          </div>
          <div className="border-r px-2  border-gray-200 border-dashed">
            <span className="text-lg">
              <BiBed />
            </span>
            <p>{noOfBed}</p>
          </div>
          <div className="border-r px-2  border-gray-200 border-dashed">
            <span className="text-lg">
              <LiaBathSolid />
            </span>
            <p>{noOfBath}</p>
          </div>
          <div>
            <span className="text-lg">
              <BsArrowsMove />
            </span>
            <p>{areaOfPlot} sft</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-blue-900 font-bold">
            {price}
            <span className="text-black text-sm font-semibold">/month</span>
          </p>
          <button  onClick={()=>{handleReadMoretn(data.id)}} className="border border-blue-900 p-1 px-2 rounded-3xl text-blue-900 font-bold text-sm hover:bg-blue-900 hover:border-none transition-all hover:text-white ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
