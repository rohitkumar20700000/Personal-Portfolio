import React from 'react'
import Styles from './Contact.module.css'
import githubimg from '../../assets/github.png'
import whatsappimg from '../../assets/whatsapp.png'
import linkedinimg from '../../assets/linkedin.png'
import portfolioweb from '../../assets/portfoliologo.png'

const Contact = () => {
  return (
    <>
        <div id='contact' className={Styles.Contact}>
        <h1>Contact</h1>
        <div className={Styles.ContactSource}>
            <p>Email: <a href="mailto:rohipna@gmail.com">rohipna@gmal.com</a></p>
            <p>Phone: <a href="tel:9962734416">9962734416</a></p>
            <p>Social Media:</p>
            <div className={Styles.socialIcons}>
                <img onClick={()=>{window.location.href='https://github.com/rohitkumar20700000'}} className={Styles.imgs} src={githubimg} alt="img"></img>
                <img onClick={()=>{window.location.href='https://wa.me/9962734416'}} className={Styles.imgs} src={whatsappimg} alt="img"></img>
                <img onClick={()=>{window.location.href='https://www.linkedin.com/in/rohit-kumar-b65236237/'}} className={Styles.imgs} src={linkedinimg} alt="img"></img>
                <img onClick={()=>{window.location.href='https://www.linkedin.com/in/rohit-kumar-b65236237/'}} className={Styles.imgs} src={portfolioweb} alt="img"></img>
            </div>
        </div>   
            
        </div>     
    </>
  )
}

export default Contact