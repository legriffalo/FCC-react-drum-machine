import React, { useState, useEffect } from 'react';

const KeyCheck: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState<string>('');

  // Effect to add and remove global keyboard event listener
  useEffect(() => {
    // Handle keydown event on the whole document
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeyPressed(event.key); // Update the key that was pressed
    };

    // Add event listener for keydown on the document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <p>Last key pressed globally: {keyPressed}</p>
    </div>
  );
};

export default KeyCheck;