import React, { useEffect,useRef,useState } from 'react';

interface NewSfxButtonProps {
  key:number;
  id?:string;
  label: string;
  keyPrompt:string;
  source:string;
  on:boolean;
  image?:string;
  onUsedChange: (newLabel: string) => void; // Function type to change the label

}

const NewSfxButton: React.FC<NewSfxButtonProps> = ({ id, label, keyPrompt,source, on, onUsedChange, image }) => {
    
    const [used,setUsed]= useState<string>('')
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const elementRef = useRef<HTMLDivElement | null>(null);


  // Effect to add and remove global keyboard event listener
  useEffect(() => {
    // Handle keydown event on the whole document
    const handleKeyDown = (event: KeyboardEvent) => {
      // console.log('Key pressed:', event.key); // Log the key to check if it's being detected

      if(event.key.toLocaleUpperCase() == keyPrompt){
        // put new audio play commmand in here
        if (audioRef.current && on) {
            // console.log("playing a sound")
            audioRef.current.currentTime = 0;
            audioRef.current.play().then(); // make async work?
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
        if (audioRef.current  && on ) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().then();   
          }
          setUsed(data)
          onUsedChange(data); // Pass the updated label to parent
        };

    const styleChange = () =>{
      if (elementRef.current && on) {
        elementRef.current.classList.add('show');
        // Remove the class after a short delay (e.g., 200 milliseconds)
        setTimeout(() => {
          if (elementRef.current) {
            elementRef.current.classList.remove('show');
          }
        }, 200);
      }; 
    }


    return (
      
      <>
      <div  id = {id} ref = {elementRef} data-used = {used} className = {`drum-pad ${image} btn btn-warning rounded-xl w-1/3 h-1/3`} onPointerDown={()=>{ playSound(`${id}`); styleChange();}} >
      {label}
      <audio preload="none" ref = {audioRef} data-drum = {id} id = {label} className = "clip" src={source} ></audio>
      </div>
      
      
      
      </>
    );
  };
  
  export default NewSfxButton;