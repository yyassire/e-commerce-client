import { Badge } from "@mui/material"
import {ShoppingCartOutlined,ArrowDropDownOutlined,HowToReg,Language, Search, LoginOutlined} from '@mui/icons-material';
import "./Topbar.scss"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function Topbar() {
    const [showPhone, setShowPhone] = useState(false)
    const [showTablet, setShowTablet] = useState(false)
 useEffect(() => {
     const handleChanges = ()=>{
         if (window.innerWidth < 640 ){
           setShowPhone(true)
         } else if (window.innerWidth <768){
           setShowTablet(true)
         } else{
          setShowPhone(false)
          setShowTablet(false)
         }
     }
    window.addEventListener("resize",handleChanges)
    return ()=> window.removeEventListener("resize",handleChanges)
 }, [])
 useEffect(() => {
   if(window.innerWidth <798){
       setShowTablet(true)
   }
 }, [])
 const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className="Topbar">
            <div className="wrapper">
                {!showTablet && <div className="left">
                    <span className="language">ENG <span><ArrowDropDownOutlined/></span></span>
                    <span className="search"><input type="text" placeholder="Search" /><Search/></span>
                </div>}
                <div className="middle"><Link to="/"><span>YY</span> SHOP</Link></div>
                 <div className="right">
                     {!showTablet ? <><Link to="/register"><span>REGISTER</span></Link>
                     <Link to="/login"><span>LOGIN</span></Link>
                   <Link to="/cart">
                   <Badge badgeContent={quantity} color="primary">
                         <ShoppingCartOutlined color="action" />
                     </Badge></Link>
                     </>
                     :<>
                     <span><Language/></span>
                     <span><Search/></span>

                     <span><HowToReg/></span>
                     <span><LoginOutlined/></span>
                    <Link to="/cart"> <Badge badgeContent={quantity} color="primary">
                         <ShoppingCartOutlined color="action" />
                     </Badge></Link>
                     </>}

                 </div>
            </div>
            
        </div>
    )
}

export default Topbar
