import React from 'react';
import { motion } from 'framer-motion';


function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Home">
            <h3>Relive your childhood</h3>
            <a className="button" href='' download>Download Game</a>
        </motion.div>
    )
}
export default Home;
