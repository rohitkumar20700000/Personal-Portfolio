import React from 'react'
import Styles from './Projects.module.css'
import netflixClone from '../../assets/NetflixClone.png'
import portfolioweb from '../../assets/PortfolioWeb.png'
import equtityResearch from '../../assets/EquityNewsResearch.jpg'
import stylematch from '../../assets/styleproject.png'
import video from '../../assets/bg2.mp4'

const Projects = () => {
    let projectData = [
        {
          imgSrc: netflixClone ,
          title: "Netflix-clone(Some part of Netflix)",
          description:
            "A partial Netflix clone built with HTML, CSS, and JavaScript. Includes search functionality for movies by title and detailed movie information display (title, IMDb rating, and cast). Uses JavaScript event handling for interactive UI.",
          link: "https://github.com/rohitkumar20700000/Netflix-clone"  
        },
        {
          imgSrc: portfolioweb,
          title: "Personal Portfolio Website",
          description:
            "I built a dynamic personal portfolio website with React, featuring sections for projects, education, and skills. The site utilizes FontAwesome icons and responsive design for optimal viewing on all devices, and integrates GitHub icons to showcase project repositories.",
          link: "https://github.com/rohitkumar20700000/Personal-Portfolio"  
        },
        {
          imgSrc: equtityResearch,
          title: "Equity News Research Tool",
          description:
            "An advanced financial research tool designed to analyze and extract insights from equity news using Python, Streamlit, LangChain, FAISS, and OpenAI API. It processes data efficiently and generates semantic embeddings for deep financial analysis.",
          link: "https://github.com/rohitkumar20700000/Equity-News-Research-Tool"  
        },
                {
          imgSrc: stylematch,
          title: "StyleMatch",
          description:
            "A StyleMatch-Hairgrooming,makeup services and Bridal Services Appointment booking site built using frontend-with HTML, CSS, and JavaScript;Backend-Springboot framework,Datajpi, entity annotation ;Postmapping,GetMapping and Model view controller logic for data manupulation,db-mysql",
          link: "https://github.com/rohitkumar20700000/Style_MatchJava"  
        }
      ];
  return (
    <>
        <div id='projects' className={Styles.Projects}>
                  <video autoPlay loop muted className={Styles.bgVideo}>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
            <h1>Projects</h1>
            <div className={Styles.Projectscomponent}>
                {projectData.map((project, index) => (
                    <div key={index} className={Styles.ProjectsSource}>
                        <img src={project.imgSrc} alt={project.title} className={Styles.ProjectImage} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className={Styles.ViewProjectButton} onClick={() => window.location.href = project.link}><h3>View Project</h3></button>
                     </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Projects