import React from 'react';
import NewSfxButton from './new-sfx';



interface AltSoundBoardProps {
  sounds:Array<any>;
  onUsedChange: (newLabel: string) => void; // Function type to change the label
}

const AltSoundBoard: React.FC<AltSoundBoardProps> = ({ sounds, onUsedChange }) => {

 

    return (
      <>
         <div className='w-2/5'>
            {sounds.map((sound) => (
            <NewSfxButton onUsedChange = {onUsedChange} key = {sound.key} source = {sound.source} id = {sound.id} audio = {sound.audio}  label = {sound.label} keyPrompt = {sound.keyPrompt} ></NewSfxButton>
            ))}
        </div>  
      </>
    );
  };
  
  export default AltSoundBoard;