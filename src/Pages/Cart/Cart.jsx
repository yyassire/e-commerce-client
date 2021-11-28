import "./Cart.scss"

import Topbar from '../../Components/Topbar/Topbar'
import Promotion from "../../Components/Promotion/Promotion"
import Footer from "../../Components/Footer/Footer"
import CartHeader from "../../Components/CartHeader/CartHeader"
import SingleCart from "../../Components/orderedCart/SingleCart"
import Summery from "../../Components/Summery/Summery"
import { useSelector } from "react-redux"
function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <div>
        <Topbar/>
        <Promotion/>
        <CartHeader/>
        <div className="orderContainer">
            <div className="orderCart">
                {cart.products.map((product,i)=>{
                return <SingleCart product={product} key={i}/>
                    
                })}
            </div>
            <Summery/>
        </div>
        <Footer/>
        </div>
    )
}

export default Cart
