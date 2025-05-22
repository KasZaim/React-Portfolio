import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

// Import local icons
import angularIcon from '../../assets/images/icons/angular.svg';
import typescriptIcon from '../../assets/images/icons/typescript.svg';
import javascriptIcon from '../../assets/images/icons/javascript.svg';
import htmlIcon from '../../assets/images/icons/html.svg';
import cssIcon from '../../assets/images/icons/sass.svg';
import materialIcon from '../../assets/images/icons/material-design.svg';
import djangoIcon from '../../assets/images/icons/django.svg';
import pythonIcon from '../../assets/images/icons/python.svg';
import restapiIcon from '../../assets/images/icons/api.svg';
import sqlIcon from '../../assets/images/icons/sql.svg';
import postgresqlIcon from '../../assets/images/icons/postgresql.svg';
import redisIcon from '../../assets/images/icons/redis.svg';
import firebaseIcon from '../../assets/images/icons/firebase.svg';
import gitIcon from '../../assets/images/icons/git.svg';
import linuxIcon from '../../assets/images/icons/icons8-linux-24.png';
import postmanIcon from '../../assets/images/icons/postman-icon.svg';
import herokuIcon from '../../assets/images/icons/heroku-icon-svgrepo-com.svg';
import googlecloudIcon from '../../assets/images/icons/google-cloud.svg';
import scrumIcon from '../../assets/images/icons/scrum-svgrepo-com.svg';
import reactIcon from '../../assets/images/icons/react.svg';
import arrowImage from '../../assets/images/arrow.svg';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    
    const skills = [
        { name: 'Angular', icon: angularIcon},
        { name: 'TypeScript', icon: typescriptIcon},
        { name: 'JavaScript', icon: javascriptIcon},
        { name: 'React', icon: reactIcon},
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'Material Design', icon: materialIcon},
        { name: 'Django', icon: djangoIcon },
        { name: 'Python', icon: pythonIcon},
        { name: 'Rest-API', icon: restapiIcon},
        { name: 'SQL', icon: sqlIcon},
        { name: 'PostgreSQL', icon: postgresqlIcon},
        { name: 'Redis', icon: redisIcon},
        { name: 'Firebase', icon: firebaseIcon},
        { name: 'Git', icon: gitIcon},
        { name: 'Linux', icon: linuxIcon},
        { name: 'Postman', icon: postmanIcon},
        { name: 'Heroku', icon: herokuIcon},
        { name: 'Google Cloud', icon: googlecloudIcon},
        { name: 'Scrum', icon: scrumIcon},
        // { name: 'Docker', icon: dockerIcon},
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const getAnimationClass = (index) => {
        const animations = ['spinner', 'bounce', 'flip', 'spinner'];
        return animations[index % animations.length];
    };

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <Loader type="pacman" />
                </div>
            ) : (
                <div className="container skills-page">
                    <div className="arrow-container">
                        <img src={arrowImage} alt="arrow" className="arrow-hint" />
                        <span className="hover-text">hover over me !</span>
                    </div>
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                                idx={15}
                            />
                        </h1>
                        <div className="description">
                            <p>
                                Here you'll find an overview of my technical skills and experience. 
                                I specialize in modern web development and work with various 
                                technologies and frameworks. My expertise covers both frontend and 
                                backend development, with a particular focus on React and JavaScript.
                            </p>
                            <p>
                                In addition to my technical skills, I have experience in project 
                                planning, teamwork, and agile development methodologies. I am always 
                                striving to expand my knowledge and learn new technologies.
                            </p>
                        </div>
                    </div>
                    <div className="right-zone">
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div className="skill-box" key={index}>
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name} 
                                        className={`skill-icon ${getAnimationClass(index)}`}
                                        style={{ filter: `drop-shadow(0 0 5px ${skill.color})` }}
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Skills;
