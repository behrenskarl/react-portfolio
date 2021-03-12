import React, { Component }  from 'react';
import profilepic from './assets/profile-pic3.JPG'

class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        
            return (
                
                    <main className="about-me">
                        <div className="container">
                        <div className="row">
                            <div className="card">
                            <div className="card-body">
                                    
                                <h1>About Me</h1>
                                
                                <div className="row">    
                                    <div className="col">
                                    
                                        <img src={profilepic} className="img-fluid-1" alt="Karl wearing sunglasses"></img>
                                        <p>Karl Behrens is a musician and web developer currently residing in Seattle, Washington and studying full stack development with the University of Washington. His parents immigrated from South Africa in 1992 and he was the first in his family to be born in the United States. He grew up and lived most of his life in Indiana where he studied film and media at Indiana University and received his Bachelor's degree from IU in 2016. He first moved to Los Angeles and then eventually found himself in Seattle in 2017 where he has lived since. Karl loves anything music or sound related and plays multiple instruments. Please contact for more information or to get in touch with Karl about any inquiries. Below are links to Karl's Facebook, Instagram, Resume PDF, GitHub, and LinkedIn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>    
                        </div>  
                        </div>    
                    </main>  
                )
        
    }
}

export default AboutMe;