import React, { useState } from "react";

import axios from "axios";

import { BACKEND_URL } from '../utilities/config.js'

import { authenticate } from "../redux/reducers/authentication";

import { useDispatch } from "react-redux";

import { alert } from "../redux/reducers/alert";

import Input from "../components/Input";

import { Link, useNavigate } from "react-router";

import { FaLockOpen, FaUser } from "react-icons/fa";

const inputs = [

    {
        name: "firstname",
        type: "text",
        label: "First name",
        placeholder: "Enter your first name ..."
    },

    {
        name: "lastname",
        type: "text",
        label: "Last name",
        placeholder: "Enter your last name ..."
    },

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

    {
        name: "confirm_password",
        type: "password",
        label: "Confirm password",
        placeholder: "Re-enter your password ..."
    },
];


export default function Signup () {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const [form, setForm] = useState({

        email: '',
        lastname: '',
        firstname: '',
        password: '',
        confirm_password: ''
    });

    const HandleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const HandleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(`${BACKEND_URL}/api/signup`, form)

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

                navigate('/');

            })
            .catch((error) => {

                console.log(error.response.data);

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
        <section className="w-full h-full sm:flex xl:flex-row sm:flex-col items-center sm:overflow-scroll">
            
            <section className="lg:w-[30%] w-full p-4 box-border h-full hidden xl:block flex-col items-start justify-between bg-gradient-to-b  from-color_primary-100 to-color_secondary-100">
                <img src={require('../assets/images/logo-icon.jpg')} className="h-12 rounded-xl" alt=""/>
            </section>
            
            <section className="xl:w-[70%] w-full h-full flex flex-col items-center justify-center xl:overflow-scroll relative">

                <div className="h-60 w-60 absolute top-[25%] z-10 bg-gradient-to-r from-color_primary-100 rounded-full"></div>
                <div className="h-60 w-60 absolute top-[50%] z-10 bg-gradient-to-r from-transparent to-color_secondary-100 rounded-full"></div>
                <form onSubmit={(e) => HandleSubmit(e)}className="xl:w-[40%] lg:w-[50%] w-full sm:w-[80%] max-h-[90%] z-20 bg-[#FFFFFFF0] rounded-full">
                    <div className="w-full flex flex-col gap-4 p-4">

                        <div>
                            <img src={require('../assets/images/logo.jpg')} className="h-12 rounded-xl" alt="image"/>
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <h3 className="text-2xl font-bold">Signup</h3>
                            <p className="text-sm text-slate-400">Welcome ! Fill the form to create your findit account.</p>
                        </div>

                        { inputs.map((input, key) => (
                            <Input type={input.type} name={input.name} label={input.label} placeholder={input.placeholder} HandleInput={HandleInput}/> ))
                        }

                        <button 
                            type="submit"
                            className="w-full p-4 flex flex-row gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-color_secondary-100 to-color_secondary-300"
                        >
                            <FaLockOpen color="white"/>
                            <span className="text-sm text-white font-semibold">signup now</span>
                        </button> 

                        <p className="text-sm text-slate-500 text-center">Hey, already have an account ?</p>

                        <Link to='/'>
                            <button 
                                className="w-full p-4 flex flex-row gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-color_primary-100 to-color_primary-300"
                            >
                                <FaUser color="white"/>
                                <span className="text-sm text-white font-semibold">Login to my account</span>
                            </button> 
                        </Link>
                    </div>
                </form>
            </section>
        </section>
    );

};

