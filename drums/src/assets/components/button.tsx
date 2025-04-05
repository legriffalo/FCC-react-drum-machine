import React from 'react';

// Define the type for the props
interface ButtonProps {
  id?:string;
  label?: string;
  onClick?: () => void;
  url?:string;
}

const Button: React.FC<ButtonProps> = ({ id, label, onClick, url }) => {
  return (
    <div className="">

      <button id = {id} className = "mt-[3vh] btn btn-md  btn-primary" onClick={onClick} >
        <a href = {url} target = "_blank" rel="noopener noreferrer">
        {label}
      </a>
      </button>
    </div>

  );
};

export default Button;
