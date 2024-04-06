import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

const InputNoLable = (props) => {

  const {
    register,
  } = useFormContext();


  return (
    <>
      {
        {
          input: (
            <input
              className={props.className}
              id={props.id}
              type={props.type}
              min={props.min}
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              {...register(props.name, props.validation)}
            />
          ),
          textarea: (
            <textarea
              className=""
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              {...register(props.name, props.validation)}
            />
          ),
        }[props.formtype]
      }
    </>
  );
};
InputNoLable.propTypes = {
  formtype: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,
  min: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};
export default InputNoLable;
