import React from "react";
import Homebuttons from "../../components/Homebuttons";
import Hometitle from "../../components/Hometitle";
import Textbox from "../../components/Textbox";
import './style.css'


function Home() {
    return(
        <div className="App">
            <Hometitle/>
            <div>
            <Homebuttons/>
            <Textbox></Textbox>
            </div>
        </div>
    )
}

export default Home