import React from 'react';

interface SfxButtonProps {
  id?:string;
  label?: string;
  onClick?: () => void;
  sound?:string;
}

const SfxButton: React.FC<SfxButtonProps> = ({ id, label, onClick }) => {
    return (
      <>
      <div id = {id} className = "btn btn-primary" onClick={onClick}>
          {label}
      </div>
      
      
      
      </>
    );
  };
  
  export default SfxButton;