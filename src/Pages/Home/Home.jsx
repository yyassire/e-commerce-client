import "./Home.scss"
import Topbar from '../../Components/Topbar/Topbar'
import Promotion from "../../Components/Promotion/Promotion"
import Slider from "../../Components/Slider/Slider"
import Categories from "../../Components/Categories/Categories"
import Products from "../../Components/Products/Products"
import NewLetters from "../../Components/NewLetters/NewLetters"
import Footer from "../../Components/Footer/Footer"
import { useEffect } from "react"

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Promotion/>
            <Topbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewLetters/>
            <Footer/>
        </div>
    )
}

export default Home
