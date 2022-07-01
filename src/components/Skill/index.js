import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return effect();
  }, []);
  const effect = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  };
  useEffect(() => {
    return effect();
  }, []);
  return (
    <>
      <div className='container skill-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                '',
                '& ',
                '',
                'E',
                'x',
                'e',
                'p',
                'e',
                'r',
                'i',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p className='skill-text'>
            Since beginning of my journey as a freelance developer nearly 2
            years ago,I've done remote work for agencies, consulted for
            startups, and collabrated with talented people to create web
            products for both business and customber use.<br /> <br />I created succesfully
            responsive website that are fast, easy to use, and built with best
            practices. The main area of my expertise is front-end development,
            HTML,CSS,JS,RECAT,REDUX, building small and medium web apps, custom
            plugin,features,animationsand coding interactive layouts.<br /> <br />I also
            have full-stack developer experience. In microverse(Coding School)
            created full-stack projects using Ruby and Rails, also reviewed
            projects.
          </p>
        </div>
        <div className='exp-bar'>
          <ul className='progress-bar'>
            <li >
            <p>Frontend</p>
	           	<Progress done="95"/>
            </li>
            <li >
            <p>React</p>
	           	<Progress done="80"/>
            </li>
            <li>
            <p>Backbend</p>
	           	<Progress done="70"/>
            </li>
            <li>
            <p>Ruby and Rails</p>
	           	<Progress done="80"/>
            </li>
          </ul>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Skill;
