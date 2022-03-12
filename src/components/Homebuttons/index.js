import React from "react"
import { Link } from "react-router-dom"

function Homebuttons() {
    return(
        <div className="Bodybuttons">
            <button>
                curriculum vitae
            </button>
             <button>
                <Link to ="/softskills">Softskills</Link>
            </button>
            <button>
                <Link to ="/hardskills">Hardskills</Link>
            </button>
        </div>
    )
}

export default Homebuttons