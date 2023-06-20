import React from 'react';
import '../styles/custom.css';

export default function NavBar() {
    return (
        <>
            <nav className="navigation">
                <a href="/" className="club-name">
                    John Johnson's Cruisey Movie
                </a>
                <div
                    className="navigation-menu">
                    <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Next Movies</a>
                    </li>
                    <li>
                        <a href="#">Donations</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

