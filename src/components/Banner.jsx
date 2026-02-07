import React from "react";

import { FaTimes } from "react-icons/fa";

import { BsInfoCircleFill, BsExclamationCircleFill, BsExclamationTriangleFill, BsBellFill } from "react-icons/bs";

const BannerStates = {

    information: {
        icon: <BsInfoCircleFill/>,
        title: 'Information',
        color: 'text-blue-500',
        background: 'bg-blue-50'
    },

    error: {
        icon: <BsExclamationCircleFill/>,
        title: 'Error',
        color: 'text-red-500',
        background: 'bg-red-50'
    },

    warning: {
        icon: <BsExclamationTriangleFill/>,
        title: 'Warning',
        color: 'text-orange-500',
        background: 'bg-orange-50'
    },

    success: {
        icon: <BsInfoCircleFill/>,
        title: 'Success',
        color: 'text-green-500',
        background: 'bg-green-50'
    },
    notification: {
        icon: <BsBellFill/>,
        title: 'Notification',
        color: 'text-purple-500',
        background: 'bg-purple-50'
    },
}

export default function Banner ({ Variant = "information", Title, Details, onCloseBanner }) {

    return (

        <div className={`absolute top-[5%] right-[2.5%] z-50 xl:w-[30%] lg:w-[50%] md:w-[80%] sm:w-[80%] min-h-24 p-0 border-4 border-white shadow-lg rounded-xl flex flex-row justify-between ${BannerStates[Variant].background}`}>
            <div className={`flex flex-row gap-4 p-4 items-center rounded-lg`}>
                <div className={`p-4 bg-white rounded-xl ${BannerStates[Variant].color}`}>
                    {BannerStates[Variant].icon}
                </div>
                <div className="flex flex-col">
                    <b className="text-md font-semibold">{Title}</b>
                    <p className="text-[13px] text-slate-500">{Details}</p>
                </div>
            </div>
            <div className="p-4 hover:text-slate-500 cursor-pointer" onClick={onCloseBanner}>
                <FaTimes/>
            </div>
        </div>
    );
};