import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//layout is base and upar niche same
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        //Header same , footer same
    )
}

export default Layout