import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skillz.css'

function Skillz(){

useEffect(() => {
    AOS.init();
    }, [])

    return(
        <div>

            <div className="h-100 d-flex align-items-center justify-content-center" >
            <h1 style={{fontFamily:'Silkscreen', fontSize: "4rem", marginBottom:"3rem"}}>Tech Stack</h1>
            </div>
            <body>
            <div class="scontainer">
                <div class="scard">
                    <h3 class="stitle">Front End:</h3>
                    <div className="frontendgrid">
                        <img width="100" height="100" src="https://img.icons8.com/fluency/100/html-5.png" alt="html-5"/>
                        <img width="100" height="100" src="https://img.icons8.com/fluency/100/css3.png" alt="css3"/>
                        <img width="100" height="100" src="https://img.icons8.com/color/100/bootstrap.png" alt="bootstrap"/>
                        <img width="100" height="100" src="https://img.icons8.com/color/100/javascript--v1.png" alt="javascript--v1"/>
                        <img width="100" height="100" src="https://img.icons8.com/color/100/react-native.png" alt="react-native"/>
                        <img width="100" height="100" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
                    </div>
                </div>


                <div class="scard">
                    <h3 class="stitle">Back End:</h3>
                    <div className="backendgrid">

                    <img className= "iconss" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                    <img className="iconss" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" />

                    <img width="100" height="100" src="https://img.icons8.com/color/100/nodejs.png" alt="nodejs"/>
                    <img width="100" height="100" src="https://img.icons8.com/color/100/mongodb.png" alt="mongodb"/>
                    <img width="100" height="100" src="https://img.icons8.com/color/100/postgreesql.png" alt="postgreesql"/>
                    <img width="100" height="100" src="https://img.icons8.com/fluency/100/python.png" alt="python"/>
                    </div>
                </div>

                <div class="scard">
                    <h3 class="stitle">Tools:</h3>
                    <div className="toolgrid">
                        <img width="100" height="100" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                        <img width="100" height="100" src="https://img.icons8.com/dusk/64/docker.png" alt="docker"/>
                        <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/github.png" alt="github"/>
                    </div>
                </div>
            </div>
            </body>
        </div>
    )
}

export default Skillz
