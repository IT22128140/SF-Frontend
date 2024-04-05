import Select from "../../components/form/Select.jsx";
import { provinces } from "../../utils/arrays.js";
import { districtsByProvince } from "../../utils/arrays.js";
import { useFormContext } from "react-hook-form";

const ProvinceDistrictSelect = () => {
  const { watch } = useFormContext();

  const watchProvince = watch("province", "");

  return (
    <>
      <Select
        className="h-11 p-2 border-gray-200 rounded-md border-2 shadow-sm"
        label={"Province"}
        name="province"
        id="province"
        firstOption={"Select your province"}
        options={provinces}
      ></Select>

      {/*district*/}
      <div className="ml-20">
        <Select
          className="h-11 p-2 border-gray-200 rounded-md border-2 shadow-sm"
          label={"District"}
          name={"district"}
          id={"district"}
          firstOption={"Select your district"}
          disabled={!watchProvince}
          options={watchProvince ? districtsByProvince[watchProvince] : []}
        ></Select>
      </div>
    </>
  );
};

export default ProvinceDistrictSelect;
