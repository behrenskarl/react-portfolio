import React, { Component }  from 'react';
import weatherdashboard from './assets/weather-dashboard.png';
import passwordgenerator from './assets/password-generator.png';
import dndbuddy from './assets/dndbuddy-2-mobile.png';

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        
            return (
                <main className="container">

                    <div className="row">
                        <div className="col-md-8" id="portfolio">
                            <h1>Portfolio</h1>

                            <a href="https://behrenskarl.github.io/password-generator/">
                            <img src={passwordgenerator} className="img-fluid-2" id='pimg2' alt='password-generator'/>
                            </a>

                            <a href="https://behrenskarl.github.io/weather-dashboard/">
                            <img src={weatherdashboard} className="img-fluid-2" id='pimg3' alt='weather-dashboard'/>
                            </a>

                            <a href="https://dndbuddy2-live.herokuapp.com/login">
                            <img src={dndbuddy} className="img-fluid-2" id='pimg5' alt='20-sided-die'/>
                            </a>

                        </div>
                    </div>
                </main>
            )
    }
}

export default Portfolio;