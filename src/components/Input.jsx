import React from "react";

export default function Input ({label, placeholder, type, name, content, HandleInput}) {

    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-normal">{label}</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                onInput={(e) => HandleInput(e)}
                className="w-full p-4 border text-sm rounded-xl"
            />
        </div>
    );
};