import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import Productinfo from "./product-info";
import More from "./more";
function Products(){
    const [Product,setProducts] = useState([])
    const [Product2,setProducts2] = useState([])
    const [activeCard,setActiveCard] = useState(null)
    const [filteredItems,setFilteredItems] = useState([])
    // const [userSearch,setUserSearch] = useState("")
    useEffect(()=>{
      axios.get('https://dummyjson.com/products')
      .then((res)=>{
          setProducts(res.data.products)
          // console.log(res.data.products)
      })

    
     },[])
     const filterProducts = (userSearch)=>{
      let result = Product.filter ((item,i)=>{
        if(item.title.toLowerCase().includes(userSearch.toLowerCase())==true){
          return true
        }
        })
        setFilteredItems(result)
    }
     function applyFilter(cat){
      let productCopy=[...Product]
      // let result =[]
      console.log(cat)
      if(cat== "below"){
        let result = productCopy.filter((item,i)=>{
          if(item.price<=5){
            return true
          }
        })
        setFilteredItems(result)
      }else if(cat=="all"){
        
        setFilteredItems([])
      }else if (cat== "lowToHigh"){
        let result = productCopy.sort((a,b)=>{
         return a.price-b.price
        })
        setFilteredItems(result)
      }else if (cat== "highToLow"){
        let result = productCopy.sort((a,b)=>{
         return b.price-a.price
        })
        setFilteredItems(result)
      }
    }

// function openClothes(){
//   console.log("clothes called")
//   setProducts([])
//   axios.get('https://fakestoreapi.com/products')
//       .then((res)=>{
//           setProducts(res.data)
//           console.log(res.data)
//       })
// }


    return(
      <><div style ={{textAlign : "center" , padding :"15px"}}> 
      {/* <button >Cousmatcs</button>
<button 
// onClick={()=>{
//   openClothes()
// }}
>Clothes</button> */}

      <h1 > We Bring Many Products For You!!</h1><br/>
      {/* <input style ={{}} placeholder="search products"
      // value={userSearch}
      onChange={(e)=>{
        filterProducts(e.target.value)
      }}
      /> */}
 <ul className="nav-links">
    {/* <li><a href="#">Dashboard</a></li> */}
    <li className="upward"><a onClick={()=>{applyFilter("all")}} >All products</a></li>
    <li className="center"><a  onClick={() => {applyFilter("below")}}>Below 5$</a></li>
   
    <li className="forward"><a  onClick={()=>{applyFilter("lowToHigh")}} >Price low to high</a></li>
    <li className="forward"><a  onClick={()=>{applyFilter("highToLow")}} >Price high to low</a></li>
    <li><input style ={{}} placeholder="search products"
      // value={userSearch}
      onChange={(e)=>{
        filterProducts(e.target.value)
      }}
      /></li>
  </ul>
      
     {/* <button  onClick={() => {applyFilter("below")}}>below 5$</button> 
      <button onClick={()=>{applyFilter("all")}}>All products</button>
      <button onClick={()=>{applyFilter("lowToHigh")}}>Price low to high</button>
      <button onClick={()=>{applyFilter("highToLow")}}>Price high to low</button> */}
      </div>

  <div id="product-div"  >


{/* condition to render */}
    { filteredItems.length==0 ? Product.map((item,i)=>{
  return <Productinfo 
  i={i} item={item} Product={Product} setProducts={setProducts} activeCard={activeCard} setActiveCard={setActiveCard} />

 
     }):filteredItems.map((item,i)=>{
      return <Productinfo 
      i={i} item={item} Product={Product} setProducts={setProducts} activeCard={activeCard} setActiveCard={setActiveCard} />
    
     
         })}
      </div>
      
      <div className="x"><a href="#"><i  className="bi bi-arrow-up x"></i></a></div>
      </>
    
    )
}


export default Products;