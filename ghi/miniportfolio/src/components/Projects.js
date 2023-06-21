
import project2 from "./images/project2.gif"
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Projects(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className="m-3" id="Projects">
        <h1 className="header mb-3" style={{paddingBottom: "3rem", fontFamily: "Silkscreen"}}>My Projects</h1>
        <section>
        <div data-aos="fade-right" data-aos-duration="1500" className="gap-4 card-group">

            <div className="card card">
            <a href="https://gitlab.com/dahnaahn16/car-car-project-beta" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={project2} />
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>CarCar App</div>
                <p className="card-text card-text" style={{color: "black"}}>A full-stack application for an automobile dealership</p>
            </div>
            <div className="card-footer card-footer">
                <small style={{color: "black"}}>Django, React, PostgresSQL, Bootstrap, Python, Javascript, CSS</small>
            </div>
            </div>

            <div className="card card">
            <a href="https://pawgress.gitlab.io/pawgress/" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={project2} />
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>Pawgress</div>
                <p className="card-text card-text" style={{color: "black"}}>Full stack application to manage a dog hotel for both customers and owners</p>
            </div>
            <div className="card-footer card-footer">
                <small style={{color: "black"}}> FastAPI, React, PostgresSQL, Tailwind CSS, HTML, CSS, Python, Javascript </small>
            </div>
            </div>

            <div className="card card">
            <a href="https://gitlab.com/dahnaahn16/project-alpha-apr" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={project2} />
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>Task It!</div>
                <p className="card-text card-text" style={{color: "black"}}>Task tracker application to log and record completed and uncompleted tasks for a specified users</p>
            </div>
            <div className="card-footer card-footer" style={{color: "black"}}>
                <small>Django, Python, PostgresSQL, HTML, CSS</small>
            </div>
            </div>



        </div>
        </section>

        </div>

        </>
    )
}

export default Projects
