import React from 'react';
import NewSfxButton from './new-sfx';



interface AltSoundBoardProps {
  sounds:Array<any>;
  on:boolean;
  onUsedChange: (newLabel: string) => void; // Function type to change the label
}

const AltSoundBoard: React.FC<AltSoundBoardProps> = ({ sounds, onUsedChange, on }) => {

 

    return (
      <>
         <div className='w-6/10 p-2 border rounded-xl'>
            {sounds.map((sound) => (
            <NewSfxButton  on = {on} onUsedChange = {onUsedChange} key = {sound.key} source = {sound.source} id = {sound.id} label = {sound.label} keyPrompt = {sound.keyPrompt} ></NewSfxButton>
            ))}
        </div>  
      </>
    );
  };
  
  export default AltSoundBoard;