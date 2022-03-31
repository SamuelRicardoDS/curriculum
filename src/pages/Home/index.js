import React from "react";
import Homebuttons from "../../components/Homebuttons";
import Hometitle from "../../components/Hometitle";
import './style.css'


function Home() {
    return(
        <div className="App">
            <Hometitle/>
           
            <Homebuttons/>
            
        </div>
    )
}

export default Home