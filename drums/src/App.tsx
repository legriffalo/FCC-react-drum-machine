import { useState, useEffect } from 'react';
import './App.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Button from './assets/components/button'
import { SOUNDS } from './assets/sounds-data.ts';
// import SfxButton from './assets/components/sfx-button.tsx';
import KeyCheck from './assets/components/key-check.tsx'
import SoundBoard from './assets/components/soundboard.tsx';

interface Sound {
  id: string;
  keyPrompt: string;
  audio: string;
  label:string;
}

function App() {
  const [sounds, setSounds] = useState<Sound[]>([]);


  useEffect(() => {
    setSounds([ ...SOUNDS]);
  }, []);  
  
  useEffect(() => {
    console.log(sounds); // Logs the updated sounds state
  }, [sounds]); 
  
  
  return (
    <>
    <Header title="Drum Machine"></Header>
    <Button id = "share twitter" label = "share the beats"></Button>

    {/* <div>
      {sounds.map((sound) => (
        <SfxButton id = {sound.id} soundAddress = {sound.audio}  label = {sound.label} ></SfxButton>
    ))}
    </div> */}


    <SoundBoard sounds = {sounds}></SoundBoard>
    <KeyCheck></KeyCheck>
    <Footer></Footer>
    </>
  )
}

export default App
