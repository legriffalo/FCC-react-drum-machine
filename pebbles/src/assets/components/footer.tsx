import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { SiTypescript } from 'react-icons/si';
import { RiTailwindCssLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiDaisyui } from 'react-icons/si';

const Footer: React.FC = () => {
        return (
          <div className="fixed left-0 bottom-0 h-[8vh] w-[100%] flex flex-row items-center text-white font-bold bg-neutral p-2 ">
            
            <div className='text-2xl flex flex-row ml-[2vh] gap-3'>
                <a href="https://github.com/legriffalo" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                </div>
      
            <div className="ml-auto flex flex-row items-center text-lg md:text-xl xs:w-1/2 md:w-1/3  gap-2 mr-1">
              <FontAwesomeIcon icon={faGithub} />
              <SiTypescript />
              <FaReact />
              <RiTailwindCssLine />
              <SiDaisyui />
            </div>
          </div>
        );
      };


export default Footer;



