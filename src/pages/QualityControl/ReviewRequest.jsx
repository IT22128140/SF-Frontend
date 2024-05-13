import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import SearchBar from "../../components/SearchBar3.jsx";
import TableView from '../../components/table/TableView';
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DeleteButton from "../../components/button2/DeleteButton";
import DeleteFinalProduct from "./DeleteFinalProduct";
import NoteTakingApp from '../../components/Keep/NoteTakingApp';

const ReviewRequest = () => {
  const [productRequests, setProductRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const headers = ['Request Id', 'Product Code','Fabric Type','Color', 'Stitching Type','Quantity', 'Accept Status', 'Operations'];
  
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/qualityControl/productRequest/requestReview')
      .then((response) => {
        setProductRequests(response.data.data);

        const total = response.data.data.reduce((acc, curr) => acc + curr.quantity, 0);
        setTotalQuantity(total);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  

  const itemCountMap = {};
  productRequests.forEach((request) => {
    if (request.productCode) {
      const productCode = request.productCode.toLowerCase();
      itemCountMap[productCode] = (itemCountMap[productCode] || 0) + 1;
    }
  });

  
  const filteredRequests = productRequests.filter((v) => v.productCode && v.productCode.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = productRequests.length;



  return (
    <div className='p-4'>
      <QENavbar
        home={true}
        cel={false}
        rel={false}
        fel={false}
        att={false}
        sal={false}
      />
      <div className='p-4'>
        <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Review Request For Quality Evaluation</h1>
        </div>
        <SearchBar placeholder={"Enter the Product code"} onSearch={setSearch} />
        {loading ? (
          <Spinner />
        ) : (
          <div> 
          <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
              {productRequests && filteredRequests.map((productRequest, index) => (
                <tr key={productRequest._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.requestId}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.productCode}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.fabricType}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.color}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.stitchingType}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.quantity}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productRequest.inspectionStatus}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/qualityControl/reviewRequest/view/${productRequest._id}`}>
                        <AcceptButton className='mr-2'>
                          Accept Product
                        </AcceptButton>
                      </Link>
                      <Link to={`/qualityControl/reviewRequest/edit/${productRequest._id}`}>
                        <EditButton className='mr-2'>
                          Edit
                        </EditButton>
                      </Link>
                      <Link to={`/qualityControl/reviewRequest/delete/${productRequest._id}`}>
                      <DeleteButton className='mr-2' >
                        Delete
                      </DeleteButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          <div className="text-center mt-4 mb-8">
            <p>Total Items : {totalItemCount}</p>
            <p>Total Items Matching "{search}" : {itemCount}</p>
            <p>Total Items Quantity in QC : {totalQuantity}</p>
          </div>
          <div className="text-center font-bold mt-4 mb-8">
            {Object.entries(itemCountMap).map(([productCode, count]) => (
              count > 1 && <p key={productCode}>"{productCode}" Product Code is repeting</p>
            ))}
          </div>
          <div className="text-center font-bold mt-4 mb-8">
            {totalQuantity > 250 ? (
              <div className="text-center text-red-600 font-bold mt-4 mb-8">
              <p> QC Depertment Maximum Processing Count Is Almost Full</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      <NoteTakingApp />
      <StaffFooter />
    </div>
  );
};

export default ReviewRequest;
