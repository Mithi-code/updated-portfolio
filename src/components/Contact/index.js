import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const effect = () =>{
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
    useEffect(() => {
      return effect()
    }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_9huev8p', 'template_s5yxwfo', form.current, '36wNWoRui6A7sDmiF')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time/freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send Message!" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mithlesh kumar,
          <br />
          India,
          <br />
          Gandhi Nagar, 846009 <br />
          Darbhanga, Bihar <br />
          <br />
          <span>@: mithlesh.9m@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[26.1542, 85.8918]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
           <Marker position={[26.1542, 85.8918]}>
           <Popup>
             Mithi Lives here. <br /> Come over for a coffee chat ☺️.
            </Popup>
        </Marker>
        </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact