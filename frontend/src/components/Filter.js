import React from "react";
import {BsSearch} from "react-icons/bs"

export default function Filter () {
    return(
        <>
            <input
                className="shadow-xl drop-shadow-xl rounded-xl py-2 px-3 h-[40px] w-[0px] text-gray-700 leading-tight  focus:outline-none focus:shadow-outline hidden md:block md:w-[250px] xl:w-[400px]"
                id="searchItems"
                type="text"
                placeholder="search items">
            </input>
            <button 
                className="bg-orange/95 text-black active:bg-orange/98 h-[35px] w-[35px]
                font-medium px-2 py-1 rounded-xl shadow-lg drop-shadow-lg hover:shadow-lg outline-none focus:outline-none text-[12px]"
                type="button">
                <BsSearch size={20}/>
            </button>
        </>
    )
}