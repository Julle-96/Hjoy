import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Game.css';
import { SliderData } from './SliderData';
import * as FaIcons from 'react-icons/fa';



function Game() {
    const [current, setCurrent] = useState(0);

    const length = SliderData.length;

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Game">
            <h1>Game</h1>
            <div clasName="image-slider">
                <FaIcons.FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaIcons.FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (
                                <img src={slide.image} alt={slide.alt} className="image" />
                            )}
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}
export default Game;
