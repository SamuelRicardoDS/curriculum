import React from "react"
import { Link } from "react-router-dom"

function Homebuttons() {
    return(
        <section className="Bodybuttons">
            <button>
                curriculum vitae
            </button>
             <button>
                <Link to ="/softskills">Softskills</Link>
            </button>
            <button>
                <Link to ="/hardskills">Hardskills</Link>
            </button>
        </section>
    )
}

export default Homebuttons