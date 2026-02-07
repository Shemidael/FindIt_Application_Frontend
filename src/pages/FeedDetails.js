import React from "react";

import { useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router";

import { FaArrowLeft } from "react-icons/fa";

import SocialMediaShare from "../components/SocialMediaShare";

import moment from "moment";

export default function FeedDetails () {

    let params = useParams();

    let navigate = useNavigate();

    const Feed = useSelector(state => state.feeds[params.index]);

    return (

        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50">


            <div className="xl:w-[40%] lg:w-[50%] md:w-[80%] sm:w-[80%] p-2 sm:p-0 h-full flex flex-col gap-4 py-4 box-border overflow-scroll">

                <div className=" flex flex-col gap-4 p-2 box-border">
                    <div className="w-max flex flex-row gap-2 items-center p-2 px-4 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300" onClick={() => navigate('/')}>
                        <FaArrowLeft/>
                        <span className="text-sm">back</span>
                    </div>
                    <h1 className="text-xl font-extrabold text-color_secondary-200">Feed Details</h1>
                </div>

                <div className="w-full p-4 flex flex-col gap-4 box-border border rounded-xl bg-white">
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

                    <label className="w-max text-[12px] p-2 px-4 text-color_secondary-100 bg-violet-50 rounded-full">posted {moment(Feed.createdAt).fromNow()}</label>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[22px] font-semibold">{Feed.title}</h1>
                        <p className="text-[14px]">
                            {Feed.description}
                        </p>
                    </div>
                </div>

                <div>
                    <SocialMediaShare url={window.location.href} content={Feed.title}/>
                </div>

            </div>


        </div>
    );
};

