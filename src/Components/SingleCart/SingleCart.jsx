import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { publicBaseUrl } from "../../axios"
import { addCart } from "../../redux/CartSlice"
import "./SingleCart.scss"

function SingleCart() {
    const state = useSelector(state => state.cart)
    const [product, setProduct] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const res = await publicBaseUrl.get(`/product/find/${id}`)
            setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    fetchData()
    }, [id])
    // FUNCTIONAS
    const handleQuantity = (action)=>{
        if(action === "increase"){
            setQuantity(quantity + 1)
        }
        if(action === "decrease" && quantity!== 1){
            setQuantity(quantity - 1)
        }
    }
  const handleSubmit =(e)=>{
      e.preventDefault()
      dispatch(addCart({...product,quantity,color,size}))
      
  }
  console.log(state)
    return (
        <div className="SingleCart">
            <div className="singleCartWrapper">
                <div className="left">
                <img src={product.img} alt="" />
                </div>
                <div className="right">
                    <h1>{product.title}</h1>
                    <p>{product.desc}</p>
              <span className="price">$ {product.price}</span>
              <div className="preferences">
                  <div className="color">
                  <span>Color</span>
                  {product.color?.map((item,i)=>{
                     return   <div key={i} style={{backgroundColor:item}} onClick={()=>setColor(item)} className="span" ></div>
                  })}
    
                  </div>
                  <div className="size">
                      <span>Size</span>
                      <select defaultValue="size" onChange={(e)=>setSize(e.target.value)}>
                          <option value="size" disabled>size</option>
                          <option value="s">S</option>
                          <option value="m">M</option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>

                      </select>
                  </div>
              </div>
              <div className="callToAction">
                  <div className="addsBtn">
                  <Remove className="icon" onClick={()=>handleQuantity("decrease")}/>
                    
                      <span>{quantity}</span>
                      <Add className="icon" onClick={()=>handleQuantity("increase")}/>
                  </div>
                  <div className="btn">
                      <button  onClick={handleSubmit}>ADD TO CART</button>
                  </div>
              </div>
                </div>
            </div>

        </div>
    )
}

export default SingleCart
