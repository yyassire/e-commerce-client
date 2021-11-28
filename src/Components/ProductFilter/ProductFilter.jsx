import "./ProductFilter.scss"

function ProductFilter({timestamp,setTimestamp,sizeColor,setSizeColor}) {
    const handleFilter = (e)=>{
   setSizeColor({...sizeColor,
       [e.target.name]:e.target.value
   })
    }
    console.log(sizeColor)

    return (
        <div className="ProductFilter">
            <div className="top"><h1>Dresses</h1></div>
            <div className="bottom">
                <div className="left">
                    <div className="color">
                    <span>Filter Products: </span>
                    <select  defaultValue="color" name="color" onChange={handleFilter}>
                        <option disabled value="color">Color</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="red">red</option>
                        <option value="yellow">yellow</option>
                        <option value="orange">orange</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                </select>
                    </div>
                    <div className="size">
                    <span>Filter Products: </span>
                    <select defaultValue="size" name="size" onChange={handleFilter} >
                        <option disabled value="size">Size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">xl</option>
                        <option value="xxl">xxL</option>
            


                    </select>
                    </div>
                </div>
                <div className="right">
                    <span>Filter Products: </span>
                    <select onChange={(e)=>setTimestamp(e.target.value)} >
                        <option value="newest">newest</option>
                        <option value="ascd">ascd</option>
                        <option value="desc">desc</option>

                    </select>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter

