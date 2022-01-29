import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="App">
            <h1>curriculum</h1>
            <button>
                <Link to ="/softskills">Softskills</Link>
            </button>
        </div>
    )
}

export default Home