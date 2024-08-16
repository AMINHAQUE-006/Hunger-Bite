import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function ShimmerCard() {
  return (
    <div className=" m-6 flex justify-between flex-col mt-6 bg-white shadow-md bg-clip-border rounded-xl sm:w-96">
    <div
        className="h-56 mx-4 mt-6 overflow-hidden text-red-900 shadow-lg bg-clip-border rounded-xl bg-blue-red-900 shadow-blue-gray-500/40">
         <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="p-6">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    </div>
    <div className="p-6 pt-0 self-end">
            <button
            className="flex align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-yellow-300 hover:bg-yellow-300 hover:text-red-900 shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            Visit <FaArrowRight className="ml-1" size={"1.2em"}/>
            </button>
    </div>
</div> 
  )
}

function Shimmer () {
  return (
    <>
      <div className="bg-red-800 w-full">
          <div className="p-4 flex justify-center flex-wrap">
            {Array.from({length: 12}).map((elem, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Shimmer