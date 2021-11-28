import "./Product.scss"
import Topbar from '../../Components/Topbar/Topbar'
import Promotion from "../../Components/Promotion/Promotion"
import Footer from "../../Components/Footer/Footer"
import SingleCart from "../../Components/SingleCart/SingleCart"

function Product() {
    return (
        <div className="Product">
          <Topbar/>
          <Promotion/>
          <SingleCart/>
          <Footer/>
        </div>
    )
}

export default Product
