import React, { useState } from "react";

import axios from "axios";

import { BACKEND_URL } from "../utilities/config.js";

import { authenticate } from "../redux/reducers/authentication";

import { useDispatch } from "react-redux";

import Input from "../components/Input";

import { Link } from "react-router";

import { FaLockOpen, FaUser } from "react-icons/fa";

import { alert } from "../redux/reducers/alert";

const inputs = [

    {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter your email ..."
    },

    {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your password ..."
    },
];


export default function Login () {

    let dispatch = useDispatch();

    const [form, setForm] = useState({ email: '', password: '' });

    const HandleInput = (e) => setForm({ ...form,[e.target.name]: e.target.value });

    const HandleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(`${BACKEND_URL}/api/login`, form)

            .then((response) => {

                localStorage.setItem("token", response.data.token);

                dispatch(authenticate({ user: response.data.user }));

                dispatch(alert({ 
                    
                    props: { 

                        show: true,
                        variant: "success",
                        title: "Authentication Successfull",
                        details: response.data.message
                    } 
                }));

            })
            .catch((error) => {

                dispatch(alert({ 
                    
                    props: { 
                        
                        show: true,
                        variant: "error",
                        title: "Authentication Error",
                        details: error.response.data.message
                    } 
                }));

            });
    };

    return (
        <section className="w-full h-full flex flex-row items-center">
            
            <section className="hidden lg:visible md:w-[30%] lg:[w-30%] p-4 box-border h-full lg:flex flex-col items-start justify-between bg-gradient-to-b from-color_primary-100 to-color_secondary-100">
                <img src={require('../assets/images/logo-icon.jpg')} className="h-12 rounded-xl" alt="image"/>
                <img src={require('../assets/images/phone.png')} className="h-80" alt="image"/>
                <p className="text-sm text-white">All Missing document deserver to be <b>found</b> !</p>
            </section>

            <section className=" w-full lg:w-[70%] h-full flex felx-col items-center justify-center">

                <div className="h-60 w-60 absolute top-[25%] z-10 bg-gradient-to-r from-color_primary-100 rounded-full"></div>
                <div className="h-60 w-60 absolute top-[50%] z-10 bg-gradient-to-r from-transparent to-color_secondary-100 rounded-full"></div>
                <form onSubmit={(e) => HandleSubmit(e)} className="w-full p-0 sm:w-[80%] md:w-[50%] xl:w-[40%] z-20 bg-[#FFFFFFF0] rounded-full">
                    <div className="w-full flex flex-col gap-4 p-4">

                        <div>
                            <img src={require('../assets/images/logo.jpg')} className="h-12 rounded-xl" alt="image"/>
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <h3 className="text-2xl font-bold">Login</h3>
                            <p className="text-sm text-slate-400">Welcome back, please login into your findit account.</p>
                        </div>

                        { inputs.map((input, key) => (
                            <Input type={input.type} name={input.name} label={input.label} placeholder={input.placeholder} HandleInput={HandleInput}/> ))
                        }

                        <button 
                            type="submit"
                            className="w-full p-4 flex flex-row gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-color_secondary-100 to-color_secondary-300"
                        >
                            <FaLockOpen color="white"/>
                            <span className="text-sm text-white font-semibold">Login</span>
                        </button> 

                        <p className="text-sm text-slate-500 text-center">Hey, No account yet ?</p>

                        <Link to="/signup">
                            <button 
                                className="w-full p-4 flex flex-row gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-color_primary-100 to-color_primary-300"
                            >
                                <FaUser color="white"/>
                                <span className="text-sm text-white font-semibold">Create an account</span>
                            </button>
                        </Link>
                         
                    </div>
                </form>
            </section>
        </section>
    );

};
