import Input from "./Input.jsx";
import { useFormContext } from "react-hook-form";
import { passwordValidation } from "../../utils/inputValidations.js";

const Password = () => {

  const {
    watch,
  } = useFormContext()

  const watchpassword = watch("password", "");

  return (
    <>
      <div className="flex flex-col w-[100%]">
        <Input
          formtype="input"
          label="Password"
          id="password"
          type="password"
          name="password"
          {...passwordValidation}
        />
      </div>
      <div className="flex flex-col w-[100%]">
        <Input
          formtype="input"
          label="Confirm password"
          id="confirm_password"
          type="password"
          name="confirm_password"
          validation={{
            validate: (value) => {
              if (value === watchpassword) {
                return true;
              } else {
                return "Passwords do not match";
              }
            },
          }}
        />
      </div>
    </>
  );
};

export default Password;
