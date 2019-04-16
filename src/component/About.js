import React from 'react';
import { Link } from "react-router-dom";

const About = () => (
    <div>
        <h3>A propos de ce tutorial</h3>
        <div className="content-text">
            <p>
                Cette application permet de créer un réseau de neurone.
                Ce réseau de neurone permet d'effectuer des prédictions à partir de valeurs saisies par l'utilisateur.
            </p>
            <p>Voici le fonctionnement du tutorial:</p>
            <li>Initialisation du réseau de neurone (nombre de couche, choix de la fonction d'apprentissage...)</li>
            <li>Apprentissage du réseau de neurone (utilisation d'exemple préenregistré)</li>
            <li>Sélection manuelle de valeurs à prédire par le réseau de neurone</li>
            <p>
                Il est possible de sélectionner 2 types différents de réseau de neurone: le ou exclusif (ou XOR) et la reconnaissance de caractères (OCR).
                Pour plus de détail sur le fontionnement de ces 2 réseaux de neurone cliquez <Link to="/detail">ici</Link>.<br/>
                Pour tester un de ces 2 types de réseau de neurone, cliquez <Link to="/play">ici</Link>.
            </p>
        </div>
    </div>
);

export default About;
