import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView'
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import NoteTakingApp from '../../components/Keep/NoteTakingApp';
import CustomCard2 from "../../components/homecontainer/CustomCard2";

const QualityControl = () => {
  const [loading, setLoading] = useState(false);
  const [productRequests, setProductRequests] = useState([]);
  const [pendingItemCount, setPendingItemCount] = useState(0); 


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/qualityControl/productRequest')
      .then((response) => {
        setProductRequests(response.data.data);

        const total = response.data.data.reduce((acc, curr) => acc + curr.quantity, 0);
        setTotalQuantity(total);

        // Count pending items
        const pendingCount = response.data.data.filter(item => item.inspectionStatus === 'pending').length;
        setPendingItemCount(pendingCount);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  

    const handleButton1Click = () => {
        // Handle button 1 click logic
      };
    
      const handleButton2Click = () => {
        // Handle button 2 click logic
      };
    
      return (
        <div className='relative' style={{ backgroundImage: "./Picture1.jpg", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <QENavbar
        home={true}
        cel={false}
        rel={false}
        fel={false}
        att={false}
        sal={false}
      />
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Welcome to the Quality Control Department</h1>
          <CustomCard2
            mainHeader="Main Header"
            subHeader1="Sub Header 1"
            subHeader2="Sub Header 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nulla eu mi sagittis ullamcorper."
            button2Label="Button 2 Label"
            onButton1Click={handleButton1Click}
            onButton2Click={handleButton2Click}
            className=" "
          />

{loading ? (
        <Spinner />
      ) : (
        <div> 
          
          <div className="text-center mt-4 mb-8">
          <p>Total Pending Items: {pendingItemCount}</p> {/* pendinitms try 1 */}
          </div>
        </div>
      )}

          <div className="text-center mt-4 mb-8">
            <p>Total Pending Items: {pendingItemCount}</p> {/* pendinitms try 2 */}
          </div>
          <NoteTakingApp />
        </div>
      );
    };

export default QualityControl;