import React from "react";
import { motion } from "framer-motion";


const Header = ({resumeData}) =>  {
  
  const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.2
    }
  }
}
  
const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text" variants={container}>
               <motion.h1 className="responsive-headline" initial={{ scale: 0 , opacity: 0}}
                  animate={{scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 40
                          }}>I am {resumeData.name}.</motion.h1>
               <motion.h3 style={{color:'#fff', fontFamily:'sans-serif '}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                delay: 1,
                 duration: 1 ,
                ease: "linear"   
               }}>
               I am a {resumeData.role}.{resumeData.roleDescription}
               </motion.h3>
               <hr/>
               <motion.ul className="social" variants={container} initial="hidden" animate="visible">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <motion.li key={item.name} variants={items}>
                                <a href={item.url} target="_blank" rel="noreferrer"><i className={item.className}></i></a>
                              </motion.li>
                            )
                          }
                    )
                  }
               </motion.ul>
            </div>
         </div>

         <p className="scrolldown" >
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
export default Header