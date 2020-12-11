import './App.css';
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

// const icon = <FontAwesomeIcon icon={faFacebook, faGithub, faInstagram, faLinkedin} />
library.add(fab, faFacebook, faGithub, faInstagram, faLinkedin);


class App extends Component {

  render() {
    return (
      <Router>

        <div>
            <section className="about-me">
                <div className="container">
                  <div className="row">
                    <div className="card">
                      <div className="card-body">
                            
                        <h1>About Me</h1>
                        
                        <div className="row">    
                            <div className="col">
                            
                                <img src="./assets/profile-pic.jpg" className="img-fluid" alt="Karl wearing sunglasses" />
                                <p>Karl Behrens is a musician and web developer currently residing in Seattle, Washington and studying full stack development with the University of Washington. His parents immigrated from South Africa in 1992 and he was the first in his family to be born in the United States. He grew up and lived most of his life in Indiana where he studied film and media at Indiana University and received his Bachelor's degree from IU in 2016. He first moved to Los Angeles and then eventually found himself in Seattle in 2017 where he has lived since. Karl loves anything music or sound related and plays multiple instruments. Please contact for more information or to get in touch with Karl about any inquiries.
                                </p>
                            </div>
                        </div>
                      </div>
                    </div>    
                  </div>  
                </div>    
            </section>  
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
