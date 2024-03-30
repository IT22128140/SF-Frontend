import React from 'react';

const TableView = ({ headers }) => {
  return (
    <thead>
      <tr className='bg-orange-100'>
        {headers.map((header, index) => (
          <th className='border border-slate-700 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider' key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableView;
