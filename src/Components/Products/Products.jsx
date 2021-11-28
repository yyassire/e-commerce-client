import "./Products.scss"
import {ShoppingCartOutlined, Search, FavoriteBorder, LtePlusMobiledataSharp} from '@mui/icons-material';
import {popularProducts} from "../../Data/dummyData"
import { useEffect, useState } from "react";
import { publicBaseUrl } from "../../axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


function Products({timestamp,setTimestamp,sizeColor,setSizeColor}) {
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
   
    const location = useLocation()
   const cat = location.pathname.split("/")[2]
    useEffect(() => {
    const fetchProducts = async ()=>{
        const res = await publicBaseUrl.get(`/product${cat ? "?cat="+cat:""}`)
        cat ? setProducts(res.data):setProducts(res.data.slice(0,10))
    }
    fetchProducts()
    }, [cat])
    useEffect(() => {

    cat && setFilteredProducts(products.filter((item)=>{
      return  Object.entries(sizeColor).every(([key,value])=>{
          return  item[key].includes(value)
        })
    }))
    }, [sizeColor,products,cat])
    useEffect(() => {
       if(timestamp === "newest"){
           setFilteredProducts((prev)=>{
               return [...prev].sort((a,b)=>a.createdAt - b.createdAt)
           })
       }
       if(timestamp === "ascd"){
        setFilteredProducts((prev)=>{
            return [...prev].sort((a,b)=>a.price - b.price)
        })
    }
    else{
        setFilteredProducts((prev)=>{
            return [...prev].sort((a,b)=>b.price - a.price)
        })    
    }

    }, [timestamp])
    return (
        <div className="Products">
           <div className="wrapper">
               {(cat ?filteredProducts:products).map((item)=>{
                   return <Link key={item._id} to={`/product/${item._id}`}>
                   <div key={item._id} className="product">
                   <div className="img">
                       <img src={item.img} alt="" />
                   </div>
                   <div className="info">
                       <div className="circle"></div>
                       <div className="iconWrapper"><ShoppingCartOutlined className="icons"/></div>
                      <div className="iconWrapper"> <Search className="icons"/></div>
                      <div className="iconWrapper"> <FavoriteBorder className="icons"/></div>
                   </div>
               </div>
                   </Link>
               })}
           </div>
        </div>
    )
}

export default Products
