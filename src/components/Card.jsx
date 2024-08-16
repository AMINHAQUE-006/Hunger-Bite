import { Link } from "react-router-dom";
import { Restaurant_Img_Url } from "../constants";
import { useContext, useState } from "react";
import userContext from "../utils/userContext"
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({props}) => {
    return (
        <div className=" m-6 flex justify-between flex-col mt-6 bg-white shadow-md bg-clip-border rounded-xl sm:w-96">
            <div
                className="h-56 mx-4 mt-6 overflow-hidden text-red-900 shadow-lg bg-clip-border rounded-xl bg-blue-red-900 shadow-blue-gray-500/40">
                <img
                src={`${Restaurant_Img_Url}${props.info.cloudinaryImageId}`}
                alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl text-red-600 antialiased font-semibold leading-snug tracking-normal text-red-00">
                {props?.info?.name}
                </h5>
                <p className="block font-sans text-base text-green-600 antialiased font-light leading-relaxed text-inherit">
                {props?.info?.sla?.slaString}
                </p>
                <p className="flex items-center text-yellow-300 font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                {props?.info?.avgRating} <FaStar className="ml-1"/>
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {props?.info?.cuisines?.join(" ")}
                </p>
                <p className="flex items-center font-sans text-base antialiased font-light leading-relaxed text-inherit">
                <FaLocationDot className="mr-1"/>{props?.info?.areaName}
                </p>
            </div>
            <div className="p-6 pt-0 self-end">
                <Link to={`/restaurant/${props?.info?.id}`}>
                    <button
                    className="flex align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-yellow-300 hover:bg-yellow-300 hover:text-red-900 shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Visit <FaArrowRight className="ml-1" size={"1.2em"}/>
                    </button>
                </Link>
            </div>
        </div> 
    )
}

export default Card;