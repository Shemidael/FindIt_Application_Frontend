import React, { useState } from "react";

import { useSelector } from "react-redux";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import '../styles/nav-animation.css';

export default function NavigationBar ({ NavigationItems, setActiveElement, onToggleExpandModal }) {

    const user = useSelector(state => state.authentication.user);

    const [activeNavigation, setActiveNavigation] = useState(0);

    const [focussedProfile, setFocussedProfile] = useState(false);

    return (
        <div className="w-full p-2 box-border fixed top-0 left-0 flex flex-row items-center justify-between border-b bg-white">

            <div className="flex flex-row items-center gap-2">
                <img className="h-12 rounded-lg" src={require('../assets/images/logo-icon.jpg')} alt="logo" />
                <label className="text-xl font-extrabold text-color_primary-100">Findit</label>
            </div>

            <div className="sm:flex flex-col hidden sm:visible">
                <div className="flex flex-row items-center gap-8 justify-between">
                    {
                        NavigationItems.map((NavigationItem, key) => (

                            <div className="flex flex-col items-center" onClick={() =>{ setActiveNavigation(key); setActiveElement(key)}}>
                                <div className={`flex flex-row items-center p-2 gap-2 ${(activeNavigation === key) && 'text-color_secondary-100'}`}>
                                    {NavigationItem.icon}
                                    <label className={`text-[13px] ${!(activeNavigation === key) && 'text-slate-500'}`}>{NavigationItem.label}</label>
                                </div>
                                { (activeNavigation === key) && <div className="increase-animation h-1 w-full bg-color_secondary-100 rounded-lg"></div>}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-row items-center gap-2">
                <div className="h-12 w-12 rounded-full flex items-center justify-center font-bold border bg-red-50">{user.firstname[0].toUpperCase()}</div>
                <div className="p-2 border rounded-full hover:bg-slate-200" onClick={() => {setFocussedProfile(!focussedProfile); onToggleExpandModal()}}>
                    {!focussedProfile? <FaAngleDown/> : <FaAngleUp/>}
                </div>
            </div>
            
        </div>
    )
};