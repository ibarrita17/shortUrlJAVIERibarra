import React, {useEffect,useState} from "react";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import {UrlShortener} from "./components/urlshortener";
function App(){

  
  return(<div>
    <NavBar/>
    <UrlShortener />
    <Footer/>
    
  </div>);
}export default App;