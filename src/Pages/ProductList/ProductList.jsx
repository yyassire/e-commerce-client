import "./ProductList.scss"
import Footer from "../../Components/Footer/Footer"
import Topbar from '../../Components/Topbar/Topbar'
import Promotion from "../../Components/Promotion/Promotion"
import NewLetters from "../../Components/NewLetters/NewLetters"
import Products from "../../Components/Products/Products"
import ProductFilter from "../../Components/ProductFilter/ProductFilter"
import { useState } from "react"

function ProductList() {
    const [timestamp,setTimestamp]= useState("")
    const [sizeColor,setSizeColor]= useState({})

    return (
        <div className="ProductLists">
           <Topbar/>
           <Promotion/>
           <ProductFilter timestamp={timestamp} setTimestamp={setTimestamp} sizeColor={sizeColor} setSizeColor={setSizeColor} />
           <Products timestamp={timestamp} setTimestamp={setTimestamp} sizeColor={sizeColor} setSizeColor={setSizeColor}/>
           <NewLetters/>
           <Footer/>
        </div>
    )
}

export default ProductList
