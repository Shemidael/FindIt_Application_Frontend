import React from "react";

import { useSelector } from "react-redux";

import { BsCameraFill } from "react-icons/bs";

import { FaTimes, FaSync } from "react-icons/fa";

import Input from './Input';

export default function AccountUpdateModal ({ onClose }) {

    let user = useSelector(state => state.authentication.user);

    return (
        <div className="absolute top-0 left-0 w-full h-full p-2 sm:p-0 flex flex-col items-center justify-center bg-color_backdrop">
            <div className="xl:w-[40%] lg:w-[50%] md:w-[80%] sm:w-[80%] flex flex-col sm:flex-row gap-4 p-2 sm:p-4 box-border bg-white rounded-2xl">
                <div className=" w-full sm:w-[40%]">
                    <div className="w-full relative h-60 overflow-hidden rounded-2xl shadow-lg">
                        <img src={require('../assets/images/feed.jpg')} className="w-full h-hull object-cover"/>
                        <label htmlFor="profile_upload_btn" className="absolute top-0 left-0 h-full w-full bg-[#00000020] flex flex-col items-center justify-center text-white cursor-pointer">
                            <BsCameraFill size={40}/>
                            <p className="text-md font-semibold text-center">Click to change photo</p>
                        </label>
                        <input type="file" id="profile_upload_btn" style={{ display: 'none' }}/>
                    </div>
                </div>

                <div className="w-full sm:w-[60%] flex flex-col gap-6 p-2">
                    <div className="w-full flex flex-row items-center justify-between">
                        <h1 className="text-xl font-bold">Account details</h1>
                        <div className="p-2 bg-slate-100 w-max rounded-full text-lg text-slate-500 cursor-pointer hover:bg-red-100 hover:text-red-500" onClick={onClose}>
                            <FaTimes/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Input label={"First name"} content={user.firstname} HandleInput={(e) => console.log("hello")}/>
                        <Input label={"Last name"} content={user.lastname} HandleInput={(e) => console.log("hello")}/>
                        <Input label={"Email"} content={user.email} HandleInput={(e) => console.log("hello")}/>
                        <Input label={"Telephone number"} content={user.phone_number} HandleInput={(e) => console.log("hello")}/>
                    </div>

                    <button className="p-3 px-10 flex flex-row items-center justify-center gap-2 w-max self-end bg-color_secondary-200 rounded-md text-white text-sm">
                        <FaSync/>
                        <span>update</span>
                    </button>
                </div>
                
            </div>
        </div>
    );
};