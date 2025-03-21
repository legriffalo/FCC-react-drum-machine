import React from 'react';
import SfxButton from './sfx-button';


interface SoundBoardProps {
  sounds:Array<any>;
}

const SoundBoard: React.FC<SoundBoardProps> = ({ sounds }) => {
    
    return (
      <>
         <div>
            {sounds.map((sound) => (
            <SfxButton key = {sound.key} id = {sound.id} soundAddress = {sound.audio}  label = {sound.label} keyPrompt = {sound.keyPrompt} ></SfxButton>
            ))}
        </div>  
      </>
    );
  };
  
  export default SoundBoard;