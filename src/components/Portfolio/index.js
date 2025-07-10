import Loader from 'react-loaders';
import './index.scss'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const projectsRef = useRef(null);
  const carouselRef = useRef(null);
  const titleRef = useRef(null);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Videoflix',
      description: 'Videoflix ist eine moderne Full-Stack-Streaming-Plattform im Stil von Netflix mit Benutzer-Authentifizierung, intuitiver Bedienung und hochauflösender Wiedergabe auf allen Geräten.',
      technologies: ['Angular', 'Django', 'TypeScript', 'SCSS', 'HTML', 'JavaScript'],
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
  ], []);

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

  // 3D Carousel Functions
  const rotateCarousel = useCallback((newIndex) => {
    if (isRotating) return;
    
    setIsRotating(true);
    
    // Animate title change
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          setCurrentTitle(projects[newIndex].title);
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    }
    
    setCurrentIndex(newIndex);
    
    if (carouselRef.current) {
      const angle = (360 / projects.length) * newIndex;
      gsap.to(carouselRef.current, {
        rotationY: -angle,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsRotating(false)
      });
    }
  }, [isRotating, projects, carouselRef, titleRef]);

  const nextProject = useCallback(() => {
    const newIndex = (currentIndex + 1) % projects.length;
    rotateCarousel(newIndex);
  }, [currentIndex, projects.length, rotateCarousel]);

  const prevProject = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    rotateCarousel(newIndex);
  }, [currentIndex, projects.length, rotateCarousel]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevProject, nextProject]);

  // Touch/Swipe support
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Check if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          prevProject();
        } else {
          nextProject();
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [prevProject, nextProject]);

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
    if (projectsVisible && carouselRef.current) {
      // Initialize 3D carousel positioning
      const projectCards = carouselRef.current.querySelectorAll('.project-card');
      
      // Responsive radius based on screen size
      const getRadius = () => {
        if (window.innerWidth <= 360) return 280;
        if (window.innerWidth <= 480) return 320;
        if (window.innerWidth <= 768) return 350;
        if (window.innerWidth <= 1200) return 380;
        return 400;
      };
      
      const radius = getRadius();
      const angleStep = 360 / projects.length;
      
      projectCards.forEach((card, index) => {
        const angle = angleStep * index;
        const x = Math.sin(angle * Math.PI / 180) * radius;
        const z = Math.cos(angle * Math.PI / 180) * radius;
        
        gsap.set(card, {
          x: x,
          z: z,
          rotationY: angle,
          opacity: 1
        });
      });

      // Animate carousel entrance
      gsap.fromTo(carouselRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
      );

      // Initialize title
      if (titleRef.current && projects.length > 0) {
        setCurrentTitle(projects[0].title);
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
        );
      }
    }
  }, [projectsVisible, projects.length, projects]);

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
          
          <div ref={projectsRef} className={`carousel-container ${projectsVisible ? 'visible' : ''}`}>
            {/* Floating Project Title */}
            <div ref={titleRef} className="floating-title">
              {currentTitle}
            </div>
            
            <div className="carousel-scene">
              <div ref={carouselRef} className="carousel-3d">
                {projects.map((project, index) => (
                  <div className={`project-card ${index === currentIndex ? 'active' : ''}`} key={project.id}>
                    <div className="project-image">
                      <video src={project.image} alt={project.title} width="100%" height="100%" autoPlay loop muted playsInline style={{objectFit: 'cover'}} />
                    </div>
                    <div className="project-content">
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            <img src={techIcons[tech]} alt={tech} className="tech-icon" />
                            
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
            
            {/* Navigation Controls */}
            <div className="carousel-nav">
              <button 
                className="nav-btn nav-prev" 
                onClick={prevProject}
                disabled={isRotating}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button 
                className="nav-btn nav-next" 
                onClick={nextProject}
                disabled={isRotating}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Indicators */}
            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => rotateCarousel(index)}
                  disabled={isRotating}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
