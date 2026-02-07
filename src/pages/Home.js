import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { BsHouse, BsChatDots, BsBell } from "react-icons/bs";

import { getFeeds } from "../redux/reducers/feeds.js"

import axios from "axios";

import { BACKEND_URL } from "../utilities/config.js";

import ExpandModal from "../components/ExpandModal";

import HomeSection from "../components/HomeSection";

import DiscussionSection from "../components/DiscussionSection";

import NotificationsSection from "../components/NotificationsSection";

import NavigationBar from "../components/NavigationBar";

const NavigationItems = [
    {
        label: 'home',
        icon: <BsHouse/>,
        element: <HomeSection/>,
    },
    {
        label: 'discussions',
        icon: <BsChatDots/>,
        element: <DiscussionSection/>,
    },
    {
        label: 'notifications',
        icon: <BsBell/>,
        element: <NotificationsSection/>,
    },
    
];

export default function Home () {

    let dispatch = useDispatch();

    const [expandModal, setExpanModal] = useState(false);

    const [activeNavigation, setActiveNavigation] = useState(0);

    const setActiveNavigationElement = (key) => setActiveNavigation(key);

    useEffect(() => {
  
        async function fetchFeeds() {
    
        await axios.get(`${BACKEND_URL}/api/feed`)
        
            .then((response) => {
        
                dispatch(getFeeds(response.data.feeds));
            });
        };

    fetchFeeds();
  
    });

    return (
        
        <div className="w-full h-full bg-slate-50">

            <NavigationBar NavigationItems={NavigationItems} setActiveElement={setActiveNavigationElement} onToggleExpandModal={() => setExpanModal(!expandModal)}/>

            { expandModal && <ExpandModal/> }

            <div className="render-frame pt-20 w-full h-full overflow-scroll">
                { NavigationItems[activeNavigation].element }
            </div>

        </div>
    )
};

