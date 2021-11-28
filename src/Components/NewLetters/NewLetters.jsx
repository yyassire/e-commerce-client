import { Send } from "@mui/icons-material"
import "./NewLetters.scss"

function NewLetters() {
    return (
        <div className="NewLetters">
           <div className="wrapper">
               <h1>New Letters</h1>
               <p>Get timely updates from your favorite products.</p>
               <div className="input">
                   <input type="text" placeholder="Your Email" />
                   <button><Send/></button>
               </div>
           </div>
        </div>
    )
}

export default NewLetters
