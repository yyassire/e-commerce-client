import "./Slider.scss"
import {sliderItems} from "../../Data/dummyData"
import { ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"

function Slider() {
    const [sliceCount, setSliceCount] = useState(0)
    const handleRight = ()=>{
        if(sliceCount < sliderItems.length -1){
            setSliceCount(sliceCount +1)
          }else{setSliceCount(0)}
    }
    const handleLeft = ()=>{
        if(sliceCount > 0){
            setSliceCount(sliceCount - 1)
         
        }else{setSliceCount(sliderItems.length -1)}
    }
    return (
        <div className="Slider">
        <div className="wrapper">
            <div className="arrow"onClick={handleLeft}>
            <ArrowLeftOutlined className="icon" />
            </div>
            {sliderItems.map((item)=>{
                return  <div key={item.id} style={{background:`#${item.bg}`,transform:`translateX(${-100 * sliceCount}vw)`}} className="singleSlide">
                    <div className="left"><img src={item.img} alt="" /></div>
                    <div className="right">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <button className="button"><span>Show More </span><ArrowRight/></button>
                    </div>
                </div>
            
            })}
            <div className="arrow right" onClick={handleRight}>
            <ArrowRightOutlined className="icon" />
            </div>
        </div>
        </div>
    )
}

export default Slider
