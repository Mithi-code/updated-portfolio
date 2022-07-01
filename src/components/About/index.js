import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGem } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const effect = () =>{
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
    useEffect(() => {
      return effect()
    }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='about-text'>
            I'm a full-stack developer located in India. I've serious passion for coding.
            <br />
            <br />
            I'm very ambitious fullstack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            <br /><br />
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            <br /><br />
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGem} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About