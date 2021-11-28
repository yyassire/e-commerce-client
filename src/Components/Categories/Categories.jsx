import "./Categories.scss"
import {categories} from "../../Data/dummyData"
import {Link} from "react-router-dom"

function Categories() {
    return (
        <div className="Categories">
            <div className="wrapper">
         
          {categories.map((item)=>{
                return <Link key={item.id} to={`/productList/${item.cat}`}>
                     <div  className="category">
                <div className="img"> <img src={item.img} alt="" /></div>
                <div className="info">
                    <h1>{item.title}</h1>
                    <button>SHOP NOW</button>
                </div>
             </div>
                     </Link> 
            })}
   
            </div>

            
        </div>
    )
}

export default Categories
