import React from 'react'
import Styles from './About.module.css'
import profileimg from '../../assets/img-modified.png'
import githubimg from '../../assets/github.png'
import leedcodeimg from '../../assets/leetcode.png'
import whatsappimg from '../../assets/whatsapp.png'
import linkedinimg from '../../assets/linkedin.png'
import gmailimg from '../../assets/gmail.png'

const About = () => {
  return (
    <>
    <div id='about' className={Styles.about}>
      <h1>About Me</h1>
      <div className={Styles.aboutcom}>
        <div className={Styles.aboutcontent}>
          <p>
            Hello! I am Rohit Kumar, a passionate software developer with expertise in front-end
            development. I have a strong background in HTML, CSS, JavaScript, and React. I enjoy
            building responsive and dynamic web applications that enhance user experience.
          </p>
          <p>
            In addition to front-end technologies, I have strong problem-solving skills using Python.
            I have solved 100+ problems on LeetCode, improving my understanding of algorithms and
            data structures. I am always eager to learn new technologies and enhance my programming
            skills. In my free time, I enjoy working on personal projects, exploring new tools, and
            staying up to date with the latest advancements in software development.
          </p>
          <div className={Styles.socialicon}>
            <img onClick={()=>{window.location.href='https://github.com/rohitkumar20700000'}} className={Styles.imgs} src={githubimg} alt="img"></img>
            <img onClick={()=>{window.location.href='https://leetcode.com/u/rohit21500/'}} className={Styles.imgs} src={leedcodeimg} alt="img"></img>
            <img onClick={()=>{window.location.href='https://wa.me/9962734416'}} className={Styles.imgs} src={whatsappimg} alt="img"></img>
            <img onClick={()=>{window.location.href='https://www.linkedin.com/in/rohit-kumar-b65236237/'}} className={Styles.imgs} src={linkedinimg} alt="img"></img>
            <img onClick={()=>{window.location.href='mailto:rohipna@gmail.com'}} className={Styles.imgs} src={gmailimg} alt="img"></img>
          </div>
        </div>
        <img className={Styles.img} src={profileimg} alt='profileimg'></img>
      </div>
    </div>
        
    </>
  )
}

export default About