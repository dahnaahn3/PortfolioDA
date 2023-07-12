import './Coverpage.css'



function Coverpage(){
    return(
    <>
        <div id="coverpage">
            <div>
                <h1 style={{fontSize: "7rem", color:"white"}}>Dahna Ahn</h1>
                <br />
                <p style={{fontSize: "3rem", color:"white"}}>Full-stack Software Engineer</p>
                <p style={{fontSize: "2rem", color:"white"}}> 📍 San Jose, California</p>

                <div className="direct-contact-container">
                <a href="mailto:dahnaahn16@gmail.com" target="_blank" rel="noreferrer">
                    <img alt="" src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"/>
                </a>
                <a href="https://www.linkedin.com/in/dahnaahn16" target="_blank" rel="noreferrer">
                    <img alt="" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin-circled--v1.png"/>
                </a>
                <a href="https://gitlab.com/dahnaahn16" target="_blank" rel="noreferrer">
                    <img alt="" src="https://img.icons8.com/ios-filled/50/FFFFFF/gitlab.png"/>
                </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Coverpage
