import React from 'react';
import SfxButton from './sfx-button';


interface SoundBoardProps {
  sounds:Array<any>;
}

const SoundBoard: React.FC<SoundBoardProps> = ({ sounds }) => {
    
    return (
      <>
         <div className='w-2/5'>
            {sounds.map((sound) => (
            <SfxButton key = {sound.key} id = {sound.id} audio = {sound.audio}  label = {sound.label} keyPrompt = {sound.keyPrompt} ></SfxButton>
            ))}
        </div>  
      </>
    );
  };
  
  export default SoundBoard;