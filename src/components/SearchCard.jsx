import React from 'react';

export default function SearchCard ({ Data }) {
    
    return (

        <div className="flex flex-row p-2 gap-2 rounded-lg cursor-pointer items-center hover:bg-slate-50">
            <img src={Data.image} alt="#" className="h-12 w-12 object-cover rounded-xl"/>
            <div className="flex flex-col">
                <b className="text-sm">{Data.title.slice(0, 40)} {Data.title.length > 40 ? '...' : ''}</b>
                <p className="text-[11px] text-slate-600">{Data.description.slice(0, 50)} {Data.description.length > 50 ? '...' : ''}</p>
            </div>
        </div>
    );  
};