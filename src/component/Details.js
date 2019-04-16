import React from 'react';
import { Link, Route } from "react-router-dom";
import DetailXor from './DetailXor';
import DetailOcr from './DetailOcr';

const Details = ({ match }) => (
    <div>
        <h3>Les 2 types de réseaux de neurone que proposent ce tutorial sont (cliquez pour avoir plus de détail)</h3>
        <nav className="secondary-menu">
            <ul>
                <li>
                    <Link to="/detail/xor">Le ou exlclusif (XOR)</Link>
                </li>
                <li>
                <Link to="/detail/ocr">La reconnaissance de caractère (OCR</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Route path={`${match.url}/xor`} component={DetailXor} />
            <Route path={`${match.url}/ocr`} component={DetailOcr} />
        </div>
    </div>
);

export default Details;