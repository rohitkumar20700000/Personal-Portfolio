import React, { useState } from 'react'
import Styles from './Home.module.css'
import Header from '../../Components/Header/Header'
import Tags from '../../Components/Tags/Tags'
import About from '../../Components/About/About'
import Education from '../../Components/Education/Education'
import Skills from '../../Components/Skills/Skills'
import Certificate from '../../Components/Certificate/Certificate'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (

    <section className={Styles.darkMode ? "app dark" : "app"}>
        <Header/>
        <Tags/>
        <About/>
        <Education/>
        <Skills/>
        <Certificate/>
        <Projects/>
        <Contact/>
    </section>
  )
}

export default Home