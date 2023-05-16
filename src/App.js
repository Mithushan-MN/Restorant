import React, { useEffect, useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import {css} from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader'


const App = () => {
  
  const[loading,setLoading]=useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20px;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000);
  },[])

  return (
    <div className='App'>
      {
        loading? < PropagateLoader color={"#2d2514"} loading={loading} css={override} size={30}/>
        :
        <>
        <Navbar />
        <Header />
        <Products />
        <About />
        <Contact />
        </>
      }
    </div>
  )
}

export default App
