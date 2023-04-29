import React from "react";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { stores } from "./store";
import Home from "./home/home";
import Services from "./services/services";
import Header from './header/header';
import Contact from './contact/contact';
import Footer from './footer/footer';
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
                        
                    </Routes>
                    <Routes>
                        <Route path='/contact' element={<Contact/>} />
                        
                    </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Redux;

