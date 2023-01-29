import React from "react";
import loopPic from "../../Assets/full-loop.jpg"
import "./Home.css"
import BrandTile from "../../Components/BrandTile/BrandTile";

const Home = () => {
    return (
        <div className="Home">
            <div className="left-container">
                <div className="loopPic"><img src={loopPic} /></div>
            </div>
            <div className="right-container">
                <div className="heading"><h1>Experience Loop Store</h1></div>
                <div className="description-container">
                    <div className="contents-info">
                        <h2>The brands we have</h2>
                        <div className="product-tile">
                            <BrandTile />
                        </div>
                        <button className="go">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;