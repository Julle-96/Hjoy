import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="About">
            <h3>The Team</h3>
            <hr></hr>
            <div className="profile-container">
                <div className='profile'>
                    <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    <h2>Julius Albiz</h2>
                </div>
                <div className='profile'>
                    <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    <h2>Jacob Brännström</h2>
                </div>
                <div className='profile'>
                    <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    <h2>Emrik Hydén</h2>
                </div>
                <div className='profile'>
                    <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    <h2>Martina Laková</h2>
                </div>
                <div className='profile'>
                    <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    <h2>Hai Jie Jacky Lio</h2>
                </div>

            </div>
        </motion.div>
    )
}

export default About;
