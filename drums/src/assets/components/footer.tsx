import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer: React.FC = () => {
  return (
    <div className = "fixed bottom-0 footer flex flex-row text-xl sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <a href = 'https://github.com/legriffalo' target = "_blank">
                <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href = 'https://www.linkedin.com/in/nick-griffiths-7b139198/' target = "_blank" >
                <FontAwesomeIcon icon={faLinkedin} />
        </a>

</div>

  );
};

export default Footer;



