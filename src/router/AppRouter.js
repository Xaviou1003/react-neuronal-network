
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import About from '../component/About';
import Details from '../component/Details';
import PlayNeuronalNetwork from '../component/PlayNeuronalNetwork';

const AppRouter = () => (
    <Router>
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/about">Késako?</Link>
                    </li>
                    <li>
                        <Link to="/detail">Les types possibles</Link>
                    </li>
                    <li>
                        <Link to="/play">Jouer</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Route path="/" component={About} exact />
                <Route path="/about" component={About} exact  />
                <Route path="/detail" component={Details} />
                <Route path="/play" component={PlayNeuronalNetwork} exact  />
            </div>
        </div>
    </Router>
);

export default AppRouter;
