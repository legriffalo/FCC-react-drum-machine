import React, { useEffect,useRef,useState } from 'react';

interface NewSfxButtonProps {
  key:number;
  id?:string;
  label: string;
  keyPrompt:string;
  audio?:string;
  source:string;
  volume?:string;
  type?:string;
  ref?:string;
  onUsedChange: (newLabel: string) => void; // Function type to change the label

}

const NewSfxButton: React.FC<NewSfxButtonProps> = ({ id, label, keyPrompt,source, onUsedChange }) => {
    
    const [used,setUsed]= useState<string>('')
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // if (audioRef.current) {
    //     audioRef.current.load(); // Reload the audio
    // }

  // Effect to add and remove global keyboard event listener
  useEffect(() => {
    // Handle keydown event on the whole document
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key); // Log the key to check if it's being detected

      if(event.key.toLocaleUpperCase() == keyPrompt){
        // put new audio play commmand in here
        if (audioRef.current) {
            console.log("playing a sound")
            audioRef.current.currentTime = 0;
            audioRef.current.play().then(); // Start playing the audio
            setUsed(`${audioRef.current.dataset.drum}`)
            onUsedChange(`${audioRef.current.dataset.drum}`);
          }
      }
    };

    // Add event listener for keydown on the document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


    const playSound = (data:string) => {
        // audioRef.current.play(); // Start playing the audio
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().then((d)=>console.log(d)); // Start playing the audio
            
          }
          setUsed(data)
          onUsedChange(data); // Pass the updated label to parent


      };
    return (
      <>
      <div  id = {id} data-used = {used} className = "drum-pad btn btn-warning rounded-xl w-1/3" onClick={()=>{ playSound(`${id}`)} }>
      {label}
      <audio preload="auto" ref = {audioRef} data-drum = {id} id = {label} className = "clip" src={source} ></audio>
      </div>
      
      
      
      </>
    );
  };
  
  export default NewSfxButton;