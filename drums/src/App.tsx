import { useState, useEffect } from 'react';
import './App.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Button from './assets/components/button'
import { SOUNDS } from './assets/sounds-data.ts';
// import SfxButton from './assets/components/sfx-button.tsx';
// import KeyCheck from './assets/components/key-check.tsx'
import AltSoundBoard from './assets/components/alt-soundboard.tsx';
import InfoPanel from './assets/components/infopanel.tsx';

interface Sound {
  id: string;
  keyPrompt: string;
  label:string;
  source:string;
}

function App() {
  const [sounds, setSounds] = useState<Sound[]>([]);
  const [used,setUsed]= useState<string>('intial value')

  const handleUsedChange = (newUsed: string): void => {
    setUsed(newUsed);
  };


  useEffect(() => {
    setSounds([ ...SOUNDS]);
  }, []);  
  
  useEffect(() => {
    console.log(sounds); // Logs the updated sounds state
  }, [sounds]); 
  
  
  return (
    <>
    <div id = "drum-machine" className="h-full">
      <Header title="Drum Machine"></Header>
      <Button id = "share twitter" label = "share the beats"></Button>

      <div id = "display" className='m-auto mt-[2vh] h-[55vh] w-8/9 border flex flex-row gap-[5vw] p-5 rounded-xl'>
        <AltSoundBoard onUsedChange= {handleUsedChange} sounds = {sounds}></AltSoundBoard>
        <InfoPanel used = {used}></InfoPanel>
      </div>
      {/* <KeyCheck></KeyCheck> */}
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
