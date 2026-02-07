import React from "react";

import { BsExclamationCircleFill } from "react-icons/bs";

export default function ConfirmModal ({ Message, OnConfirm, onCancel }) {

    return (
        <div className="absolute p-4 sm:p-0 top-0 left-0 w-full h-full bg-color_backdrop flex flex-row items-center justify-center">
            <div className="w-max md:w-[40%] lg:w-[30%] bg-white p-4 gap-2 rounded-2xl flex flex-col items-center">
                <BsExclamationCircleFill size={40} color="orange"/>
                <p className="text-md font-semibold text-center">{Message}</p>
                <div className="flex flex-row w-full gap-4 pt-2 items-center justify-center">
                    <button className="p-3 w-full bg-color_secondary-200 rounded-md text-sm font-semibold text-white" onClick={OnConfirm}>Confirm</button>
                    <button className="p-3 w-full bg-slate-200 rounded-md text-sm font-semibold" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};