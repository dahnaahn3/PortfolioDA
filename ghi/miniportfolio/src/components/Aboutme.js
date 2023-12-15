import './Aboutme.css'
import aboutmeimage from './images/aboutmeimage.jpeg'
import DahnaAhnResume from './images/DahnaAhnResume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Aboutme() {

  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <div id="Aboutme" style={{display: 'flex', alignItems: 'center'}}>
        <div  style={{flex: 1}}>
          <h1 data-aos="fade-right" data-aos-duration="1500" style={{marginTop: 0, fontFamily: "Silkscreen", fontSize: "3.5rem"}}>About Me</h1>
          <br />
          <p data-aos="fade-right" data-aos-duration="1500" >Hello! My name is Dahna Ahn. I am a full stack software engineer with experience
            in web development and software testing. I've always been an 'out of the box thinker' and
            love the challenges and critical thinking that come with software development.
            If you love what you do you
            will never work a day in your life and for me, that is being a software engineer!
            <br /> <hr />
            </p>

          <h1 data-aos="fade-right" data-aos-duration="1500" style={{fontFamily: "Silkscreen"}}>Hobbies/Interests</h1>
          <br />
          <div data-aos="fade-right" data-aos-duration="1500"  style={{marginBottom: "3rem", display: "flex", alignItems: "center"}}>
            <button className="interest"> <img alt="" src="https://img.icons8.com/ios-glyphs/20/null/bulldog.png"/> French Bulldogs </button>
            <button className="interest"> <img alt="" src="https://img.icons8.com/ios/20/null/tattoo-machine.png"/> Tattoos </button>
            <button className="interest"> <img alt="" src="https://img.icons8.com/ios-filled/20/null/pet.png"/> Dog Training </button>
            <button className="interest"> <img alt="" src="https://img.icons8.com/ios/20/null/dumbbell--v1.png"/> Fitness </button>
            <button className="interest"> <img alt="" src="https://img.icons8.com/sf-regular/25/null/sneakers.png"/> Sneakers </button>
<p> this is about me </p>
          </div>

            <button className="dbutton">
            <a data-aos="fade-left" data-aos-duration="1200" className="dtext" href={DahnaAhnResume} download>Download Resume</a>
              <div class="dsvg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg>
              </div>
            </button>
        </div>
        <img data-aos="fade-left" data-aos-duration="1500" src={aboutmeimage} style={{marginLeft: '50px', width: '500px'}} />
      </div>
    );
  }


export default Aboutme;
