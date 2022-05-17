import React from 'react';
import About from './About';
import Game from './Game';
import Video from './Video';
import Home from './Home';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/game" component={Game} />
                <Route path="/video" component={Video} />
            </Switch>
        </AnimatePresence>
    )
}
export default AnimatedRoutes;