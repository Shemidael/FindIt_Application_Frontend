import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { alert } from "../redux/reducers/alert";

import axios from "axios";

import { BACKEND_URL } from "../utilities/config.js";

import Input from './Input';

import ActivityIndicator from "./ActivityIndicator";

import { FaTimes } from "react-icons/fa";

import { BsPlus, BsPlusCircle, BsNewspaper } from "react-icons/bs";

export default function AddFeedModal ({ onCloseModal }) {

    const user = useSelector(state => state.authentication.user);

    const [uploading, setUploading] = useState(false);

    let dispatch = useDispatch();

    const [form, setForm] = useState({

        title: '',
        image: '',
        description: '',

        user_id: user._id,
    });

    const HandleInput = e => {

        setForm({ ...form, [e.target.name]: e.target.files ? e.target.files[0] : e.target.value });
    };

    const HandleSubmit = async () => {

        setUploading(true);

        let feilds = Object.keys(form);

        let formdata = new FormData();

        feilds.forEach((feild) => {

            formdata.append(feild, form[feild]);
        });

        await axios.post('${BACKEND_URL}/api/feed/create', formdata)

            .then((response) => {

                dispatch(alert({

                    props: { 
                        show: true,
                        variant: "success",
                        title: "Upload Successfull",
                        details: response.data.message
                    } 
                }));

                setUploading(false);
            })

            .catch((error) => {

                dispatch(alert({

                    props: { 
                        show: true,
                        variant: "error",
                        title: "Upload Failed",
                        details: error.response.data.message
                    } 
                }));

                setUploading(false);
            });

    };

    return (
        
        <div className="absolute top-0 left-0 w-full h-full p-4 box-border flex flex-row justify-center items-center bg-color_backdrop backdrop-blur-sm overflow-hidden">
            <div className="xl:w-[40%] lg:w-[50%] md:w-[90%] sm:w-[90%] w-full max-h-[99%] p-4 flex flex-col gap-4 bg-white rounded-lg overflow-scroll">
                
                <div className="flex flex-row items-center justify-between">

                    <div className="flex flex-row items-center gap-2 text-md text-color_secondary-300">
                        <BsNewspaper size={25}/>
                        <h3 className="font-bold">New feed</h3>
                    </div>

                    <div className="p-2 box-border bg-slate-100 rounded-full text-slate-700 cursor-pointer hover:bg-red-100 hover:text-red-500" onClick={onCloseModal}>
                        <FaTimes/>
                    </div>

                </div>

                {
                    form.image
                    &&
                    <div className="relative h-[20rem] w-full">
                        <img src={URL.createObjectURL(form.image)} alt="" className="h-full w-full object-cover rounded-lg"/>
                        <label htmlFor="file" className="absolute bottom-[5%] left-[2.5%] p-2 text-[13px] bg-color_backdrop rounded-md text-white font-bold cursor-pointer">
                            Change image
                        </label>
                    </div>
                }

                <form className="flex flex-col gap-4 p-2 box-border" encType="multipart/form-data">
                    <Input
                        type="text"
                        name="title"
                        label="Feed's Caption" 
                        placeholder="Enter your feed's caption ..."
                        HandleInput={(e) => HandleInput(e)}/>
                    <Input
                        type="text"
                        name="description"
                        label="Feed's Description" 
                        placeholder="Enter your feed's description ..."
                        HandleInput={(e) => HandleInput(e)}/>

                    <label htmlFor="file" className="flex flex-row gap-2 items-center justify-center p-4 border-2 border-dashed rounded-lg text-slate-500 cursor-pointer hover:bg-slate-50">
                        <BsPlus size={25}/>
                        <p className="text-sm font-semibold">upload a File</p>
                    </label>

                    <input id="file" type="file" name="image" style={{ display: 'none' }} onInput={(e) => HandleInput(e)}/>
                    
                </form>

                <div>
                    <button className="flex flex-row gap-2 items items-center px-5 p-3 bg-color_secondary-200 rounded-md text-white" onClick={HandleSubmit} disabled={uploading}>
                        { uploading ? <ActivityIndicator/> : <BsPlusCircle size={18}/> }
                        <b className="font-semibold text-sm">{ uploading? 'Uploading feed ...' : 'Create feed' }</b>
                    </button>
                </div>

            </div>
        </div>
    );

};
