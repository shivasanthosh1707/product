import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function More(){
const [Product2,setProducts2]=useState([])
const [activeCard,setActiveCard] = useState(null)
let navigate = useNavigate();
useEffect(()=>{
axios.get(`https://fakestoreapi.com/products`)
.then((res)=>{
    console.log(res.data)
    setProducts2(res.data)
    
    // console.log(typeof(Product2))
})
},[])

    return(
       <><div id="product-div">
       {Product2.map((item,i)=>{
        return  <div id="cards"
       className={`${i==activeCard?'active-class':''}`}///learn
        onMouseOver={()=>{
         setActiveCard(i)
      }}
        >
        <img style={{width:"50%" , height:"40%", padding:"10px"}} src={item.image}></img>
        <h6>{item.title}</h6>
        <p>Price : {item.price}$</p>
        <p>Rating : {item.rating.rate}/5</p>
        
        <button className="more-button"
         >See more details</button>
        
       
      </div>
       })}
     </div>  </> 


    )
}
export default More