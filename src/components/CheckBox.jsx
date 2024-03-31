import React from 'react';

const CheckBox = ({ labelText }) => {
  return (
    <div className="dark:bg-black/10">
      <label className="text-white">
        <input className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10" type="checkbox" />
        {labelText}
      </label>
    </div>
  );
};

export default CheckBox;
