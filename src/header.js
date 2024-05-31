import React,{useState,useEffect} from "react";
import './App.css';
import Help from "./contact";
import Profile from "./profile"
import { Link ,NavLink,useNavigate} from "react-router-dom";
import Products from "./products";
import axios from "axios";

function Header({setLogin,updateSetLogin}){
  let navigate = useNavigate();

    function Login(){
        if (setLogin== false){
            return <button className="login-btn" onClick={()=>{updateSetLogin(true)}}>Login <i className="bi bi-box-arrow-in-right"></i></button>
        }else{
            return <button  className="login-btn" onClick={()=>{updateSetLogin(false)}}>LogOut <i className="bi bi-box-arrow-right"></i></button>
        }
        
    }
    return(

      <> 
      <div className="header-top"><p>Get 10% off selected items when you spend £60* with code: WOW *Exclusions apply</p></div>
      <div className="header-mid"><p>"Fashion fades, but style is eternal. Shop now!"</p></div>
      {/* <div className="header-down"><p>"Explore Our Collections"</p></div> */}
      <div className="navbar">
      <NavLink activeclassname="active" to="/"  className="nav" > <span className="nykee-shoping"> NYKEE SHOPING <i className="bi bi-bag-heart-fill"></i></span></NavLink >
        <NavLink activeclassname="active" to="/"  className="nav" >Home</NavLink >
        {setLogin==true?<NavLink activeclassname="active" to="/products"  className="nav">Products</NavLink>:``}
      <NavLink activeclassname="active" to="/profile"  className="nav">Profile </NavLink>
      <NavLink activeclassname="active" to="/help"   className="nav">More</NavLink>
      
      <Login/>
       </div>
       <div>
    <div style={{textAlign:"center", margin:" 15px 0px"}}>
    {setLogin==false?<p style={{ color:"red"}}>please Login!! to see products</p>:<p style={{color:"green", padding:"5px"}} ></p>}</div>
    </div>
    
       </> 
   )
 }

export default Header;