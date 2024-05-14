import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import NoteTakingApp from '../../components/Keep/NoteTakingApp';
import DashboardCard from '../../components/DashboardCard';

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
      <h1 className='text-5xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Welcome to the Quality Control Department</h1>
      <div className = 'flex flex-row ml-12'>
            <DashboardCard
             topic = 'Product Review'
             subtopic1 = 'Add Product Review'
             link1 = '/qualityControl/reviewRequest/pendingRequest'
             subtopic2 = 'View Product Reviews'
             description= 'Visit this page if you want View Product Reviews.'
             link2 = '/qualityControl/reviewReport'
            />
            <DashboardCard
             topic = 'Product Release'
             subtopic1 = 'Add new Release Product'
             link1 = '/qualityControl/reviewReport/actionRelease'
             subtopic2 = 'View Release Product'
             description= 'Visit this page if you want to view Release Product.'
             link2 = '/qualityControl/releaseProduct'
            />
        </div>
       

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