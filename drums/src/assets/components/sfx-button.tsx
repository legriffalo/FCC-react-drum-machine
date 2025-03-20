import React from 'react';
import useSound from 'use-sound';

interface SfxButtonProps {
  id?:string;
  label?: string;
  soundAddress:string;
}

const SfxButton: React.FC<SfxButtonProps> = ({ id, label, soundAddress }) => {
    const [playSound] = useSound(soundAddress);
    
const handleClick = () => {
  playSound(); // playSound doesn't need to use the event, so we call it directly
};

    return (
      <>
      <div id = {id} className = "btn btn-primary" onClick={handleClick}>
          {label}
      </div>
      
      
      
      </>
    );
  };
  
  export default SfxButton;