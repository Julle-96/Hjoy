import React from 'react';
import { motion } from 'framer-motion';



function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Home">

            <h4>Relive your childhood</h4>

        </motion.div>
    )
}
export default Home;
