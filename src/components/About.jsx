import React from 'react';
import about from './About.module.css';

const About = () => {
    return(
        <div className={about.about}>
            <p>Dmitriy Kozyrenko</p>
            <p>25 years old</p>
            <p>Homel, Belarus</p>
            <p>GTEK</p>
        </div>
    );
}

export default About;