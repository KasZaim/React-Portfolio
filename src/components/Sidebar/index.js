import './index.scss'
import LogoK from '../../assets/images/K.png'
import LogoSubtitle from '../../assets/images/Kaser.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser,faEnvelope,faSuitcase, faCode, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import {
  faLinkedin,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
  const[showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/">
        <img src={LogoK} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="skills-link" activeclassname="active" to="/skills">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="portfolio-link" activeclassname="active" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon icon={faClose} color="ffd700" size="3x" className='close-icon' onClick={() => setShowNav(false)} />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kaser-mahmood/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/KasZaim">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="mailto:kaser@live.de">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} color="#ffd700" size='3x' className='hamburger-icon' onClick={() => setShowNav(true)} />
    </div>

  )
}

export default Sidebar
