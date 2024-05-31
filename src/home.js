import React,{useState} from "react";
import './App.css';
import { Navigate, useNavigate } from "react-router-dom";
function Home(){

  const navigate = useNavigate()
    return(
  <div style={{ color: "red"}}> 
    
<div> 
  <button onClick={()=>{
    navigate(`/products`)
  }}
  className="shop-now-btn" >Shop Now</button>
   <img style={{ width: "50%"}} src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   <img style={{ width: "50%"}} src="https://images.unsplash.com/photo-1523634118614-82b2685ee3df?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   

<div className="home-offers">
   <div className="card offer-img"  style={{width: "20%",margin:"20px"}}>
  <img  src="https://images.unsplash.com/photo-1600852306771-c963331af110?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
  <div className="card-body">
    <b className="card-text">Flat 50% off. on LIPSTICS</b>
  </div>
</div>
<div className="card offer-img"  style={{width: "20%",margin:"20px"}}>
  <img  src="https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
  <div className="card-body">
    <b className="card-text">Buy 1 Get 3 Lacquers</b>
  </div>
</div>
<div className="card offer-img"  style={{width: "20%",margin:"20px"}}>
  <img  src="https://images.unsplash.com/photo-1590156221187-1710315f710b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
  <div className="card-body">
    <b className="card-text">Flat 15% off. on CHANEL ( paris )</b>
  </div>
</div>
<div className="card offer-img"  style={{width: "20%",margin:"20px"}}>
  <img  src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZSUyMGNvc21ldGljcyUyMHByb2R1Y3RzfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
  <div className="card-body">
    <b className="card-text">Upto 60% off. on PERFUME</b>
  </div>
</div>
<div className="card offer-img"  style={{width: "20%",margin:"20px"}}>
  <img  src="https://media.istockphoto.com/id/1400234535/photo/blank-eyeliner-mascara-tube-with-box-mockup-isolated-on-pink-background-top-view-3d.jpg?s=1024x1024&w=is&k=20&c=c0h1HEruY5RXT2__NnF4FQ7M6mDaV0cOJKw5u-SmiMk=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <b className="card-text">Flat 30% off. on MASKARA</b>
  </div>
</div>

</div>







   <img style={{ width: "100%"}} src="https://images.unsplash.com/photo-1600634999623-864991678406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   <img style={{ width: "100%"}} src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   {/* <img style={{ width: "100%"}} src=""/>
   <img style={{ width: "100%"}} src=""/> */}
    </div>
    
    </div>

    )}
  
  
  
  export default Home;