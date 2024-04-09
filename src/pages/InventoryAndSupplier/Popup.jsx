import React from 'react'
import { useState } from 'react';
import MyModal from '../../components/MyModal';

function Popup() {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className="flex flex-col items-center h-screen gap-6 text-white bg-slate-700">
      <h1 className="mt-4 text-5xl font-bold">Pop model</h1>
      <button onClick={() => setShowModal(true)} className='px-4 py-2 text-lg rounded-lg bg-violet-500'>Get the eBook</button>
     {showModal && <MyModal onClose={() => setShowModal(false)}/>}
    </div>
  )
}

export default Popup;