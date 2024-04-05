import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CheckBox from '../../components/CheckBox';

function GenerateSalary() {
  return (
    <div>  
    <div>GenerateSalary</div>
    <CheckBox /> {/* Render CheckBox component */}
    </div>

  )
}

export default GenerateSalary