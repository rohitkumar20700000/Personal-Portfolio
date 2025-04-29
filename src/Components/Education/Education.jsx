import React from 'react'
import Styles from './Education.module.css'

const Education = () => {
  return (
    <>
        <div id='education' className={Styles.Education}>
            <h1>Education</h1> 
            <div className={Styles.Educationcomponent}>
                <div className={Styles.EducationSource}> 
                    <h2>B.Tech Information Technology - 8.20 CGPA</h2>
                    <p>Saveetha Engineering College, Thandalam Chennai</p>
                </div> 
                <div className={Styles.EducationSource}> 
                    <h2>Higher Secondary Certificate With 90.7%</h2>
                    <p>Sri Venkateswara Matric Higher Secondary School</p>
                </div> 
                <div className={Styles.EducationSource}> 
                    <h2>Secondary Leaving School Certificate With 86.0%</h2>
                    <p>Sri Venkateswara Matric Higher Secondary School</p>
                </div>   
            </div>
            <button className={Styles.downloadButton} onClick={() => window.location.href = './Rohit kumar M-212221220045-resume.pdf'}>
                <h3>View Resume</h3>
            </button>
        </div>
    </>
  )
}

export default Education