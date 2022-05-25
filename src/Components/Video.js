import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from 'react-video-js-player';



function Video() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Video">

            <h1>Enjoy a video where the core game mechanics and elements are shown! </h1>

            <VideoPlayer
                src="resources/trailerV3.mp4" poster="resources/logo3.png" className="trailer" />
        </motion.div>
    )
}
export default Video;
