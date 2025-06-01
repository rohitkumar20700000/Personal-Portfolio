import React from 'react'
import Styles from './Education.module.css'
import edu1 from '../../assets/edu1.png'
import edu2 from '../../assets/edu2.png'
import video from '../../assets/bg2.mp4'

const Education = () => {
  return (
    <>
      <div id='education' className={Styles.Education}>
            <video autoPlay loop muted className={Styles.bgVideo}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <h1>Education</h1>
        <div className={Styles.Educationcomponent}>

          <div className={Styles.EducationSource}>
            {/* The eduImage class is added here to control image fitting */}
            <img src={edu1} alt="B.Tech" className={Styles.eduImage} />
            <h2>B.Tech Information Technology - 8.20 CGPA</h2>
            <p>Saveetha Engineering College, Thandalam Chennai</p>
          </div>

          <div className={Styles.EducationSource}>
            {/* The eduImage class is added here to control image fitting */}
            <img src={edu2} alt="HSC" className={Styles.eduImage} />
            <h2>Higher Secondary Certificate With 90.7%</h2>
            <p>Sri Venkateswara Matric Higher Secondary School</p>
          </div>

          <div className={Styles.EducationSource}>
            {/* The eduImage class is added here to control image fitting */}
            <img src={edu2} alt="SSLC" className={Styles.eduImage} />
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