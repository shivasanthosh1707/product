import React,{useState,useEffect} from "react";
import './App.css';
import {BrowserRouter,Routes,Route,Link,NavLink,Navigate} from "react-router-dom"
import Home from "./home";
import Help from "./contact";
import Profile from "./profile";
import Header from "./header";
import Footer from "./footer";
import Products from "./products";
import Productinfo from "./product-info";
import More from "./more";
import axios from "axios";
import InfoCard from "./product-info-card";
function App(){
  const [setLogin,updateSetLogin] = useState(false)
 
  return(
    <>
<BrowserRouter>
<Header setLogin={setLogin} updateSetLogin={updateSetLogin}/>

<Routes>
  {/* <Route path="/contact" element={<Contact/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/" element={<Home/>}/> */}
  <Route path="/products" element={setLogin==true? <Products/>: <Navigate to ="/"/>}/>
<Route path="/help" element={setLogin== true? <Help/> :<Navigate to = "/"/>}/>
  <Route path="/profile" element={setLogin==true? <Profile/>: <Navigate to ="/"/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/products/:id" element={<InfoCard/>}/>
  <Route path="*" element={<h1>404 Not found</h1>}/>
    </Routes>
   
    <Footer/>
    </BrowserRouter>
  </>
)
}

export default App;
