import { Axios } from "axios";
import React, {useEffect, useState } from "react";
import { useParams } from "react-router";
import SubmitButton from "../../components/button2/SubmitButton";
import AddButton from "../../components/button2/AddButton";



const ChequeSubmit = () => {
  const [cheque, setCheque] = useState({});
  const { id } = useParams();
  const [file, setFile] = useState();
  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append('file', file);
    Axios.put(`http://localhost:5555/uploads/${id}`, formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

 
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[2399px] relative">
    <div>
      <div className="absolute  left-[591px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[64px] text-center tracking-[0] leading-[normal]">
        Cheque Submission
      </div>
      <div className="absolute top-[315px] left-[178px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[36px] text-center tracking-[0] leading-[normal]">
        Attach payement slip
        </div>
        <div className="absolute top-[400px] left-[591px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal] border border-black border-1 p-10 block">
        <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Upload</button>
        
      </div>

      </div>
        <div className="absolute top-[720px] left-[178px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[36px] text-center tracking-[0] leading-[normal]">
      Notice
    
      </div>
      <div className="absolute top-[770px] left-[591px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal] border border-black border-1 p-1 block">
          <div>
            <input type="text" placeholder="Enter notice"   className="w-150 h-30 " />
          </div>
        </div>
      <div className="absolute top-[1123px] left-[178px]  [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[36px] text-center tracking-[0] leading-[normal]">
        Attah New Sliip
      </div>
      <div className="absolute top-[1200px] left-[591px] [font-family: 'Inter-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal] border border-black border-1 p-10 block">
        <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        
      </div>

      </div>
      <div className='p-4 mx-auto max-w-lg '>
          
       <SubmitButton className="absolute top-[1500px] left-[591px]">Submit</SubmitButton>
            
       <AddButton className="absolute top-[1500px] left-[850px]">Add Cheque</AddButton>

            
          
           
          </div> 
      </div>
      </div>
     
     
    </div>
  );
  
};

export default ChequeSubmit;
