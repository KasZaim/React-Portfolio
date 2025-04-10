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
    const jobArray = ['S', 'o', 'f','t','w','a','r','e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

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
                <div className="container home-page">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H </span>
                            <span className={`${letterClass} _12`}>i, </span>
                            <br />
                            <span className={`${letterClass} _13`}>I </span>
                            <span className={`${letterClass} _14`}>'m, </span>
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
                            />
                        </h1>
                        <h2>
                            I'm a full-stack developer / JavaScript Expert 
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
