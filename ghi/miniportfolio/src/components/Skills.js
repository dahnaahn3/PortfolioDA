import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react'
import './Skills.css'


function Skills(){

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div id="Skills" style={{padding:"90px"}}>
        <div className="h-100 d-flex align-items-center justify-content-center" >
            <h1 style={{fontFamily:'Silkscreen', fontSize: "4rem"}}>Tech Stack</h1>
        </div>

        <div style={{marginBottom: "4rem"}}>
            <h2 className="stack-cat" style={{fontSize: "1.5rem"}}> Programming Languages</h2>
            <div className="button-group aos-init" data-aos="fade-right" data-aos-duration="1500">
            <button className="skills">
                <span classNAme="button_top"><i class="devicon-javascript-plain"> JavaScript</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i className="devicon-python-plain"> Python</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><img width="30" height="30"
                src="https://img.icons8.com/external-outline-juicy-fish/60/FFFFFF/external-sql-coding-and-development-outline-outline-juicy-fish.png"
                alt="external-sql-coding-and-development-outline-outline-juicy-fish"/> SQL</span>
                </button>
            </div>
        </div>

        <div style={{marginBottom: "4rem"}}>
            <h2 className="stack-cat" style={{fontSize: "1.5rem"}}> Front End </h2>
            <div className="button-group aos-init" data-aos="fade-right" data-aos-duration="1500">
                <button className="skills">
                <span className="button_top"><i className="devicon-react-original"> React</i></span>
                </button>

                <button className="skills">
                <span class="button_top"><i class="devicon-css3-plain"> CSS</i></span>
                </button>
                <button className="skills">
                <span class="button_top"><i class="devicon-html5-plain"> HTML5</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-bootstrap-plain"> Bootstrap</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-tailwindcss-plain"> Tailwind</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-redux-plain"> Redux</i></span>
                </button>
            </div>
        </div>

        <div style={{marginBottom: "4rem"}}>
            <h2 className="stack-cat" style={{fontSize: "1.5rem"}}> Back End </h2>
            <div className="button-group" data-aos="fade-right" data-aos-duration="1500">
                <button className="skills">
                <span className="button_top"><i class="devicon-django-plain"> Django</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-fastapi-plain"> FastAPI</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-nodejs-plain"> NodeJS</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-mongodb-plain"> MongoDB</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i class="devicon-postgresql-plain"> Postgres</i></span>
                </button>
            </div>
        </div>

        <div style={{marginBottom: "2rem"}}>
            <h2 className="stack-cat" style={{fontSize: "1.5rem"}}> Tools </h2>
            <div className="button-group" data-aos="fade-right" data-aos-duration="1500">
            <button className="skills">
                <span class="button_top"><i class="devicon-gitlab-plain"> Gitlab</i></span>
                </button>
                <button className="skills">
                <span className="button_top"><i className="devicon-docker-plain"> Docker</i></span>
                </button>
                <button className="skills">
                <span class="button_top"><i class="devicon-github-plain"> Github</i></span>
                </button>

            </div>
        </div>
        <script src="../../assets/vendor/aos/dist/aos.js"></script>
        </div>

    )
}


export default Skills
