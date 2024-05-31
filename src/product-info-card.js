import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function InfoCard(){
  const [card,setCard] = useState({})
  let navigate = useNavigate();
    let {id} = useParams();
    
const [smallPhotoIndex,setSmallPhotoIndex]=useState(0)
   useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
      setCard(res.data)
     
    //  console.log(typeof(smallPhoto))
    })
   },[])
  
    return(  <>
    <h2 style ={{textAlign : "center" , padding :"15px",fontFamily :"poppins"}}>Product Details</h2>
    <div className="card mb-3"style={{width:"70%", margin:"20px auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={card.thumbnail} className="img-fluid rounded-start" style={{width:"100%"}} alt=''/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <b className="card-title"> Item :{ card.title}</b>
        <p className="card-text">{card.description}</p>
        <p className="card-text"><small className="text-body-secondary">Price : {card.price}$</small></p>
        <p className="card-text"><small className="text-body-secondary">Waranty : {card.warrantyInformation
}</small></p>
        <p className="card-text"><small className="text-body-secondary">Rating : {card.rating}</small></p>
        <p className="card-text"><small className="text-body-secondary">stock : {card.stock}</small></p>
        

  <div className="small-photo-wrapper"  > {card.images!=undefined? card.images.map((item,i)=>{
      return <img onClick={()=>{setSmallPhotoIndex(i)
         setCard({...card,thumbnail:item})} }
     
      className={`small-image ${smallPhotoIndex==i?`active-small-image`:``}`} src={item}/>}) :``}</div>
     <br/>  <button>Buy now$ </button>
     <button className="more-button"
    onClick={ ()=>{navigate(`/products/`)}}>back</button>
   
      </div>
    </div>
  </div>
</div>
        </>
      
    
    )
}
export default InfoCard