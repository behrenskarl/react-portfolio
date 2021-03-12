import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <div className="footer">   
            <button className="fa fa-facebook">
                 <a href="https://www.facebook.com/karl.behrens" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
            </button>
            <button className="fa fa-instagram">
                 <a href="https://www.instagram.com/guitarlkarl/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            </button>
            <button className="fa fa-file">
                <a href="https://drive.google.com/file/d/1vZxqer3kd9jSoYyvCp8JJCXCT_XDr3ds/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFile} />
                </a>
            </button>
            <button className="fa fa-github">
                 <a href="https://github.com/behrenskarl" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </button>
            <button className="fa fa-linkedin">
                 <a href="https://www.linkedin.com/in/karl-behrens-041ba5125/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </button>
        </div>
    );
}

export default Footer;
