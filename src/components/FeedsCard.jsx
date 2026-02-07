import React, { useState } from "react";

import { BsShare } from "react-icons/bs";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function FeedsCard ({ onTriggerDetails, onTriggerShare, Feed }) {

    const [readMore, setReadMore] = useState(Feed.description.length > 150);

    return (

        <div className="w-full p-3 sm:p-4 flex flex-col gap-4 box-border border rounded-xl bg-white">

            <div className="pb-2 flex flex-row gap-4 border-b items-center">
                <img src={require('../assets/images/feed.jpg')} className="h-12 w-12 object-cover rounded-full" alt="" />
                <div className="flex flex-col text-[11px]">
                    <span className="text-sm font-bold">{Feed.username}</span>
                    <span className="text-color_secondary-100">{Feed.useremail}</span>
                </div>
            </div>

            <div className="w-full h-[20rem] overflow-hidden rounded-lg">
                <img src={Feed.image} className="w-full h-full object-cover" alt="" />
            </div>

            <label className="w-max text-[12px] p-2 px-4 text-color_secondary-100 bg-violet-50 rounded-full">category</label>

            <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold">{Feed.title}</h1>
                <p className="text-[14px]">
                    { readMore ? Feed.description.slice(0, 150) : Feed.description }
                    { readMore && <b className="cursor-pointer text-color_secondary-100" onClick={() => setReadMore(!readMore)}> ... read more</b>}
                </p>
            </div>

            <div className="w-full flex flex-row gap-4 pt-4">
                <button onClick={onTriggerDetails} className="p-2 px-4 flex flex-row gap-2 items-center border border-color_primary-100 text-color_primary-200 rounded-lg font-semibold">
                    <FaExternalLinkAlt/>
                    <span className="text-[13px]">More details</span>
                </button>
                <button onClick={onTriggerShare}className="p-2 px-4 flex flex-row gap-2 items-center bg-color_secondary-200 rounded-lg text-white font-semibold">
                    <BsShare/>
                    <span className="text-[13px]">Forward feed</span>
                </button>
            </div>
        </div>
    );
};