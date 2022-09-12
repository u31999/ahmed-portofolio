import React from 'react';
import '../styles/styles.css'
const Resume = ({resumeData}) => {
    return (
      <section id="resume">
          <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, i) => {
                  return(
                    <div className="row item" key={i}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {
                            item.YearOfLeaving.length > 0 ? ' - ' : ''
                          } {item.YearOfLeaving}</em></p>
                          <ul className='resume-ul'>
                          {item.Achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                          </ul>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, i)=>{
                  return(
                    <div className="row item" key={i}>
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>CERTIFICATIONS</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.certification.map((item, i)=>{
                  return(
                    <div className="row item" key={i}>
                       <div className="twelve columns">
                          <h3>{item.instituationName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span></span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                           <p>
                          <a href={item.url} target='_blank' rel="noreferrer">
                          {item.description}
                          </a>
                          </p>
                        
                          {item.subCertificate.length > 0 ? (
                            <>
                            <ul className='resume-ul'>
                              {
                                item.subCertificate.map(s => (
                                  <li key={s.id}><a href={s.url} target='_blank' rel="noreferrer">{s.name}</a></li>
                                )) 
                              }
                            </ul>
                            </>
                          ) : ''}
                          <button className='cert-btn' onClick={() => window.open(`${item.url}`, '_blank')}>
                            Show Credential
                          </button>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        


         <div className="row skill">

            <div className="columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="ten columns main-col">


   				<div className="bars">

   				   <ul className="skills sk-grid">
                {
                  resumeData.skills && resumeData.skills.map((item, i) => {
                    return(
                      <li key={i}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
export default Resume