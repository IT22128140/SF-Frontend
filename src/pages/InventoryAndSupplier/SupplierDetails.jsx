import React from 'react';
import Button from '../../components/Button';

function SupplierDetails() {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add your desired functionality here
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="text-center">
        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[60px] tracking-[0] leading-[normal]">
          Suppliers Details
          
          <Button
            onClick={handleClick}
            type="submit"
            className="mt-4"
           
          >
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SupplierDetails;
