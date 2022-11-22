import React, { useRef } from 'react';
import '../styles/styles.css'
import {FaDownload} from 'react-icons/fa'
import {motion, useInView} from 'framer-motion'

const About = () =>  {
   const ref = useRef(null)
   const isInView = useInView(ref, {once: true})

    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
       opacity: isInView ? 1 : 0,
       scale: isInView ? 1 : 0,
       transition: isInView ? {
       delayChildren: .1,
       staggerChildren: 0.2
    } : 'none'
  }
      }
  
const items = {
  hidden: { y: 20, opacity: 0 },
  visible: isInView ?{
    y: 0,
    opacity: 1
  } : ''
      }
    return (
      <section id="about">
         <div className="row">

            <div className="three columns" style={{display: 'none'}}>

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col" ref={ref}>

               <h2>About Me</h2>
               <div>
                  <motion.ul className='about-me' variants={container} initial='hidden' animate='visible'>
                     <motion.li variants={items}>Over 3 years of professional exprince in JavaScript technologys such as React, Redux, Node.js, Express, MongoDB.</motion.li>
                     <motion.li variants={items}>Experience in building ecommerce application using the JavaScript MERN Stack.</motion.li>
                     <motion.li variants={items}>Expertise in developing web pages using HTML5, CSS3, MVC, SASS, LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML.</motion.li>
                     <motion.li variants={items}>Expertise in creating the user validation forms and using the RESTful services for sending the data to the server.</motion.li>
                     <motion.li variants={items}>Expert in designing web applications and web contents utilizing various Search Engine Optimization (SEO) techniques.</motion.li>
                     <motion.li variants={items}>Good experience in using components, Forms, Events, Keys, Router, Animations and Flux concept.</motion.li>
                     <motion.li variants={items}>Used Node Package Manager (NPM) or (Yarn) to manage the modules and used it to install useful tools such as Grunt, Gulp, Express, crypto.js, passport.js, mongoose, mongo.js, body-parser, and bcrypt.js ...etc.</motion.li>
                     <motion.li variants={items}>Good experience on working with CSS Background, padding, table, Animations, Pseudo classes and Layouts, positioning, border, margin, Pseudo elements and CSS behaviors including the Box model.</motion.li>
                     <motion.li variants={items}>Good knowledge of MVC and Flux architectural pattern and its implementation in user interfaces.</motion.li>
                     <motion.li variants={items}>Strong experience with the version controls GIT, GITHUB, Bit Bucket.</motion.li>
                     <motion.li variants={items}>Strong experience in working with CMS specially Wordpress.</motion.li>
                     <motion.li variants={items}>A result-oriented professional with good communication, leadership, team management, analytical and co-ordination skills.</motion.li>
                  </motion.ul>
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
                     <a href='/ahmed-resume.pdf'download><FaDownload />  <span>Download Resume</span></a>
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