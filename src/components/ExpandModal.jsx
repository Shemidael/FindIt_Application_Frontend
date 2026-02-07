import React from "react";

import { Link } from "react-router";

import { BsExclamationTriangle, BsGear, BsHeadset, BsInfoCircle } from "react-icons/bs";

const Options = [
    {
        name: "Settings",
        icon: <BsGear/>,
        link: "/settings"
    },
    {
        name: "Report and issue",
        icon: <BsExclamationTriangle/>
    },
    {
        name: "Customer support",
        icon: <BsHeadset/>
    },
    {
        name: "About",
        icon: <BsInfoCircle/>
    },
]

export default function ExpandModal () {

    return (
        <div className="absolute top-[10%] right-[1%] z-50 p-2 bg-white rounded-2xl border">
            <ul>
                {
                    Options.map((option) => (
                        <Link to={option.link || '/'}>
                            <li className="p-3 cursor-pointer hover:bg-slate-100 text-md rounded-md flex flex-row gap-4 items-center">
                                {option.icon}
                                <span>{option.name}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};