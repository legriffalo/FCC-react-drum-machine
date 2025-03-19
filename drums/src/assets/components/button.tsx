import React from 'react';

// Define the type for the props
interface ButtonProps {
  id?:string;
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, label, onClick }) => {
  return (
    <div className="">
      <button id = {id} className="btn btn-md  btn-primary" onClick={onClick}>
        {label}
      </button>
    </div>

  );
};

export default Button;
