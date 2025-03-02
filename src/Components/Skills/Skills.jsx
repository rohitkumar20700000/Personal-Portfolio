import React from 'react'
import Styles from './Skills.module.css'
import weblogo from '../../assets/html.png'
import reactlogo from '../../assets/React.png'
import apilogo from '../../assets/Api.png'
import pythonlogo from '../../assets/python.png'
import mysqllogo from '../../assets/mysql.png'

let skillsData = [
    { logo: weblogo, title: "HTML, CSS, JavaScript" },
    { logo: reactlogo, title: "React.js" },
    { logo: apilogo, title: "API Integration" },
    { logo: pythonlogo, title: "Python Programming" },
    { logo: mysqllogo, title: "Mysql" },
  ];

const Skills = () => {
  return (
    <>
        <div id='skills' className={Styles.Skills}>
            <h1>Skills</h1>    
            <div className={Styles.Skillscomponent}>
                {skillsData.map((skill, index) => (
                     <div key={index} className={Styles.SkillsSource}>
                        <img src={skill.logo} alt={skill.title} className={Styles.SkillIcon} />
                        <h2>{skill.title}</h2>
                     </div>
                  ))}
                
            </div>                    
            
        </div>    
    </>
  )
}

export default Skills