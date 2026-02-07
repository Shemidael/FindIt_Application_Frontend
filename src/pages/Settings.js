import React, { useState, useEffect } from "react";

import axios from "axios";

import { BACKEND_URL } from "../utilities/config.js";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router";

import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";

import FeedsCard from "../components/FeedsCard";

import UserDetails from "../components/UserDetails";

import ConfirmModal from "../components/ConfirmModal";

import AccountUpdateModal from "../components/AccountUpdateModal";

export default function Settings () {

    let navigate = useNavigate();

    let user = useSelector(state => state.authentication.user);

    const [Feeds, setFeeds] = useState([]);

    const [modal, setModal] = useState(false);

    const [updateModal, setUpdateModal] = useState(false)

    useEffect(() => {

        axios.post(`${BACKEND_URL}/api/userfeed`, { id: user._id })

            .then((response) => setFeeds(response.data.feeds))

            .catch((error) => { 

                throw error; 
            });
    });

    function HandleLogout () {

        localStorage.removeItem('token');
        
        navigate('/');
        
        window.location.reload();

    };

    return (

        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50">
            <div className="xl:w-[40%] lg:w-[50%] md:w-[80%] sm:w-[80%] p-2 sm:p-0 h-full flex flex-col gap-4 py-4 box-border overflow-scroll">

                <div className=" flex flex-col gap-4 p-2 box-border">
                    <div className="w-max flex flex-row gap-2 items-center p-2 px-4 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300" onClick={() => navigate('/')}>
                        <FaArrowLeft/>
                        <span className="text-sm">back</span>
                    </div>
                    <h1 className="text-xl font-extrabold text-color_secondary-200">FindIt Settings</h1>
                </div>

                <UserDetails onTriggerLogout={() => setModal(true)} onTriggerUpload={() => setUpdateModal(true)}/>
                
                <div className="flex flex-col gap-4">

                    <h1 className="p-4 text-md font-extrabold">Your feeds</h1> 

                    {
                        Feeds.map((feed) => (

                            <FeedsCard Feed={feed}/>
                        ))
                    }
                </div>

                <div className="w-full">
                    <button className="w-full p-3 flex flex-row items-center gap-2 bg-red-500 justify-center rounded-md text-white hover:bg-red-400" onClick={() => {}}>
                        <FaTrashAlt size={18}/>
                        <span className="text-[13px] font-semibold">Delete this account</span>
                    </button>
                </div>

            </div>

            { modal && <ConfirmModal Message={`Are you sure to log out from your account ?`} OnConfirm={()=> HandleLogout()} onCancel={() => setModal(false)}/>}
            
            { updateModal && <AccountUpdateModal onClose={() => setUpdateModal(false)}/> }

        </div>
    );
};