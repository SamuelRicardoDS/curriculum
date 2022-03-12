import React from "react"
import { Link } from "react-router-dom"
import './style.css'

function Homebuttons() {
    return(
        <section className="Bodybuttons">
            <div>
                <button className="Curriculumbutton">
                    curriculum vitae
                </button>
            </div>
            <div>
                <button className="Softbutton">
                    <Link to ="/softskills">Softskills</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to ="/hardskills">Hardskills</Link>
                </button>
            </div>
        </section>
    )
}

export default Homebuttons