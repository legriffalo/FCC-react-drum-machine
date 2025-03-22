import React, { useEffect } from 'react';
import useSound from 'use-sound';

interface SfxButtonProps {
  key:number;
  id?:string;
  label?: string;
  keyPrompt:string;
  audio:string;
}

const SfxButton: React.FC<SfxButtonProps> = ({ id, label, audio, keyPrompt }) => {
    const [playSound] = useSound(audio);
    
  // Effect to add and remove global keyboard event listener
  useEffect(() => {
    // Handle keydown event on the whole document
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key); // Log the key to check if it's being detected

      if(event.key == keyPrompt){
        playSound(); // playSound doesn't need to use the event, so we call it directly
        console.log("sound should play")
      }
    };

    // Add event listener for keydown on the document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyPrompt, playSound]);



    const handleClick = () => {
      playSound();
    };

    return (
      <>
      <div  id = {id} className = " drum-pad btn btn-warning rounded-xl w-1/3" onClick={handleClick}>
          {label}
      </div>
      
      
      
      </>
    );
  };
  
  export default SfxButton;