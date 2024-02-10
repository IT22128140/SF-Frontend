import Select from "../../components/form/Select.jsx";
import { provinces } from "../../utils/arrays.js";
import { districtsByProvince } from "../../utils/arrays.js";
import { useFormContext } from "react-hook-form";

const ProvinceDistrictSelect = () => {
  const { watch } = useFormContext();

  const watchProvince = watch("province", "");

  return (
    <>
      <div className="flex flex-col w-[100%]">
        <Select
          label={"Province"}
          name="province"
          id="province"
          firstOption={"Select your province"}
          options={provinces}
        ></Select>
      </div>

      {/*district*/}
      <div className="flex flex-col w-[100%]">
        <Select
          label={"District"}
          name={"district"}
          id={"district"}
          firstOption={"Select your district"}
          disabled={!watchProvince}
          options={watchProvince ? districtsByProvince[watchProvince] : []}
        >
        </Select>
      </div>
    </>
  );
};

export default ProvinceDistrictSelect;
