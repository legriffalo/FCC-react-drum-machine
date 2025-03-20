// import { useState } from 'react'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Button from './assets/components/button'
import { SOUNDS } from './assets/sounds-data.ts';
import './App.css'
import SfxButton from './assets/components/sfx-button.tsx';
import KeyCheck from './assets/components/key-check.tsx'
import { useState, useEffect } from 'react';

interface Sound {
  id: string;
  audio: string;
}

function App() {
  const [sounds, setSounds] = useState<Sound[]>([]);


  useEffect(() => {
    setSounds([ ...SOUNDS]);
  }, [sounds]);  
  
  useEffect(() => {
    console.log(sounds); // Logs the updated sounds state
  }, [sounds]); 
  
  
  return (
    <>
    <Header title="Drum Machine"></Header>
    <Button id = "hey" label = "test"></Button>
    <Button id = "hey" label = "test"></Button>

    <div>
      {sounds.map((sound) => (
        <SfxButton id = {sound.id} soundAddress = {sound.audio}></SfxButton>
    ))}
    </div>

    <KeyCheck></KeyCheck>
    <Footer></Footer>
    </>
  )
}

export default App
