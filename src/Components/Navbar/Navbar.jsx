import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <li className="item">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="item">
                        <Link to="/ecrire">Ecrire</Link>
                    </li>
                    <li className="item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            )}
            <button onClick={toggleNav} className="btn">
                BTN
            </button>
        </nav>
    );
}
