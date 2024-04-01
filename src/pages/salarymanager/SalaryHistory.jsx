import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';




function SalaryHistory() {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/salaryHistory')
      .then(response => {
        setSalaryHistory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>SalaryHistory</div>
  )
}

export default SalaryHistory