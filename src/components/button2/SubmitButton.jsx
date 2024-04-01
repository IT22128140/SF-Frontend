import React from 'react';

const SubmitButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 bg-red-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
    >
      <span className="mr-2">{children}</span> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>

    </button>
  );
};

export default SubmitButton;
