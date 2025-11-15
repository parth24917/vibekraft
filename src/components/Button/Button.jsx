import React from 'react';
import './Button.css';

const Button = ({ onClick, children, type = 'button', disabled = false }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
