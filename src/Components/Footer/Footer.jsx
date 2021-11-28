import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import "./Footer.scss"

function Footer() {
    return (
        <div className="Footer">
            <div className="wrapper">
                <div className="left">
                   <h1> <span>YY</span> SHOP</h1>
                   <p>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>
          <div className="icons">
          <div className="icon" style={{backgroundColor:"#3B5999"}} color="3B5999">
            <Facebook />
          </div>
          <div className="icon" style={{backgroundColor:"#E4405F"}} color="E4405F">
            <Instagram />
          </div>
          <div className="icon" style={{backgroundColor:"#55ACEE"}} color="55ACEE">
            <Twitter />
          </div>
          <div className="icon" style={{backgroundColor:"#E60023"}} color="E60023">
            <Pinterest />
          </div>
          </div>
                </div>
                <div className="middle">
                    <h1>Useful Links</h1>
                    <ul>
   
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
          </ul>
                </div>
                <div className="right">
                    <h1>Contact</h1>
                    <div className="info">
                        <span><Room/></span> <span>622 Dixie Path , South Tobinchester 98336</span>
                    </div>
                    <div className="info">
                        <span><Phone/></span> <span>+1 234 56 78</span>
                    </div>
                    <div className="info">
                        <span><MailOutline/></span> <span>contact@lama.dev</span>
                    </div>
                    <div className="info">
                   <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
