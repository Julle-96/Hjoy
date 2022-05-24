import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="About">
            <h1>About the project</h1>
            <div className="about-text">
                <p>
                    H<sub>j</sub>oy is a project created in the course Computer Game Design, held at KTH. The goal of the project is about developing an idea through a concept description,
                    a target group analysis, a defined tech platform, a business plan
                    <br></br><br></br>H<sub>j</sub>oy is created with the popular and widely used game engine Unreal Engine 4. By using GPU based fluid mechanics with the NVIDIA FleX plugin,
                    we were able to create great looking, realistic, fast and a lot of water particles! To be able to capture the feeling of ones childhood, assets that the player can interact with
                    have been created using Maya, giving us the opportunity to create our own assets that can convey the intended atmosphere to the player.

                    <br></br><br></br> Feel free to click on the profile pictures below to view our Github pages!</p>
            </div>
            <h3>The Team</h3>
            <hr></hr>
            <div className="profile-container">
                <div className='profile'>
                    <a href="https://github.com/Julle-96" target="_blank" rel="noreferrer">
                        <img src="resources/julius.jpg" alt="random-img" className='about-img'></img>
                    </a>
                    <h2>Julius Albiz</h2>
                </div>
                <div className='profile'>
                    <a href="https://github.com/Jackohass" target="_blank" rel="noreferrer">
                        <img src="resources/jacob.png" alt="random-img" className='about-img'></img>
                    </a>
                    <h2>Jacob Brännström</h2>
                </div>
                <div className='profile'>
                    <a href="https://github.com/Kirme" target="_blank" rel="noreferrer">
                        <img src="resources/emrik.png" alt="random-img" className='about-img'></img>
                    </a>
                    <h2>Emrik Hydén</h2>
                </div>
                <div className='profile'>
                    <a href="https://github.com/MartinaLackova" target="_blank" rel="noreferrer">
                        <img src="resources/martina.png" alt="random-img" className='about-img'></img>
                    </a>
                    <h2>Martina Laková</h2>
                </div>
                <div className='profile'>
                    <a href="https://github.com/JackyL56" target="_blank" rel="noreferrer">
                        <img src="resources/jacky.jpg" alt="random-img" className='about-img'></img>
                    </a>
                    <h2>Hai Jie Jacky Lio</h2>
                </div>

            </div>
        </motion.div>
    )
}

export default About;
