import React from "react";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { stores } from "./store";
import Home from "./home/home";
import Services from "./services/services";
import Header from './header/header';
import Contact from './contact/contact';
import Footer from './footer/footer';
import About from "./about/about";
import ServiceDetails from "./Service-details/service-details";
const Redux = () =>{
    return(
        <>
           <Provider store={stores}>
                <Routing/>
           </Provider> 
        </>
    );
}
const Main = () =>{
    return(
        <>
            <Home />
            <Services />

            
        </>
    );
}


const Routing = () =>{


    return(
        <>
            <BrowserRouter>
                
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/services' element={<Services/>} />
                        <Route path='/Service-details/:key/:index' element={<ServiceDetails/>} />
                        <Route path='*' element={<Navigate to={'/'} />}/>
                    </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Redux;

