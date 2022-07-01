import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import DOC from '../../assets/images/home.png'
import budget from '../../assets/images/budget.png'
import hullu from '../../assets/images/hullu.png'
import dance from '../../assets/images/dance.png'
import air from '../../assets/images/air-quality.png'
import weather from '../../assets/images/weather.png'
import './index.scss';

const Projects = () => {


const card = document.querySelectorAll('.cards > img');
card.forEach((c)=>{
  const cardWidth = c.clientWidth;
  const cardHeight = c.clientHeight;
  c.addEventListener('mousemove',(e) => {

    const xWidth = e.layerX;
    const yHeight = e.layerY;
    const num = window.innerWidth > 1000 ? 30: 45
    
    const xRotation = num*((xWidth - cardWidth/2) / cardWidth);
    const yRotation = num*((yHeight - cardHeight/2) / cardHeight);
  
    const transform = `scale(1.04) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  
    c.style.transform = transform;
  
  });
  
  c.addEventListener('mouseout',() => {
    c.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
})



  const ProjectData = [
    {
      ID: 1,
      Title: 'Doc-App',
      Descrption:`This applications is responsive and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.`,
      Image: DOC,
      Link: 'https://github.com/Mithi-code/Doctors-Booking',
    },
    {
      ID: 2,
      Title: 'Budget-app',
      Descrption: `This BudgetApp is fully functional application which can help user to track their expenses.`,
      Image: budget,
      Link: 'https://github.com/Mithi-code/Rails-BudgetApp',
    },
    {
      ID: 3,
      Title: 'Recat-Air Quality',
      Descrption: `This BudgetApp is fully functional application which can help user to track their expenses.`,
      Image: air,
      Link: 'https://github.com/Mithi-code/Rails-BudgetApp',
    },
    {
      ID: 4,
      Title: 'Hulu-Clone',
      Descrption: `This BudgetApp is fully functional application which can help user to track their expenses.`,
      Image: hullu,
      Link: 'https://github.com/Mithi-code/Rails-BudgetApp',
    },
    {
      ID: 5,
      Title: 'Imaginary-Dance',
      Descrption: `This BudgetApp is fully functional application which can help user to track their expenses.`,
      Image: dance,
      Link: 'https://github.com/Mithi-code/Rails-BudgetApp',
    },
    {
      ID: 6,
      Title: 'Weather-App',
      Descrption: `This BudgetApp is fully functional application which can help user to track their expenses.`,
      Image: weather,
      Link: 'https://github.com/Mithi-code/Rails-BudgetApp',
    }
  ];
  const [letterClass, setLetterClass] = useState('text-animate');

  const effect = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  };
  useEffect(() => {
    return effect();
  }, []);

  return (
    <>
      <div className='container project-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className='projects-cards'>
        {ProjectData.map((data) => {
              return (
                <div className='cards' key={data.ID}>
                  <img src={data.Image} className='img' alt='doc-app' onClick={(e)=>{
                    e.target.parentElement.querySelector('#modal').click()
                    console.log(e.target.parentNode)
                  }}/>
                  <Modal data={data} />
                </div>
              );
            })}
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Projects;
