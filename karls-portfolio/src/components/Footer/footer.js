import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <div className="footer">  
            {/* <FontAwesomeIcon icon={['fab', 'facebook']} href="https://www.facebook.com/karl.behrens" /> */}
            <a href="https://www.facebook.com/karl.behrens" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/guitarlkarl/" className="fa fa-instagram"></a>
            <a href="./assets/Karl Behrens Resume Oct 2020.pdf" className="fa fa-file"></a>
            <a href="https://github.com/behrenskarl" className="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/karl-behrens-041ba5125/" className="fa fa-linkedin"></a>
        </div>
    );
}

export default Footer;
