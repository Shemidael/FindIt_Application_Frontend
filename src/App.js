import React, { useEffect } from "react";

import axios from "axios";

import { BACKEND_URL } from "./utilities/config.js";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Settings from "./pages/Settings.js";

import FeedDetails from "./pages/FeedDetails.js";

import { alert } from "./redux/reducers/alert.js";

import { authenticate } from "./redux/reducers/authentication.js";

import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router";

import "./styles/app.css";

import Banner from "./components/Banner";

export default function App () {

  const dispatch = useDispatch();

  const alertstate = useSelector(state => state.alert.props);

  const auth = useSelector(state => state.authentication.user);

  let token = localStorage.getItem('token');

  async function refreshToken () {

    await axios.post(`${BACKEND_URL}/api/refreshToken`, { token: token })

      .then((response) => {
        
        dispatch(authenticate({ user: response.data.user }));
      })
      .catch((error) => {

        dispatch(alert({ props: {
          
          show: true,
          variant: "information",
          title: "Authentication required",
          details: "Please provide you details inorder to authenticate !"
        } }));
      });
  };

  useEffect(() => {

    if (token) {

      refreshToken(); 
    }

    }, []);

  return (

    <BrowserRouter>
      { 
        alertstate.show 
          && 
        <Banner
          Title   = {alertstate.title}
          Variant = {alertstate.variant}
          Details = {alertstate.details} 
          onCloseBanner={() => dispatch(alert({ props: { show: false } }))} 
        /> 
      }
      <div className="App">
        <Routes>
          { 
            auth._id ? 
            
              <Route path="/" element={<Home/>}/> 
              : 
              <Route path="/" element={<Login/>}/>
          }
          
          <Route path="/signup" element={<Signup/>}/>

          { 
            auth._id 
            && [ 
              <Route path="/feeds/:index/:feedId" element={<FeedDetails/>}/> ,
              <Route path="/settings" element={<Settings/>}/>
            ] 
          }
        </Routes>
      </div>
    </BrowserRouter>
    
  );
  
};