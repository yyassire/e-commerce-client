import "./CartHeader.scss"
import { Link } from "react-router-dom"

function CartHeader() {
    return (
        <div className="CartHeader">
            <h1>YOUR BAG</h1>
            <div className="cartHeaderWrapper">
                <div className="left">
                    <Link to="/"> <button>CONTINUE SHOPPING</button></Link>
                </div>
                <div className="middle">
                    <span>Shopping bag(2)</span>
                    <span>Your WhishList(0)</span>
                </div>
                <div className="right">
                    <button>Check New</button>
                </div>
            </div>

        </div>
    )
}

export default CartHeader
