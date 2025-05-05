import { useState, useEffect } from 'react';
import { SOUNDS } from './assets/sounds-data.ts';
import { SOUNDS2 } from './assets/sounds-data2.ts';
import './App.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import AltSoundBoard from './assets/components/alt-soundboard.tsx';
import InfoPanel from './assets/components/infopanel.tsx';


interface Sound {
  id: string;
  keyPrompt: string;
  label:string;
  source:string;
  image?:string;
}

function App() {
  const [sounds, setSounds] = useState<Sound[]>([]);
  const [used,setUsed]= useState<string>('intial value')
  const [on, setOn] = useState(true)

  const handleUsedChange = (newUsed: string): void => {
    setUsed(newUsed);
  };
  
  const areArraysEqual = (arr1:Sound[], arr2:Sound[]) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  const handleBankChange = () => {
    console.log("CHANGING SOUND BANK")
    areArraysEqual(sounds, SOUNDS) ? setSounds([...SOUNDS2]) : setSounds([...SOUNDS]);
  }
  
  const handleOnOff = () =>{
    console.log("TURNING ON?OFF")
    on? setOn(false):setOn(true)
  }
  useEffect(() => {
    setSounds([ ...SOUNDS]);
  }, []);  
  
  useEffect(() => {
    console.log(sounds); // Logs the updated sounds state
    // setSounds([ ...SOUNDS]);

  }, [sounds]); 
  
  
  return (
    <>
    <div style ={{ paddingTop:"env(safe-area-inset-top" }} id = "drum-machine" className="h-full">
      <Header title="Pebble orchestra"></Header>
      
      <div id = "display" className='m-auto h-[73vh] w-8/9 text-xl border flex flex-col gap-[5vw] p-5 rounded-xl'>
        <AltSoundBoard onUsedChange= {handleUsedChange} sounds = {sounds} on = {on}></AltSoundBoard>
        <InfoPanel used = {used} handleOnOff ={handleOnOff} handleBankChange = {handleBankChange} ></InfoPanel>
      </div>
      {/* <KeyCheck></KeyCheck> */}
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
