import React from "react";
import './App.css';
function Profile(){
    return(
    <><h1 style={{textAlign:"center" ,margin:"20px"}} >PRO FILE </h1>
    {/* <div className="profile-wrapper"> */}
    <div className="profile-square">
    <div className="profile-square-one">


<img className="profile-img" src="https://i.pinimg.com/736x/fe/37/3e/fe373e7cd05b6d7239251652f9c5c348.jpg"/>


</div>
<div className="profile-square-two">
<h2>Shiva santhosh <i style={{color:"red"}} className="bi bi-hearts"></i> </h2>
<h5 style={{color:"red"}}>web developer</h5>
<p>I am NOW , Open to Work</p>
<span style={{display:"flex"}}><a href="tel:919182868227"><button>HIRE</button></a>
<a href="https://shivasanthosh1707.github.io/portfolio/"><button  >PORTFOLIO</button></a> </span>
<span style={{display:"flex" , justifyContent:"space-evenly",marginTop:"20px"} }>
<a href="https://wa.me/9182868227"><i className="bi bi-whatsapp"></i></a>
<a href="https://www.instagram.com/santhosh_raa_1_/"><i className="bi bi-instagram"></i></a>
<a href="https://www.instagram.com/santhosh_raa_1_/"><i className="bi bi-twitter"></i></a>
<a href="tel:919182868227"><i className="bi bi-telephone"></i></a>
</span>


</div>

</div>
   
   
 
 </>)
  }
  
  export default Profile;