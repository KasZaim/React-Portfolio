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
import dockerIcon from '../../assets/images/icons/docker.svg';
import gitIcon from '../../assets/images/icons/git.svg';
import linuxIcon from '../../assets/images/icons/icons8-linux-24.png';
import postmanIcon from '../../assets/images/icons/postman-icon.svg';
import herokuIcon from '../../assets/images/icons/heroku-icon-svgrepo-com.svg';
import googlecloudIcon from '../../assets/images/icons/google-cloud.svg';
import scrumIcon from '../../assets/images/icons/scrum-svgrepo-com.svg';
import arrowImage from '../../assets/images/arrow.svg';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);

    const skills = [
        { name: 'Angular', icon: angularIcon, color: '#DD0031' },
        { name: 'TypeScript', icon: typescriptIcon, color: '#3178C6' },
        { name: 'JavaScript', icon: javascriptIcon, color: '#F7DF1E' },
        { name: 'HTML', icon: htmlIcon, color: '#E34F26' },
        { name: 'CSS', icon: cssIcon, color: '#1572B6' },
        { name: 'Material Design', icon: materialIcon, color: '#757575' },
        { name: 'Django', icon: djangoIcon, color: '#092E20' },
        { name: 'Python', icon: pythonIcon, color: '#3776AB' },
        { name: 'Rest-API', icon: restapiIcon, color: '#009688' },
        { name: 'SQL', icon: sqlIcon, color: '#4479A1' },
        { name: 'PostgreSQL', icon: postgresqlIcon, color: '#336791' },
        { name: 'Redis', icon: redisIcon, color: '#DC382D' },
        { name: 'Firebase', icon: firebaseIcon, color: '#FFCA28' },
        { name: 'Docker', icon: dockerIcon, color: '#2496ED' },
        { name: 'Git', icon: gitIcon, color: '#F05032' },
        { name: 'Linux', icon: linuxIcon, color: '#FCC624' },
        { name: 'Postman', icon: postmanIcon, color: '#FF6C37' },
        { name: 'Heroku', icon: herokuIcon, color: '#430098' },
        { name: 'Google Cloud', icon: googlecloudIcon, color: '#4285F4' },
        { name: 'Scrum', icon: scrumIcon, color: '#6DB33F' }
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
