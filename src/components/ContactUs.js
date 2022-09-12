import React from 'react';
const ContactUs = ({resumeData}) => {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row contact-form-container">
              
              <form action="https://getform.io/f/9d486183-88fc-4871-8270-5e0156775d5a" method="POST">
              <input type="text" name="name" placeholder="Enter your name" minLength={4} required/>
              <input type="email" name="email" placeholder="Enter your email" required/>
              <textarea name="message" placeholder="Enter your message" rows="10" minLength={6} required>
              </textarea>
              <button>Send Mail</button>
              </form>
              
            </div>
        </section>
        );
  }
export default ContactUs