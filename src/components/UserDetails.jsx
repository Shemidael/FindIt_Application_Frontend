import React from "react";

import { FaSync } from "react-icons/fa";

import { BsPerson, BsEnvelope, BsTelephone, BsPostcard, BsInfoCircle } from "react-icons/bs";

import { useSelector } from "react-redux";

export default function UserDetails ({ onTriggerUpload, onTriggerLogout }) {

    let user = useSelector(state => state.authentication.user);

    let userInformation = [

        { 
            title: 'User name',
            icon: <BsPerson size={20} className="text-slate-500"/>,
            data: `${user.firstname} ${user.lastname}`
        },
        { 
            title: 'Email address',
            icon: <BsEnvelope size={20} className="text-slate-500"/>,
            data: user.email
        },
        { 
            title: 'Telephone',
            icon: <BsTelephone size={20} className="text-slate-500"/>,
            data: user.telephone || 'no phone number registered'
        },
        { 
            title: "Feeds' count",
            icon: <BsPostcard size={20} className="text-slate-500"/>,
            data: user.feeds.length ? `${user.feeds.length} feed(s)` : '0 feeds'  
        },
        { 
            title: "Account creation date",
            icon: <BsInfoCircle size={20} className="text-slate-500"/>,
            data: new Date(user.createdAt).toUTCString()
        },
    ];


    return (

        <div className="w-full p-4 bg-white border rounded-2xl flex flex-col sm:flex-row gap-4">

            <div className="w-full sm:w-[40%]">
                <img src={require('../assets/images/feed.jpg')} className="w-full h-60 object-cover rounded-2xl shadow-md" alt="" />

                <div className="w-full pt-4 gap-4 flex flex-col">

                    <button className="bg-color_secondary-200 p-3 rounded-md text-[13px] font-semibold text-white flex flex-row gap-2 justify-center items-center" onClick={onTriggerUpload}>
                        <FaSync/>
                        <span>Update profile</span>
                    </button>

                    <button className="bg-slate-200 p-3 rounded-md text-[13px] font-semibold" onClick={onTriggerLogout}>
                        <span>Logout</span>
                    </button>

                </div>
            </div>

            <div className="w-[60%] flex flex-col items-start justify-center gap-4">

                {
                    userInformation.map(information => (
                        <div className="w-full flex flex-row items-center gap-4 p-2">
                            {information.icon}
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">{information.title}</span>
                                <span className="text-[13px] text-slate-500">{information.data}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};