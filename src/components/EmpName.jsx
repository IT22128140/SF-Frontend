import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const EmpName = (props) => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/employee/${props.id}`)
      .then((res) => {
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, [props.id]);
  });
  return (
    <div>
      {empData.firstName} {empData.lastName}
    </div>
  );
};

EmpName.propTypes = {
  id: PropTypes.string,
};

export default EmpName;
