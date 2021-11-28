import { useSelector } from "react-redux"
import "./Summery.scss"
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { tokenBaseUrl } from "../../axios";
const Key = "pk_test_51Jtt69AiMYpqrAqFDNZbGkKyg3Sy4TMx1VrjGELt1MF6lIZPIk3KRlD4HewE6kdQBvnXMScO6bZEMxhvp2BXwVx6003LuFG9K8"



function Summery() {

    const total = useSelector(state => state.cart.total)
    const cart = useSelector(state => state.cart)

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
    const onToken = (token)=>{
        setStripeToken(token)
    }
    useEffect(() => {
        const fetchData = async ()=>{
          try {
            const res = await tokenBaseUrl.post("/checkout/payment",{
                tokenId:stripeToken.id,
                amount:total*100
            })
           navigate("/success",{state:{stripeData:res.data,products:cart}})
          } catch (error) {
              console.log(error)
              
          }
        }
        stripeToken && fetchData()
    }, [stripeToken,total,navigate,cart])
    return (
        <div className="Summery">
            <div className="SummeryWrapper">
                <div className="top">
                    ORDER SUMMERY
                </div>
                <div className="middle">
                    <div className="item">
                        <span className="name">Subtotal</span>
                        <span className="price">$ {total}</span>
                    </div>
                    <div className="item">
                        <span className="name">Estimated Shipping</span>
                        <span className="price">$ {total}</span>
                    </div>
                    <div className="item">
                        <span className="name">Shipping Discount</span>
                        <span className="price">$0</span>
                    </div>
                    <div className="itemTotal item">
                        <span className="name">Total</span>
                        <span className="price">$ {total}</span>
                    </div>
                </div>
                <div className="bottom">
                    <StripeCheckout
                    name="YY shop"
                     image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                     billingAddress
                     shippingAddress
                    
                     description={`your total is $${total}`}
                     amount={total *100}
                     token={onToken}
                     stripeKey={Key}
                    >
                    <button>CHECKOUT NOW</button>

                    </StripeCheckout>
                </div>
            </div>
        </div>
    )
}

export default Summery
