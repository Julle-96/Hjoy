import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Game.css';
import { SliderData } from './SliderData';
import * as FaIcons from 'react-icons/fa';




function Game() {
    const [current, setCurrent] = useState(0);
    const [modal, setModal] = useState(false);

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



    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Game">
            <h1>Hello and welcome to our game H<sub>j</sub>oy!</h1>

            <div className="game-text">
                <p>
                    H<sub>j</sub>oy is a game all about reliving fond childhood memories of playing with water guns, in combination with the grownup aspect of solving problems.
                    From this, a 3D first person puzzle platformer was created.
                    <br></br><br></br>In this game, you will have the opportunity to play two created levels with different settings, that represent different stages in life. One is a playground, and the other is a PE class.
                    Of course these two levels also have different ways of completing them, but all make use of the water gun and its liquid mechanics implemented with the NVIDIA FleX
                    plugin for Unreal Engine.
                    <br></br><br></br> Checkout and scroll through the images below that showcase different elements of the game!</p>

                <div className="specification">
                    <p>
                        Platforms available for download: <br></br><FaIcons.FaWindows size={20} />

                        <br></br></p>
                    <div className="button-holder">
                        <a className="button" href='https://drive.google.com/file/d/1eZ-fbDz4IUS_9r_AH4tafJTtaig3eXRO/view?usp=sharing' target="_blank" rel="noreferrer" download>Download Game</a>
                    </div>
                </div>

            </div>
            <div className="image-slider">
                <FaIcons.FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaIcons.FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (


                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (
                                <>

                                    <p>{slide.text}</p>
                                    <img onClick={toggleModal} src={slide.image} alt={slide.alt} className="image" />
                                    {modal && (
                                        <div className="popup" onClick={toggleModal}>
                                            <div className="overlay"></div>
                                            <div className="popup-content" >
                                                <img src={slide.image} alt={slide.alt} className="popup-image" />

                                            </div>
                                        </div>
                                    )}
                                </>

                            )
                            }
                        </div>
                    )
                })}
            </div>
        </motion.div >
    )
}
export default Game;
