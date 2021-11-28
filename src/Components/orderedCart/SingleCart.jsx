import { Add, Remove } from "@mui/icons-material"
import "./SingleCart.scss"

function SingleCart({product}) {
    return (
        <div className="singleCart">
        <div className="singCartWrapper">
            <div className="left">
                <img src={product.img} alt="" />
            </div>
            <div className="middle">
              <span>  <strong>Product:</strong>{product.title}</span>
              <span>  <strong>ID:</strong>{product._id}</span>
              <div className="color" style={{backgroundColor:`${product.color}`}}></div>
              <span>  <strong>SIZE:</strong>{product.size}</span>

            </div>
            <div className="right">
                <div className="quantity">
                <Add className="icon"/>
                      <span>{product.quantity}</span>
                      <Remove className="icon"/>
                </div>
                <span className="price">$ {product.price * product.quantity}</span>
            </div>
        </div>
        <div className="line"/>
        </div>
    )
}

export default SingleCart
