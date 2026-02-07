import React from "react";

import { BsSearch, BsTrash3 } from "react-icons/bs";

import SearchCard from "./SearchCard";

export default function SearchBox ({ Search, OnCloseBox, Results }) {

    return (
        <div className="w-full h-80 flex flex-col p-0 border bg-white rounded-xl box-border">

            <div className="w-full flex p-4 flex-row items-center gap-4 border-b text-sm pb-4">
                <BsSearch/>
                <p>Results for <b>"{Search}"</b></p> 
            </div>

            {
                Results.length > 0 ?

                <div className="max-h-80 overflow-scroll flex flex-col p-4 gap-2 box-border">

                    { Results.map((result) => <SearchCard Data={result}/>) }

                    <div className="p-2 flex flex-row items-center gap-2 self-end rounded-lg cursor-pointer hover:bg-slate-50" onClick={OnCloseBox}>
                        <BsTrash3/>
                        <p className="text-sm">clear</p>
                    </div>
                </div>

                :

                <div className="w-full p-4 flex flex-col items-center justify-center">
                    <p>Sorry, No items match your search...</p>
                </div>

            }

        </div>
    );
}; 