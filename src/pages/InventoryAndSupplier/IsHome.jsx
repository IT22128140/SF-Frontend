import React from "react";
import IsNavbar from "../../components/navbar/staffheader/IsNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DashboardCard from "../../components/DashboardCard.jsx";
import ViewButton from "../../components/button2/ViewButton.jsx";

import { Link } from "react-router-dom";

const IsDashboard = () => {
  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bghome' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <IsNavbar home={true} />

      <div className="p-4">
        <h1 className="my-8 text-4xl font-semibold font-Philosopher text-ternary">
          Dashboard
        </h1>

        <div className="flex flex-row justify-evenly">
          <DashboardCard
            topic="Suppliers Management"
            subtopic1="Add New Supplier"
            link1="/SupplierDetails/AddSuppliers"
            subtopic2="Suppliers Details"
            description="View all details of Suppliers"
            link2="/SupplierDetails"
          />
          <DashboardCard
            topic="Raw Material Stock"
            subtopic1="Add Raw Materials"
            link1="/RawMaterialStock/AddRMaterial"
            subtopic2="View Available Raw Materials"
            description="View all available raw materials "
            link2="/RawMaterialStock"
          />
        </div>

        <div className="flex flex-row justify-evenly">
          <DashboardCard
            topic="Machine part stock"
            subtopic1="Add Machine parts"
            link1="/MachinePartStock/AddMachinepart"
            subtopic2="View Machine parts"
            description="View available machine parts in the stock"
            link2="/MachinePartStock"
          />
          
        <div className="flex flex-row justify-evenly">
         
          <div>
            <div className="py-8 px-14">
              <div className="border border-black rounded-xl w-[800px] h-fit  flex flex-col items-center font-BreeSerif p-6">
                <h1 className="text-3xl font-Philosopher text-ternary">
                  Raw Material Requests
                </h1>

                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="pb-2 text-xl text black">
                    View Raw Material Requests
                  </h2>
                  <p className="pb-2 text-black text-md">
                    View raw material requests from Prodction Manager.
                  </p>

                  <Link to="/RMRequests">
                    <ViewButton />
                  </Link>
                </div>
                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="pb-2 text-xl text black">
                    View Machine Part Requests
                  </h2>
                  <p className="pb-2 text-black text-md">
                    View machine part requests from Maintenance Manager
                  </p>

                  <Link to="/shortages/view">
                    <ViewButton />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          
        </div>
      </div>

     

      <StaffFooter />
    </div>
  );
};

export default IsDashboard;