import React, { useState } from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router";

import { BsSearch, BsPlus } from "react-icons/bs";

import axios from "axios";

import { BACKEND_URL } from "../utilities/config.js";

import Filters from "./Filters";

import SearchBox from "./SearchBox";

import FeedsCard from "./FeedsCard";

import AddFeedModal from "./AddFeedModal";

import '../styles/home-section.css';

export default function HomeSection () {

    const user = useSelector(state => state.authentication.user);

    const feeds = useSelector(state => state.feeds);

    const [searchTerm, setSearchTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);

    const [searchboxState, setSearchBoxState] = useState(false);

    const [addFeedModalState, setAddFeedModalState] = useState(false);

    const HandleSearchInput = async (e) => {

        setSearchTerm(e.target.value);

        setSearchBoxState(e.target.value.length > 0 ? true : false);

        await axios.post(`${BACKEND_URL}/api/feed/search/${e.target.value}`)

            .then((response) => {

                setSearchResults(response.data.result);
            })
            .catch((error) => { throw error; });
    };

    let navigate = useNavigate();

    return (
        
        <div className="section w-full h-full flex justify-center">

            <div className="xl:w-[40%] lg:w-[50%] md:w-[80%] sm:w-[80%] p-2 sm:p-0 h-full flex flex-col justify-start gap-2 box-border">
                
                <div className="w-full p-4 gap-2 flex flex-col border bg-white rounded-lg">
                    
                    <div className="px-4 w-full flex flex-row items-center justify-between">
                        <label className="text-[13px]">Hey <b>{user.firstname.toLowerCase()} {user.lastname.toLowerCase()}</b> ! found a missing article ...</label>
                        <button className="p-3 flex flex-row gap-2 rounded-xl bg-gradient-to-tr from-color_secondary-200  to-color_secondary-100" onClick={() => setAddFeedModalState(!addFeedModalState)}>
                            <BsPlus color="white" className="text-[1.5rem]"/>
                        </button>
                    </div>

                    <div className="px-4 flex flex-row gap-2 border items-center rounded-xl bg-slate-50">
                        <BsSearch/>
                        <input type="text" placeholder="Search a missing article ..." className="w-full p-3 text-[13px] bg-slate-50 outline-none" onInput={(e) => HandleSearchInput(e)}/>
                    </div>

                </div>

                { searchboxState && <SearchBox Search={searchTerm} OnCloseBox={() => setSearchBoxState(!searchboxState)} Results={searchResults}/> }

                <Filters/>

                <h1 className="p-4 box-border font-extrabold text-2xl text-color_secondary-200">Feeds</h1>

                {
                    feeds.map((feed, key) => (<FeedsCard Feed={feed} onTriggerDetails={() => navigate(`/feeds/${key}/${feed._id}`)}/>))
                }
                

                { addFeedModalState && <AddFeedModal onCloseModal={() => setAddFeedModalState(!addFeedModalState)}/> }

            </div>
        </div>
    );

};
