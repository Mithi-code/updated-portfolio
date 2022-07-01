import './index.scss'
import LogoS from '../../assets/images/mylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faGear, faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {

  window.addEventListener("resize", ()=>{
    if (window.innerWidth > 960){
      document.querySelector("nav").style.flexDirection="column"
      document.querySelector("nav").style.display="flex"
    }else {
      document.querySelector("nav").style.flexDirection="row"
    }
  })
 
  const toggle = () => {
    var elem = document.querySelector("nav");
    if (elem.style.display === "none") {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  }
    return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
        <img src={LogoS} alt="Logo" />
        </Link>
        <FontAwesomeIcon icon={faBars} color="#fff" className='hamburger' onClick={toggle}/>
        <h3 className="sub-logo">Mithlesh</h3>
      </div>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skill-link" to="/skill">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mithicode/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mithi-code"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="#" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;