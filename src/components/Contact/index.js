import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Set loading to false after content is loaded
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_41jgddr', 'template_81db2t9', refForm.current, 'ngsBJpDzRajLd3bEK')
            .then((result) => {
                console.log(result);
                alert('Message sent successfully');
                window.location.reload(false);
            }, (error) => {
                console.log(error);
                alert('Message sent failed');
            });
    }
    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <Loader type="pacman" />
                </div>
            ) : (
                <div className="container contact-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <div className="contact-form">
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                        <input type="text" name="name" placeholder="Name" required />
                                    </li>
                                    <li className="half">
                                        <input type="email" name="email" placeholder="Email" required />
                                    </li>
                                    <li>
                                        <input type="text" name="subject" placeholder="Subject" required />
                                    </li>
                                    <li>
                                        <textarea name="message" placeholder="Message" required ></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div className="info-map">
                        Kaser Mahmood,
                        <br />
                        Germany,
                        <br />
                        25335 Elmshorn <br />
                        Reventlowstraße 10
                        <br />
                        <span>Kaser@live.de</span>
                    </div>
                    <div className="map-wrap">
                        <MapContainer center={[53.7588, 9.6504]} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[53.7588, 9.6504]}>
                                <Popup> Kaser lives here, come over for a cup of coffee :D
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            )}
        </>
    )
}

export default Contact;
