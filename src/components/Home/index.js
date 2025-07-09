import './index.scss';
import LogoK from '../../assets/images/K.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    const nameArray = ['a', 's', 'e', 'r'];
    const jobArray = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', ' ', 'E', 'N', 'T', 'W', 'I', 'C', 'K', 'L', 'E', 'R'];
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

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
                <div className="container home-page">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H </span>
                            <span className={`${letterClass} _12`}>i, </span>
                            <br />
                            <span className={`${letterClass} _13`}>i </span>
                            <span className={`${letterClass} _14`}>c </span>
                            <span className={`${letterClass} _14`}>h </span>
                            <span className={`${letterClass} _14`}></span>
                            <span className={`${letterClass} _14`}>b </span>
                            <span className={`${letterClass} _14`}>i </span>
                            <span className={`${letterClass} _14`}>n </span>
                            <img src={LogoK} alt="developer" />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={15}
                            />
                            <br/>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={jobArray}
                                idx={19}
                                spanStyle={{ color: '#353334' }}
                            />
                        </h1>
                        <h2>
                            Full-stack Entwickler / JavaScript Experte 
                        </h2>
                        <Link to="/contact" className="flat-button">Contact me</Link>
                    </div>
                    <Logo />
                </div>
            )}
        </>
    )
}

export default Home;
