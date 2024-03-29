import React from 'react';

const TableView = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th className='border border-slate-600 rounded-md max-md:hidden' key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableView;
