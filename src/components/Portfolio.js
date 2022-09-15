import React, { useState, useRef } from 'react';
import {motion, useInView, AnimatePresence} from 'framer-motion'


const PortfolioItems = ({data, isInView}) => {
  
const [show, setShow] = useState(false)
const items = {
  hidden: { y: 20, opacity: 0 },
  visible: isInView ?{
    y: 0,
    opacity: 1
  } : ''
      }
  return( 
      data.map((item, i) => (
        <motion.div className="portfolio-item" key={i} variants={items}>
                  <div className="item-wrap">
                    <div className='a'>
                      <div style={{backgroundImage: `url(${item.imgurl})`}} className='img' 
                      onMouseOver={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}>
                      </div>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <div>
                          {item.description.map((item, i) => (
                            <p key={i}>{item}.</p>
                            
                          ))}
                          </div>
                          <div className={`overlay-btn-container`}>
                            <button onClick={()=> window.open(item.demourl, '_blank')} style={{display : (show) => show ? 'block' : 'none'}}>Demo</button>
                            <button onClick={()=> window.open(item.codeurl, '_blank')} style={{display : (show) => show ? 'block' : 'none'}}>Code</button>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
     </motion.div>
      ))
   
  )     
 
}

const Porfolio = ({portofilioData}) => {
  const ref = useRef(null)
   const isInView = useInView(ref)

    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
       opacity: isInView ? 1 : 0,
       scale: isInView ? 1 : 0,
       transition: isInView ? {
       delayChildren: .3,
       staggerChildren: 0.2
    } : 'none'
  }
      }
  

  const [menu, setMenu] = React.useState('')

  const portofilioDataAll = (data) => {
    let r = []
    let newData = [...Object.values(data)]

    for(let i = 0; i <= newData.length -1; i++) {
      for(let j = 0; j <= newData[i].length - 1; j++) {
        r.push(newData[i][j])
      }
    }
    return r
  }
   // portofilioDataAll(portofilioData)

  React.useEffect(()=> {
    if(menu === '') {
      setMenu('all')
  }
  }, [menu])
    return (
      <section id="portfolio" > 
      <div>
      </div>
      <div className="row p-row" ref={ref}>
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div className='choose-b-container'>
              <button value='all'
              className={`${menu === 'all' ? 'active' : ''}`} 
              onClick={(e) => setMenu(e.target.value)}
              >ALL</button>
              <button value='mern' 
              className={`${menu === 'mern' ? 'active' : ''}`}
              onClick={(e) => setMenu(e.target.value)}
               >MERN</button>
              <button value='react' 
              className={`${menu === 'react' ? 'active' : ''}`}
              onClick={(e) => setMenu(e.target.value)}
               >REACT</button>
              <button value='javaScript' 
              className={`${menu === 'javaScript' ? 'active' : ''}`}
              onClick={(e) => setMenu(e.target.value)}
               >VANILA JS</button>
              <button value='wordpress' 
              className={`${menu === 'wordpress' ? 'active' : ''}`}
              onClick={(e) => setMenu(e.target.value)}
               >WORDPRESS</button>
          </div>
          
          <AnimatePresence>
          <motion.div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" 
          variants={container} initial='hidden' animate='visible' key='modal' exit='hidden'>
          {
            (menu === 'all') ? <PortfolioItems isInView={isInView} data={portofilioDataAll(portofilioData)} />
            : (menu === 'mern') ? <PortfolioItems isInView={isInView} data={portofilioData.mern} />
            : (menu === 'react') ? <PortfolioItems isInView={isInView} data={portofilioData.react} />
            : (menu === 'javaScript') ? <PortfolioItems isInView={isInView} data={portofilioData.javaScript} />
            : <PortfolioItems isInView={isInView} data={portofilioData.wordpress} />
          }
              </motion.div>
            </AnimatePresence>
        </div>

        <div className='p-git-link'>
            <a href='https://github.com/u31999' target='_blank' rel="noreferrer">More in my Github account</a>
          </div>
      </div>
  </section>
        );
  
}

export default Porfolio