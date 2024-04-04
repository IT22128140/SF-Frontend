import React from 'react';

const CheckBox = ({ label, checked, onChange  }) => {
  return (
    <label className="flex items-center space-x-2 text-white">
    <span>{label}</span>
      <input
        type="checkbox"
        className="form-checkbox text-white h-5 w-5 bg-DA6E2E checked:bg-white"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default CheckBox;
