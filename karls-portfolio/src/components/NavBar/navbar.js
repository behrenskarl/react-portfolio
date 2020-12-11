import React from 'react';
import { render } from 'react-dom';
import './navbar.css';

function NavBar() {
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <span className="navbar-brand">Karl Behrens</span>
                    <div className="container"></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/about">About Me <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;