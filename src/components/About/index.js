import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJsSquare, faReact, faGit } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Set loading to false after content is loaded
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <Loader type="pacman" />
                </div>
            ) : (
                <div className="container about-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                        Hello! I'm Kaser, an aspiring software developer from Elmshorn, near Hamburg. My journey in technology began in the transportation industry, leading me to pursue advanced training in software development at the Developer Academy in Munich. This experience has not only honed my technical skills, but also nurtured my innovative thinking.
                        </p>
                        
                        <p>
                        I'm actively seeking opportunities to apply my skills in a forward-thinking team. With a passion for technology and a unique professional background, I'm excited to contribute to impactful projects and continue growing as a developer.
                        </p>
                    </div>
                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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
                                <FontAwesomeIcon icon={faGit} color="#EC4D28" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default About
