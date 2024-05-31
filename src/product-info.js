import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import { Link ,Navigate, useNavigate ,useParams} from "react-router-dom";

function Productinfo({Product,setProducts,activeCard,setActiveCard,i,item}){

let navigate = useNavigate();

    return(
        <div id="cards"
  className={`${i==activeCard?'active-class':''}`}///learn
  onMouseOver={()=>{
    setActiveCard(i)
  }}>
  <img src={item.thumbnail}></img>
  <h5>{item.title}</h5>
  <p>Price : {item.price}$</p>
  <button className="more-button"
  onClick={ ()=>{navigate(`/products/${item.id}`)}}
  >See more details</button>
  
 
</div>

    )
}

export default Productinfo;