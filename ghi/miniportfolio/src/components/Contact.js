import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          'gmail',
          'template_eiuwq1r',
          form.current,
          'ulivM4tLF2ZrGmG2S'
        )
        .then((response) => {
          form.current.reset();
          alert('Your email has been sent! Thank you and have a great day!');
        }, (error) => {
            alert('Your message could not be sent at this time. Please try again later.')
        });

        const nameInput = e.target.elements.user_name;
        const emailInput = e.target.elements.user_email;
        const messageInput = e.target.elements.message;
        const subjectInput = e.target.elements.subject;

        if (nameInput && emailInput && messageInput && subjectInput) {
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
          subjectInput.value = '';
        }
      };

    function handleClick(){
        alert('Your email has been sent! Thank you and have a great day!')
    }

    return(
    <>
    <div id ="Contact" style={{marginTop:"200px"}}>
        <div className="container container-2">
            <form ref={form} onSubmit={sendEmail}>
                <div>
                <h1 style={{fontFamily: "Silkscreen"}}>Contact me!</h1>
                <p style={{textAlign:"left"}}></p>
                </div>

                <div className="row">
                <div className="col">
                    <label></label><input type="text" className="form-control" id="Name" name="user_name" placeholder="Name"></input>
                </div>

                <div className="col">
                    <label></label><input type="email" className="form-control" id="inputEmail4" name="user_email" placeholder="Email"></input>
                </div>

                <div className="form-group">
                    <label>Message</label><textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <button type="submit" id="submit" value="SEND" className="contactbutton">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span onClick={handleClick}>Send</span>
                </button>
                </div>

            </form>


        </div>
    </div>
    <footer className="footer"> 2023 © Dahna Ahn </footer>
    </>
    )
}

export default Contact;
