import React from 'react';
import { motion } from 'framer-motion';


function Video() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Video">
            <h1>Enjoy a video where the core game mechanics and elements are shown! </h1>
        </motion.div>
    )
}
export default Video;
