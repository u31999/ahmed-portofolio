import React from 'react';
import '../styles/styles.css'
import {FaDownload} from 'react-icons/fa'

const About = () =>  {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns" style={{display: 'none'}}>

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <div>
                  <ul className='about-me'>
                     <li>Over 3 years of professional exprince in JavaScript technologys such as React, Redux, Node.js, Express, MongoDB.</li>
                     <li>Experience in building ecommerce application using the JavaScript MERN Stack.</li>
                     <li>Expertise in developing web pages using HTML5, CSS3, MVC, SASS, LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML.</li>
                     <li>Expertise in creating the user validation forms and using the RESTful services for sending the data to the server.</li>
                     <li>Expert in designing web applications and web contents utilizing various Search Engine Optimization (SEO) techniques.</li>
                     <li>Good experience in using components, Forms, Events, Keys, Router, Animations and Flux concept.</li>
                     <li>Used Node Package Manager (NPM) or (Yarn) to manage the modules and used it to install useful tools such as Grunt, Gulp, Express, crypto.js, passport.js, mongoose, mongo.js, body-parser, and bcrypt.js ...etc.</li>
                     <li>Good experience on working with CSS Background, padding, table, Animations, Pseudo classes and Layouts, positioning, border, margin, Pseudo elements and CSS behaviors including the Box model.</li>
                     <li>Good knowledge of MVC and Flux architectural pattern and its implementation in user interfaces.</li>
                     <li>Strong experience with the version controls GIT, GITHUB, Bit Bucket.</li>
                     <li>Strong experience in working with CMS specially Wordpress.</li>
                     <li>A result-oriented professional with good communication, leadership, team management, analytical and co-ordination skills.</li>
                  </ul>
               </div>
               <div className="row">

                  <div className="columns contact-details">
                  <hr className='hr'/>
                  <h2>Contact Details</h2>
                  <div className="address">
                  
       						   <div>
                           
                     Phone : +249115867608 / +24929034799
                    </div>
                    
                    <div>
                    
                    Email : alzain31999@gmail.com
                    </div>
                    <div className='download-resume'>
                     <a href='/full-stack-resume.pdf'download><FaDownload />  <span>Download Resume</span></a>
                    </div>
       					</div>
                     <hr/>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
export default About