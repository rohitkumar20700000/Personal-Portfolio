import React from 'react'
import Styles from './Tags.module.css'

const Tags = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={Styles.tags}>
      <h2 onClick={() => scrollToSection('about')}>About</h2>
      <h2 onClick={() => scrollToSection('education')}>Education</h2>
      <h2 onClick={() => scrollToSection('skills')}>Skills</h2>
      <h2 onClick={() => scrollToSection('certificate')}>Certificate</h2>
      <h2 onClick={() => scrollToSection('projects')}>Projects</h2>
      <h2 onClick={() => scrollToSection('achievement')}>Achievements</h2>
      <h2 onClick={() => scrollToSection('contact')}>Contact</h2>
    </div>
  );
};

export default Tags;