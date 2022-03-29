import React from "react"
import { Link } from "react-router-dom"
import './style.css'

function Homebuttons() {
    return(
        <div className="page">
            <div className='textbox'>
            <div className='texto'>Olá, seja bem vindo(a) ao meu Webcurriculum!</div>
            </div>
        <section className="Bodybuttons">
            <div>
                <button className="Curriculumbutton">
                    <Link to="/cv">Curriculum Vitae</Link>
                </button>
            </div>
            <div>
                <button className="Softbutton">
                    <Link to ="/softskills">Softskills</Link>
                </button>
            </div>
            <div>
                <button className="Hardbutton">
                    <Link to ="/hardskills">Hardskills</Link>
                </button>
            </div>
        </section>
        </div>
    )
}

export default Homebuttons