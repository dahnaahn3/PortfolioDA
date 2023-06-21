import './Navbar.css'

function Navbar(){
return (
<nav className="navbar fixed-top navbar-light" style={{ backgroundColor: "#10273A", padding:"10px",fontSize: "30px" }}>
    <div className="container-fluid">
    <div className="typewriter">
        <a href="#coverpage"> <h1> Dahna Ahn</h1></a>
    </div>

    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 flex-row justify-content-end">

        <li className="nav-item">
            <a className="navbar-brand mb-0" style={{color: "white"}} href="#Aboutme">About me</a>
        </li>

        <li className="nav-item">
            <a className="navbar-brand mb-0" style={{color: "white"}} href="#Projects">Projects</a>
        </li>

        <li className="nav-item">
            <a className="navbar-brand mb-0" style={{color: "white"}} href="#Skills">Skills</a>
        </li>



        <li className="nav-item">
            <a href="#Contact">
            <button type="button" style={{color: "white"}} className="btn btn-outline-light btn-sm" >Let's chat!</button>
            </a>
        </li>


    </ul>
    </div>
</nav>
    )
}

export default Navbar;
