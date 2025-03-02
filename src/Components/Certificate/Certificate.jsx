import React from 'react'
import Styles from './Certificate.module.css'
import webcertificate from '../../assets/webcertificate.png'
import reactcertificate from '../../assets/Reactcertificate.png'
import leetcode from '../../assets/leetcodedbadge.png'

let certificates = [
    {
      id: 1,
      card:'./html,css and javascript for web developers.pdf',
      image: webcertificate,
      title: ' HTML, CSS, and Javascript for Web Developers',
      source: 'Coursera',
      completion: 'Completed: July 2024'
    },
    {
      id: 2,
      card:'./front end.pdf',
      image: reactcertificate,
      title: 'Developing Front-End Apps with React',
      source: 'Coursera',
      completion: 'Completed: July 2024'
    },
    {
      id: 3,
      card:'./2024-50.gif',
      image: leetcode,
      title: '50 Days Badge 2024',
      source: 'Leetcode',
      completion: 'Nov 2024'
    }
  ];

const Certificate = () => {
  return (
    <>
         <div id='certificate' className={Styles.Certificate}>
         <h1>Certificates & Badges</h1> 
            <div className={Styles.Certificatecomponent}>
            {certificates.map((cert) => (
          <div key={cert.id} onClick={() => window.location.href =cert.card }className={Styles.CertificateSource}>
            <img src={cert.image} alt={cert.title} className={Styles.CertificateImage} />
            <h2>{cert.title}</h2>
            <p>{cert.source}</p>
            <p>{cert.completion}</p>
          </div>
        ))}
            </div>         
        </div>

    </>
  )
}

export default Certificate