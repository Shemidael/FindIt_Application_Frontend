import React, { useState } from "react";

import { BsFilter } from "react-icons/bs";

const Search_Filters = [ 'all categories', 'documents', 'wallets', 'books & handouts', 'assesories' ];

export default function Filters () {

    const [activeFilter, setActiveFilter] = useState(0);

    return (
        <div className="w-full p-4 flex flex-row flex-wrap gap-4 items-center bg-white border rounded-lg">
            
            <div className="p-2 gap-2 flex flex-row items-center text-color_secondary-400 rounded-full">
                <BsFilter size={25}/>
                <label className="text-sm font-bold">Filters</label>
            </div>

            {
                Search_Filters.map((filter, key) => (

                    <div className={`text-[12px] p-2 px-4 rounded-full transition cursor-pointer ${ (activeFilter === key) && 'bg-orange-50 text-color_primary-100' }`} onClick={() => setActiveFilter(key)}>
                        {filter}
                    </div>
                ))
            }
            
        </div>
    );
};