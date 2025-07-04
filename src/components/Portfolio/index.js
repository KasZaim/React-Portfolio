import Loader from 'react-loaders';
import './index.scss'
import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

import angularIcon from '../../assets/images/icons/angular.svg';
import typescriptIcon from '../../assets/images/icons/typescript.svg';
import javascriptIcon from '../../assets/images/icons/javascript.svg';
import htmlIcon from '../../assets/images/icons/html.svg';
import scssIcon from '../../assets/images/icons/sass.svg';
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
import reactIcon from '../../assets/images/icons/react.svg';  

const Portfolio = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Videoflix',
      description: 'Videoflix ist eine moderne Full-Stack-Streaming-Plattform im Stil von Netflix mit Benutzer-Authentifizierung, intuitiver Bedienung und hochauflösender Wiedergabe auf allen Geräten.',
      technologies: ['Angular', 'Django', 'TypeScript', 'SCSS', ,'HTML', 'JavaScript'],
      image: require('../../assets/images/videoflix preview.mp4'),
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://videoflix.kaserm.dev/'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that shows current conditions and forecasts based on user location.',
      technologies: ['React', 'OpenWeather API', 'CSS3'],
      image: require('../../assets/images/videoflix preview.mp4'),
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://weather-app-demo.com'
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'A Trello-like application for managing projects and tasks with drag-and-drop functionality.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: require('../../assets/images/videoflix preview.mp4'),
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://task-manager-demo.com'
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'An application to discover and save recipes based on ingredients you have at home.',
      technologies: ['React', 'Spoonacular API', 'Styled Components'],
      image: require('../../assets/images/videoflix preview.mp4'),
      githubLink: 'https://github.com/yourusername/recipe-finder',
      liveLink: 'https://recipe-finder-demo.com'
    },
    
  ];

  const techIcons = {
    'Angular': angularIcon,
    'TypeScript': typescriptIcon,
    'JavaScript': javascriptIcon,
    'HTML': htmlIcon,
    'SCSS': scssIcon,
    'Material Design': materialIcon,
    'Django': djangoIcon,
    'Python': pythonIcon,
    'Rest-API': restapiIcon,
    'SQL': sqlIcon,
    'PostgreSQL': postgresqlIcon,
    'Redis': redisIcon,
    'Firebase': firebaseIcon,
    'Docker': dockerIcon,
    'Git': gitIcon,
    'Linux': linuxIcon,
    'Postman': postmanIcon,
    'Heroku': herokuIcon,
    'Google Cloud': googlecloudIcon,
    'Scrum': scrumIcon,
    'React': reactIcon
  };

  useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000);

      // Set loading to false after content is loaded
      setTimeout(() => {
          setLoading(false);
          // After loading animation completes, show projects with delay
          setTimeout(() => {
              setProjectsVisible(true);
          }, 500);
      }, 1000);
  }, []);

  useEffect(() => {
    if (projectsVisible && projectsRef.current) {
      // Use GSAP to animate project cards
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        projectCards,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, [projectsVisible]);

  return (
    <>
      {loading ? (
          <div className="loader-container">
              <Loader type="pacman" />
          </div>
      ) : (
        <div className="container portfolio-page">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          
          <div ref={projectsRef} className={`projects-container ${projectsVisible ? 'visible' : ''}`}>
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <video src={project.image} alt={project.title} width="100%" height="100%" autoPlay loop muted playsInline style={{objectFit: 'cover'}} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        <img src={techIcons[tech]} alt={tech} className="tech-icon" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <FontAwesomeIcon icon={faEye} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
