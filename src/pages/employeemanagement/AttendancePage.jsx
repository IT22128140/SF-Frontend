// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import BackButton from "../../components/button/BackButton.jsx";
// import Spinner from "../../components/Spinner.jsx";
import Input from "../../components/form/Input.jsx";
import SubmitButton from "../../components/button2/SubmitButton.jsx";

const AttendancePage = () => {
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <div>
      <HrNavbar att={true} />
      <div className="p-4">
        <BackButton />
        <center>
          <h1 className="text-6xl mx-[1.75%] my-8 font-Philosopher text-ternary font-semibold">
            Employee Attendance
          </h1>
        </center>
        {/* {loading ? <Spinner /> : ""} */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit()}>
            <div className="flex fle-row m-8 w-auto">
              <Input
                formtype="input"
                label="Date"
                id="date"
                type="date"
                placeholder="Select Date"
                name="date"
                validation={{ required: "Date is required" }}
              />

              <div className="mt-8 ml-10">
                <SubmitButton title="Submit" />
              </div>
            </div>
          </form>
        </FormProvider>

        <button type="submit">Generate Report</button>
      </div>
      <StaffFooter />
    </div>
  );
};

export default AttendancePage;
