import React from 'react'
import Styles from './Header.module.css'
import portfolioimg from '../../assets/portfolio.png'
import lightmode from '../../assets/light.png'

const Header = () => {
  return (
    <>
        <header className={Styles.header}>
            <div className={Styles.title}>
                <h1>My Portfolio</h1>
                <img className={Styles.portimg} src={portfolioimg} alt='img'></img>
            </div>
        </header>    
    </>
  )
}

export default Header